import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";
import SelectHotel from "@pages/SelectHotel/SelectHotel";
import OneHotel from "@pages/OneHotel/OneHotel";
import ConfirmPage from "@pages/ConfirmPage/ConfirmPage";

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
        <Route path="/ConfirmPage" element={<ConfirmPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
