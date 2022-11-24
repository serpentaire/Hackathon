import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";
import HotelCard from "@components/HotelCard/HotelCard";

import Home from "./pages/Home";
import Map from "./components/Map";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <div className="App">
        <Map />
        <HotelCard />
        <NavBar />
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
