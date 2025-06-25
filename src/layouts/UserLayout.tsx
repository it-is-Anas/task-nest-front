import { Outlet } from "react-router-dom";
import "../style/UserLayout.css";

export default function UserLayout() {
    return (
        <div className="user-layout" >  
            <Outlet></Outlet>
        </div>
    )
} 