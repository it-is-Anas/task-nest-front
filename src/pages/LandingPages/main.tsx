import MainLandingPageHeader from "../../components/Headers/MainLandingPageHeader";
import sec_one_pic from '../../assets/system_picture/Landing page/sec_one_pic.png';
import LoggingBtn from "../../components/Buttons/LoggingBtn";
import LandingFeatureCard from "../../components/Landing page card/LandingFeatureCard";
import SectionHeadLine from "../../components/Section Head Line/SectionHandLine";
import LandingServiceCard from "../../components/Landing page card/LandingServiceCard";


export default function Main(){
    return (
        <>
            <div className="user-section main-landing-sec sec-1 with-header">
                <MainLandingPageHeader></MainLandingPageHeader>
                <div className="main-landing-sec-1_body">
                    <div className="container grid-two-col">
                        <div className="text-box">
                            <div className="head-line">
                                Organize your Projects 
                                Finish your tasks
                                Share and divide the missions 
                            </div>
                            <div className="sub-head-line">
                                Lipsum generator: Lorem Ipsum - All the facts Lipsum generator: Lorem Ipsum - All the facts Lipsum generator: Lorem Ipsum - All the facts 
                            </div>
                            <div className="box-btn">
                                <LoggingBtn cls='auto-width main-landing fb' >Start free trail</LoggingBtn>
                                <LoggingBtn cls='auto-width main-landing sb' >Create Account</LoggingBtn>
                            </div>
                        </div>
                        <div className="img-box">
                            <img src={sec_one_pic} alt="" className="img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="user-section flex-center main-landing-sec-2">
                <div className="container ">
                    <p className="sub-head-line">Create new Account to be part</p>
                    <p className="head-line">Create an account and take advantage of the free offer</p>
                    <div className="feature-box">
                        <LandingFeatureCard></LandingFeatureCard>
                        <LandingFeatureCard></LandingFeatureCard>
                        <LandingFeatureCard></LandingFeatureCard>
                        <LandingFeatureCard></LandingFeatureCard>
                    </div>
                </div>  
            </div>  
            <div className="user-section sec-3">
                <div className="container">
                    <SectionHeadLine  headline="Why All prefere us" subHeadline="Why Us" />
                    <div className="body flex-center ">
                        <p className="title">Built for Doers, Dreamers, and Teams</p>
                        <p>
                            We’re more than just a to-do list — we're your productivity partner. Whether you’re managing personal goals or leading a team, our platform helps you stay focused, organized, and in control.
                        </p>
                        <p>
                            🚀 Lightning-fast and easy to use
                        </p>
                        <p>
                            🤝 Designed for solo users and teams
                        </p>
                        <p>
                            🔄 Seamless integrations with your favorite tools
                        </p>
                        <p>
                            📱 Always in sync — across desktop and mobile
                        </p>
                    </div>
                </div>
            </div> 
            <div className="user-section sec-4">
                <div className="container">
                    <SectionHeadLine  headline="What Task it offer" subHeadline="Services" />
                    <div className="service-box">
                        <LandingServiceCard />
                        <LandingServiceCard />
                        <LandingServiceCard />
                    </div>
                </div>
            </div>
        </>
    );
}