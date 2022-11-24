import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation/Reservation";
import Map from "./components/Map";
import NavBar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Map />
        <NavBar />
        <Home />
        <Footer />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
