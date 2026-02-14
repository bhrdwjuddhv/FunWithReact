import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BgChanger from "./pages/01_bgchanger.jsx";
import NotFound from "./pages/NotFound";
import RandomDog from "./pages/02_randomdog.jsx";
import Heropage from "./pages/03_findColours.jsx";
import Pomodoro from "./pages/04_pomodoro.jsx";
import CardPage from "./pages/componentPage/CardPage.jsx";
import ProfileCardPage from "./pages/componentPage/profileCardPage.jsx";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bgchanger" element={<BgChanger />} />
                <Route path="/randomdog" element={<RandomDog />} />
                <Route path="/perfectcolourfinder" element={<Heropage />} />
                <Route path="/pomodoro" element={<Pomodoro />} />
                <Route path="/generalcard" element={<CardPage />} />
                <Route path="/profilecard" element={<ProfileCardPage />} />


                {/* 404 route — ALWAYS LAST */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
