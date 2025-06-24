import { Outlet , Link } from "react-router-dom";

export default function MainLayout() {
    return (
        <div>
            <div className="">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
            <Outlet />
        </div>
    )
}