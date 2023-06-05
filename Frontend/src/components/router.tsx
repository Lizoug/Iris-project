import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./pages/home";
import Iris from "./pages/iris";
import {AboutUs} from "./pages/about-us";
import {FlowerPredictor} from "./pages/FlowerPredictor";

export default function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Analysis/Iris-flower" element={<Iris/>} />
                    <Route path="/Analysis/FlowerPredictor" element={<FlowerPredictor/>}/>
                    <Route path="/About-us" element={<AboutUs/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
