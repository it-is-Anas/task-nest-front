import MobileMenuShell from "../../shellComponents/MobileMenu/MobileMenuShell";
import LoggingBtn from "../Buttons/LoggingBtn";


export default function MobileBurgerMenu({setOpenFun}:{setOpenFun:(func:()=>void)=>void}){
    
    const childreen = (
        <div className="mobile-menu" >
            <div className="notification-head-line">
                <p className="mobile-menu_title" >Menu</p>
            </div>
            <div className="mobile-search-menu_old-searches-box">
                <LoggingBtn cls="mobile-menu_btn" >+ Add new</LoggingBtn>
                <LoggingBtn cls="mobile-menu_btn" >Dashboard</LoggingBtn>
                <LoggingBtn cls="mobile-menu_btn" >Inbox</LoggingBtn>
                <LoggingBtn cls="mobile-menu_btn" >Projects</LoggingBtn>
                <LoggingBtn cls="mobile-menu_btn" >Team</LoggingBtn>
                <LoggingBtn cls="mobile-menu_btn" >Prfile</LoggingBtn>
                <LoggingBtn cls="mobile-menu_btn" >Settings</LoggingBtn>
            </div>
        </div>
    );

    return (
        <div className="" >
            <MobileMenuShell getOpenPop={setOpenFun} childreen={childreen} />
        </div>
    );
}