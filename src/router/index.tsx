import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import LogLayout from "../layouts/LogLayout";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogLayout />}>
            {/* <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root')!);
// root.render(<App />);