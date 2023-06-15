import "./styles/main.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import GameAds from "./components/GameAds";

export interface GameProps {
    id: string;
    title: string;
    bannerUrl: string;
    _count: {
        Ads: number;
    }
}

function App() {    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game/:id/ads" element={<GameAds />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
