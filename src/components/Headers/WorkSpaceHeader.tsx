import LoggingLogo from "../Logo/LoggingLogo";
import WorkSpaceSeachBox from "../SearchBox/WorkSpaceSearchBox";
import NotficationBell from '../../assets/system_picture/System icons/icons8-bell-48.png';
import ProfilePicture from '../../assets/system_picture/System icons/profile pricture.jpg';
import MenuBurger from '../../assets/system_picture/System icons/menu-burger.png';
import SearchIcon from '../../assets/system_picture/System icons/icons8-search-100.png';
import MobileMenuShell from "../../shellComponents/MobileMenu/MobileMenuShell";

export default function WorkSpaceLayout(){

   

    return (
        <>
            <header className="work-space-header" >
                <LoggingLogo />
                <WorkSpaceSeachBox cls='pc' />
                <div className="flex-center  work-space-header_icon-box">
                    <img src={SearchIcon} alt="" className="work-space-header_icon mobile" />
                    <img src={NotficationBell} alt="" className="work-space-header_icon" />
                    <img src={ProfilePicture} alt="" className="work-space-header_icon pc profile-pic" />
                    <img src={MenuBurger} alt="" className="work-space-header_icon mobile" />
                </div>
            </header>
            <MobileMenuShell />
        </>
    );
}