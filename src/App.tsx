import Homepage from "./pages/Homepage";
import TestHomepage from "./pages/TestHomepage";
import Devlog from "./pages/Devlog"
import MysteryPage from "./pages/MysteryPage";
import GoatCounterTracker from "./components/GoatCounterTracker";
import BackgroundMusic from "./components/BackgroundMusic";
import eyes from "./assets/eyes.svg";

import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <>
      <BrowserRouter>

        <GoatCounterTracker />
        <BackgroundMusic />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/devlog" element={<Devlog />} />
          <Route path="/testHomePage" element={<TestHomepage />} />
          <Route path="/mystery" element={<MysteryPage />} />
        </Routes>
      </BrowserRouter>
      <div className="eyeballs">
        <img src={eyes} alt="eyeballs"/>
      </div>
      
    </>
  );
}

export default App;