
import { BrowserRouter, Routes, Route } from "react-router-dom";


import LogLayout from "../layouts/LogLayout";
import LogInFrom from "../pages/Log/LogInFrom";
import SignUpFrom from "../pages/Log/SignUpFrom";


import LandingLayout from '../layouts/LandingLayout';
import Main from "../pages/LandingPages/main";

import WorkSpaceLayout from "../layouts/WorkSpaceLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LandingLayout />}>
            <Route index  element={<Main />}></Route>
        </Route>
        <Route path="user" element={<WorkSpaceLayout />}>
            {/* <Route index  element={<Main />}></Route> */}
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