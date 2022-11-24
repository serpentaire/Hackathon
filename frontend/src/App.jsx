import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Reservation from "./pages/Reservation/Reservation";
import Map from "./components/Map";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Reservation />
        <Map />
        <Footer />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
