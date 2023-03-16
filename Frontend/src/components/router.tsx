import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./pages/home";
import Iris from "./pages/iris";

export default function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Analysis/Iris-flower" element={<Iris/>} />
                    <Route path="/About-us" element={<Iris/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}