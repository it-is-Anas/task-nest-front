import LoggingBtn from "../../components/Buttons/LoggingBtn";
import googleLogo from '../../assets/system_picture/Logo/icons8-google-96 (1).png';
import OrBlock from "../../components/OrBlock/OrBlock";
import InputForm from "../../components/Inputs/InputForm";
import FormLink from "../../components/Links/FormLink";
import DoubleInputForm from "../../components/Inputs/DoubleInputForm";
import { useEffect, useState } from "react";
import GMsg from "../../components/AppMessage/GMsg";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import type { RootState } from '../../Store/store';
import { updateData } from '../../Store/States/User';
import LoadingPage from "../../components/Loading Page/LoadingPage";

// <p onClick={() => dispatch(increment())} >Count {count} </p>


export default function LogInFrom() {
    const navigate = useNavigate();

    const [firstName,setFirstName] = useState<string>('');
    const [lastName,setLastName] = useState<string>('');
    const [email,setEmail] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    const [rePassword,setRePassword] = useState<string>('');

    const dispatch = useDispatch();
    
    const userData = useSelector((state: RootState) => state.user);

    const [loader,setLoader] = useState(false);


    
    function validate(): string | null {
        if (!firstName.trim() || !lastName.trim()) {
            return "First name and last name are required.";
        }
        

        if (!email.trim()) {
            return "Email is required.";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return "Email is not valid.";
        }

        if (!password || !rePassword) {
            return "Password and confirmation are required.";
        }


        if (password.length < 6) {
            return "Password must be at least 6 characters.";
        }

        if (password !== rePassword) {
            return "Passwords do not match.";
        }

        return null;
    }


    const apiUrl = import.meta.env.VITE_API_URL;

    async function signUp(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        const error = validate();
        if (error) {
            setMsg(error);
            return;
        }   

        setLoader(true);

        setMsg("Sign-up successful!"); // Or trigger actual submission
        try{
            const response = await axios.post(apiUrl+'/user',{
                firstName,
                lastName,
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
            if(err.status === 409){
                setMsg(err.response.data.message);
            } 
            if(err.status === 400){
                setMsg(err.response.data.message[0]);
            }
        }

    }

    const [msg,setMsg] = useState('');
    useEffect(()=>{
        const clearner = setTimeout(() => {
            setMsg('');
        }, 2000);
        return () => clearTimeout(clearner);
    },[msg]);


    return (
        <>
            <div className="g-form">
                <p className="g-form_head-line">Create new Account to be part of task it</p>
                <p className="g-form_sub-head-line">Create new Account to be part of task it</p>
                <LoggingBtn cls="g-google-btn">
                    <img src={googleLogo} className="google-btn-icon" alt="" />
                    <p>Sign up with google</p>
                </LoggingBtn>
                <OrBlock />
                <DoubleInputForm value={firstName} setValue={setFirstName}  value1={lastName} setValue1={setLastName} type="text" label='first name' placeholder="jhon" label2="last name" placeholder2="sami" />
                <InputForm value={email} setValue={setEmail} type="email" label='email' placeholder="jhon@example.com" />
                <InputForm  value={password} setValue={setPassword} type="password" label='password' placeholder="********" />
                <InputForm  value={rePassword} setValue={setRePassword} type="password" label='repassword' placeholder="********" />
                <LoggingBtn onClick={signUp} cls="g-form-btn_dark-blue" >
                    <p>Sign up</p>
                </LoggingBtn>
                <FormLink to="/log/log-in" text="Already have an account? Log in" />
            </div>
            <GMsg msg={msg} />
            <LoadingPage opened={loader} />
        </>

    ) 
}