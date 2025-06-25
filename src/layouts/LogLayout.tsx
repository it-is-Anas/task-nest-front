import { Outlet } from "react-router-dom";

import loggingImg from "../assets/system_picture/loggingPic1.jpg";
import LoggingLogo from "../components/Logo/LoggingLogo";

export default function LogLayout() {
    return (
        <div className="g-layout" >  
            <form action="" className="g-layout_form-sec">
                <LoggingLogo />
                <Outlet />
            </form>
            <div className="g-layout_picture-sec">
                <img className='g-layout_picture' src={loggingImg} alt="" />
            </div>
        </div>
    )
} 