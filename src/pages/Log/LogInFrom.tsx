import LoggingBtn from "../../components/Buttons/LoggingBtn";
import googleLogo from '../../assets/system_picture/Logo/icons8-google-96 (1).png';
import OrBlock from "../../components/OrBlock/OrBlock";
import InputForm from "../../components/Inputs/InputForm";
import FormLink from "../../components/Links/FormLink";

export default function LogInFrom() {
    return (
        <div className="g-form">
            <p className="g-form_head-line">Create new Account to be part of task it</p>
            <p className="g-form_sub-head-line">Create new Account to be part of task it</p>
            <LoggingBtn cls="g-google-btn">
                <img src={googleLogo} className="google-btn-icon" alt="" />
                <p>Log in with google</p>
            </LoggingBtn>
            <OrBlock />
            <InputForm  type="email" label='email' placeholder="jhon@example.com" />
            <InputForm  type="password" label='password' placeholder="********" />
            <LoggingBtn cls="g-form-btn_dark-blue" >
                <p>Log in</p>
            </LoggingBtn>
            <FormLink to="/log/sign-up" text="Don't have an account? Sign up" />

        </div>
    ) 
}