import LoggingBtn from "../Buttons/LoggingBtn";
import googleLogo from '../../assets/system_picture/Logo/icons8-google-96 (1).png';
import OrBlock from "../OrBlock/OrBlock";
import InputForm from "../Inputs/InputForm";
import FormLink from "../Links/FormLink";
import DoubleInputForm from "../Inputs/DoubleInputForm";

export default function LogInFrom() {
    return (
        <div className="g-form">
            <p className="g-form_head-line">Create new Account to be part of task it</p>
            <p className="g-form_sub-head-line">Create new Account to be part of task it</p>
            <LoggingBtn cls="g-google-btn">
                <img src={googleLogo} className="google-btn-icon" alt="" />
                <p>Sign up with google</p>
            </LoggingBtn>
            <OrBlock />
            <DoubleInputForm  type="email" label='first name' placeholder="jhon" label2="last name" placeholder2="sami" />
            <InputForm  type="email" label='email' placeholder="jhon@example.com" />
            <InputForm  type="password" label='password' placeholder="********" />
            <InputForm  type="repassword" label='repassword' placeholder="********" />
            <LoggingBtn cls="g-form-btn_dark-blue" >
                <p>Sign up</p>
            </LoggingBtn>
            <FormLink to="/log/log-in" text="Already have an account? Log in" />

        </div>
    ) 
}