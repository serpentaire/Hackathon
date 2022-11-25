import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";
import SelectHotel from "@pages/SelectHotel/SelectHotel";
import OneHotel from "@pages/OneHotel/OneHotel";
import OneHotel2 from "@pages/OneHotel2/OneHotel2";
import ConfirmPage from "@pages/ConfirmPage/ConfirmPage";
import BesoinAide from "@pages/BesoinAide/BesoinAide";

import Home from "./pages/Home/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SelectHotel" element={<SelectHotel />} />
        <Route path="/OneHotel" element={<OneHotel />} />
        <Route path="/OneHotel2" element={<OneHotel2 />} />
        <Route path="/ConfirmPage" element={<ConfirmPage />} />
        <Route path="/BesoinAide" element={<BesoinAide />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
