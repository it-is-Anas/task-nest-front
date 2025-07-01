import { Outlet } from "react-router-dom";
import WorkSpaceHeader from '../components/Headers/WorkSpaceHeader';
import WorkSpaceAside from "../components/Aside/WorkSpaceAside";

export default function WorkSpaceLayout() {
    return (
        <div className="user-layout user-work-space" >  
            <div className="r1">
                <WorkSpaceHeader />
            </div>
            <div className="r2">
                <div className="c1">
                    <WorkSpaceAside />
                </div>
                <div className="c2">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
} 