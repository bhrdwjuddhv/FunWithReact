import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BgChanger from "./pages/01_bgchanger.jsx";
import NotFound from "./pages/NotFound";
import RandomDog from "./pages/02_randomdog.jsx";
import Heropage from "./pages/03_findColours.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bgchanger" element={<BgChanger />} />
                <Route path="/randomdog" element={<RandomDog />} />
                <Route path="/perfectcolourfinder" element={<Heropage />} />

                {/* 404 route — ALWAYS LAST */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
