import LoggingBtn from "../Buttons/LoggingBtn";

import dashboardIcon from '../../assets/system_picture/System icons/Dashboard.png';
import inboxIcon from '../../assets/system_picture/System icons/inbox.png';
import projectsIcon from '../../assets/system_picture/System icons/projects.png';
import teamIcon from '../../assets/system_picture/System icons/users.png';
import settingIcon from '../../assets/system_picture/System icons/settings.png';

export default function WorkSpaceAside(){
    return (
        <div className="work-space-aside">
            <LoggingBtn cls="work-space-aside_btn create-btn" >+ Add New Project</LoggingBtn>   
            <LoggingBtn navLink={true} to="/work-space/home" cls="work-space-aside_btn" >
                <img src={dashboardIcon} alt="" className="work-space-aside_btn-icon" />   
                <p className="work-space-aside_btn-label " >Dashboard</p>
            </LoggingBtn>   
            <LoggingBtn navLink={true} to="/work-space/inbox" cls="work-space-aside_btn" >
                <img src={inboxIcon} alt="" className="work-space-aside_btn-icon" />   
                <p className="work-space-aside_btn-label " >Inbox</p>
            </LoggingBtn>   
            <LoggingBtn navLink={true} to="/work-space/projects" cls="work-space-aside_btn" >
                <img src={projectsIcon} alt="" className="work-space-aside_btn-icon" />   
                <p className="work-space-aside_btn-label " >Projects</p>
            </LoggingBtn>   
            <LoggingBtn navLink={true} to="/work-space/teams" cls="work-space-aside_btn" >
                <img src={teamIcon} alt="" className="work-space-aside_btn-icon" />   
                <p className="work-space-aside_btn-label " >Teams</p>
            </LoggingBtn>   
            <LoggingBtn navLink={true} to="/work-space/settings" cls="work-space-aside_btn" >
                <img src={settingIcon} alt="" className="work-space-aside_btn-icon" />   
                <p className="work-space-aside_btn-label " >Settings</p>
            </LoggingBtn>   
        </div>
    );
}