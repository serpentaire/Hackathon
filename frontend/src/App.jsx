import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";
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
      <Map />
      <Footer />
    </Router>
  );
}

export default App;
