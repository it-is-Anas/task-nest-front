import MainLogo from "../Logo/MainLogo";
import LoggingBtn from "../Buttons/LoggingBtn";

export default function MainLandingPageHeader(){
    return (
        <header className="main-landing_header " >
            <div className="container ">
                <MainLogo  />
                <div className="loging-btn">
                    <LoggingBtn  link={true} to={'/log/log-in'} cls='log-in-btn' >Log in</LoggingBtn>
                    <LoggingBtn  link={true} to={'/log/sign-up'}  cls='sign-up-btn' >Sign up</LoggingBtn>
                </div>
            </div>
        </header>
    ); 
}