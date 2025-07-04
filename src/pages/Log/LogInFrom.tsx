import LoggingBtn from "../../components/Buttons/LoggingBtn";
import googleLogo from '../../assets/system_picture/Logo/icons8-google-96 (1).png';
import OrBlock from "../../components/OrBlock/OrBlock";
import InputForm from "../../components/Inputs/InputForm";
import FormLink from "../../components/Links/FormLink";
import GMsg from "../../components/AppMessage/GMsg";
import LoadingPage from "../../components/Loading Page/LoadingPage";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateData } from "../../Store/States/User";
import { useNavigate } from "react-router-dom";



export default function LogInFrom() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [loader,setLoader] = useState(false);
    const [msg,setMsg] = useState('');
    useEffect(()=>{
        const clearner = setTimeout(() => {
            setMsg('');
        }, 2000);
        return () => clearTimeout(clearner);
    },[msg]);


    const apiUrl = import.meta.env.VITE_API_URL;

    const [email,setEmail] = useState<string>('');
    const [password,setPassword] = useState<string>('');
   
    function validate(): string | null {

        if (!email.trim()) {
            return "Email is required.";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return "Email is not valid.";
        }



        if (password.length < 6) {
            return "Password must be at least 6 characters.";
        }

        return null;
    }

    async function logIn(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        const error = validate();
        if (error) {
            setMsg(error);
            return;
        }   

        setLoader(true);

        setMsg("log-in successful!"); // Or trigger actual submission
        try{
            const response = await axios.post(apiUrl+'/user/log-in',{
                email,
                password
            });


            setLoader(false);
            
            if(response.status === 201){
                dispatch(updateData(response.data));
                navigate('/work-space/home');
            }
            
        }catch(err){
            setLoader(false);
            console.log(err);
            setMsg('Something went wrong please try again later');
            if(err.status === 422){
                setMsg(err.response.data.message);
            } 
            if(err.status === 400){
                setMsg(err.response.data.message[0]);
            }
        }

    }


    return (
        <>
        <div className="g-form">
            <p className="g-form_head-line">Create new Account to be part of task it</p>
            <p className="g-form_sub-head-line">Create new Account to be part of task it</p>
            <LoggingBtn cls="g-google-btn">
                <img src={googleLogo} className="google-btn-icon" alt="" />
                <p>Log in with google</p>
            </LoggingBtn>
            <OrBlock />
                <InputForm value={email} setValue={setEmail} type="email" label='email' placeholder="jhon@example.com" />
                <InputForm  value={password} setValue={setPassword} type="password" label='password' placeholder="********" />
            <LoggingBtn onClick={logIn} cls="g-form-btn_dark-blue" >
                <p>Log in</p>
            </LoggingBtn>
            <FormLink to="/log/sign-up" text="Don't have an account? Sign up" />

        </div>
        <GMsg msg={msg} />
        <LoadingPage opened={loader} />

        </>
    ) 
}