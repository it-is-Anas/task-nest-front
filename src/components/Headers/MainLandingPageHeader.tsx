import LoggingLogo from "../Logo/LoggingLogo";
import LoggingBtn from "../Buttons/LoggingBtn";

export default function MainLandingPageHeader(){
    return (
        <header className="main-landing_header " >
            <div className="container ">
                <LoggingLogo />
                <div className="loging-btn">
                    <LoggingBtn cls='log-in-btn' >Log in</LoggingBtn>
                    <LoggingBtn cls='sign-up-btn' >Sign up</LoggingBtn>
                </div>
            </div>
        </header>
    ); 
}