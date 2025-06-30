import MobileMenuShell from "../../shellComponents/MobileMenu/MobileMenuShell";


export default function MobileNotificationMenu({setOpenFun}:{setOpenFun:(func:()=>void)=>void}){
    
    const childreen = (
        <div className="mobile-menu" >
            <div className="notification-head-line">
                <p className="mobile-menu_title" >Notifications</p>
                <p className="mobile-menu_notification-number" >8</p>
            </div>
            <div className="mobile-search-menu_old-searches-box">
                {
                    [1,2,3,4,5,6,7,8].map((item, index)=>(
                        <p key={index} className="mobile-search-menu_old-search" >{`Old search ${index + 1}`}</p>
                    ))
                }
            </div>
        </div>
    );

    return (
        <div className="" >
            <MobileMenuShell getOpenPop={setOpenFun} childreen={childreen} />
        </div>
    );
}