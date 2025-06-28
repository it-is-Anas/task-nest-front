import { Outlet } from "react-router-dom";


export default function LandingLayout() {
    return (
        <div className="user-layout" >  
            <Outlet></Outlet>
        </div>
    )
} 