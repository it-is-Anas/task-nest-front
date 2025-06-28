import { Outlet } from "react-router-dom";

export default function MobileMenuShell(){

   //opened
    return (
        <div  className={'mobile-menu-shell'} > 
            <Outlet></Outlet>
        </div>
    );
}