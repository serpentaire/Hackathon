import Home from "@pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "@components/Footer";
import Reservation from "@pages/Reservation/Reservation";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <div className="App">
        <Reservation />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
