import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import LogLayout from "../layouts/LogLayout";
import LogInFrom from "../components/Forms/LogInFrom";
import SignUpFrom from "../components/Forms/SignUpFrom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
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