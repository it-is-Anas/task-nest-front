import LoggingLogo from "../Logo/LoggingLogo";
import WorkSpaceSeachBox from "../SearchBox/WorkSpaceSearchBox";
import NotficationBell from '../../assets/system_picture/System icons/icons8-bell-48.png';
import ProfilePicture from '../../assets/system_picture/System icons/profile pricture.jpg';
import MenuBurger from '../../assets/system_picture/System icons/menu-burger.png';
import SearchIcon from '../../assets/system_picture/System icons/icons8-search-100.png';
import MobileSearchMenu from "../PopUps/MobileSearchMenu";
import MobileNotificationMenu from "../PopUps/MobileNotificationMenu";
import { useRef } from "react";
import MobileBurgerMenu from "../PopUps/MobileMenuBurger";

export default function WorkSpaceLayout(){


    const openSearchPopUp = useRef<null|(()=> void)>(null);
    const setOpenSearchPopUp = (fun:()=>void):void=>{openSearchPopUp.current = fun};
    const openSearchPopUpFun = ():void=>{openSearchPopUp.current && openSearchPopUp.current()};
    
    const openNotificationMenu = useRef<null|(()=> void)>(null);
    const setopenNotificationMenu = (fun:()=>void):void=>{openNotificationMenu.current = fun};
    const openNotificationMenuFun = ():void=>{openNotificationMenu.current && openNotificationMenu.current()};
    
    
    const openMenuBurger = useRef<null|(()=> void)>(null);
    const setopenMenuBurger = (fun:()=>void):void=>{openMenuBurger.current = fun};
    const openMenuBurgerFun = ():void=>{openMenuBurger.current && openMenuBurger.current()};

    

    return (
        <>
            <header className="work-space-header" >
                <LoggingLogo />
                <WorkSpaceSeachBox cls='pc' />
                <div className="flex-center  work-space-header_icon-box">
                    <img onClick={openSearchPopUpFun} src={SearchIcon} alt="" className="work-space-header_icon mobile" />
                    <img onClick={openNotificationMenuFun} src={NotficationBell} alt="" className="work-space-header_icon mobile" />
                    <img src={NotficationBell} alt="" className="work-space-header_icon pc" />
                    <img src={ProfilePicture} alt="" className="work-space-header_icon pc profile-pic" />
                    <img onClick={openMenuBurgerFun} src={MenuBurger} alt="" className="work-space-header_icon mobile" />
                </div>
            </header>
            <MobileBurgerMenu setOpenFun={setopenMenuBurger} />
            <MobileNotificationMenu setOpenFun={setopenNotificationMenu} />
            <MobileSearchMenu setOpenFun={setOpenSearchPopUp} />
        </>
    );
}