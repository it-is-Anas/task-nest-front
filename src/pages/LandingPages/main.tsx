import MainLandingPageHeader from "../../components/Headers/MainLandingPageHeader";
import sec_one_pic from '../../assets/system_picture/Landing page/sec_one_pic.png';
import LoggingBtn from "../../components/Buttons/LoggingBtn";
import LandingFeatureCard from "../../components/Landing page card/LandingFeatureCard";
import SectionHeadLine from "../../components/Section Head Line/SectionHandLine";
import LandingServiceCard from "../../components/Landing page card/LandingServiceCard";
import ContactUsImg from '../../assets/system_picture/Landing page/sec_five_pic.png';
import InputForm from "../../components/Inputs/InputForm";
import TextAreaForm from "../../components/Inputs/TextAreaForm";
import feat1Icon from '../../assets/system_picture/Landing page/feature icon/feat1.png';
import feat2Icon from '../../assets/system_picture/Landing page/feature icon/feat2.png';
import feat3Icon from '../../assets/system_picture/Landing page/feature icon/feat3.png';
import feat4Icon from '../../assets/system_picture/Landing page/feature icon/feat4.png';

import securityImg from '../../assets/system_picture/Landing page/Service picture/Security On-pana.png';
import easyAndFreeToUseImg from '../../assets/system_picture/Landing page/Service picture/Enthusiastic-pana.png';
import solveWithTeamImg from '../../assets/system_picture/Landing page/Service picture/At the office-amico (1).png';



export default function Main(){
    const features = [
        {
            id: 1,
            icon: feat1Icon,
            title: 'Security & Customization',
            desc: `User Roles & Permissions
                Dark Mode / Themes
                Two-Factor Authentication
                Data Backup & Export Options`
        },
        {
            id: 2,
            icon: feat2Icon,
            title: ' Integration & Syncing',
            desc: `Email Integration
                Slack / Discord / Teams Integration
                Offline Mode
                Cloud Sync`
        },
        {
            id: 3,
            icon: feat3Icon,
            title: 'Collaboration Tools',
            desc: `Team Workspaces
                    Task Assignment
                    Comments & Mentions
                    Real-time Updates
                    Activity Logs / History`
        },
        {
            id: 4,
            icon: feat4Icon,
            title: 'Core Task Features',
            desc: `Task Creation & Editing
                    Due Dates & Reminders
                    Prioritization (High/Medium/Low)
                    Recurring Tasks
                    Subtasks / Checklists
                    Task Status (To Do, In Progress, Done)`
        },
    ];

    const featuresTag = features.map(ele=>(<LandingFeatureCard key={ele.id} icon={ele.icon} title={ele.title} desc={ele.desc} />));

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
                        { featuresTag }
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
                    <div className="service-card-box">
                        <LandingServiceCard img={securityImg} label="Security"  />
                        <LandingServiceCard img={easyAndFreeToUseImg} label="Easy & free to use"  />
                        <LandingServiceCard img={solveWithTeamImg} label="Solve with team"  />
                    </div>
                </div>
            </div>
            <div className="user-section sec-5">
                <div className="container">
                    <SectionHeadLine  headline="Let's talk to us" subHeadline="Contact us" />
                    <div className="body">
                        <div className="img-col flex-center">
                            <img src={ContactUsImg} alt="" className="" />
                        </div>
                        <div className="text-col">
                            <p className="head-line">Send a Message :</p>
                            <InputForm  type="text" label='name' placeholder="Jhon" />
                            <InputForm  type="email" label='email' placeholder="jhon@example.com" />
                            <TextAreaForm  label='Message' placeholder="Hello how you doing ...?" />
                            <LoggingBtn cls="g-form-btn_dark-blue send-btn" >
                                <p>Send</p>
                            </LoggingBtn>
                            
                        </div>
                    </div>
                </div>
            </div>
            <footer className="user-section footer" >
                <div className="container">
                    <p className="">TaskNest2025, All rights is reserved</p>
                </div>
            </footer>
            
        </>
    );
}