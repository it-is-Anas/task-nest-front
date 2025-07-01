
import { BrowserRouter, Routes, Route } from "react-router-dom";


import LogLayout from "../layouts/LogLayout";
import LogInFrom from "../pages/Log/LogInFrom";
import SignUpFrom from "../pages/Log/SignUpFrom";


import LandingLayout from '../layouts/LandingLayout';
import Main from "../pages/LandingPages/main";

import WorkSpaceLayout from "../layouts/WorkSpaceLayout";
import UserDashboard from "../pages/WorkSpacePages/Dashboard";
import UserInbox from "../pages/WorkSpacePages/Inbox";
import UserProjects from "../pages/WorkSpacePages/Projects";
import UserTeams from "../pages/WorkSpacePages/Teams";
import UserSettings from "../pages/WorkSpacePages/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LandingLayout />}>
            <Route index  element={<Main />}></Route>
        </Route>
        <Route path="work-space" element={<WorkSpaceLayout />}>
            <Route path='home' index element={<UserDashboard />}></Route>
            <Route path="inbox"  element={<UserInbox />}></Route>
            <Route path="projects"  element={<UserProjects />}></Route>
            <Route path="teams"  element={<UserTeams />}></Route>
            <Route path="settings"  element={<UserSettings />}></Route>
        </Route>

        <Route path="log" element={<LogLayout />}>
            <Route path="log-in" element={<LogInFrom />}></Route>
            <Route path="sign-up" element={<SignUpFrom />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root')!);
// root.render(<App />);