import { Outlet } from "react-router-dom";
import "../style/layouts.css";
import loggingImg from "../assets/system_picture/loggingPic1.jpg";
import LoggingLogo from "../components/Logo/LoggingLogo";

import LogInFrom from '../components/Forms/LogInFrom';
export default function LogLayout() {
    return (
        <div className="g-layout" >  
            <form action="" className="g-layout_form-sec">
                <LoggingLogo />
                <LogInFrom />
                
            </form>
            <div className="g-layout_picture-sec">
                <img className='g-layout_picture' src={loggingImg} alt="" />
            </div>
        </div>
    )
} 