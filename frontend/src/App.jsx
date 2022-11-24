import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";
import SelectHotel from "@components/SelectHotel/SelectHotel";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <div className="App">
        <SelectHotel />
        <NavBar />
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
