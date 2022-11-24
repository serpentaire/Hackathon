import Home from "@pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "@components/Navbar/Navbar";
import Footer from "@components/Footer";

import Footer from "@components/Footer/Footer";


import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
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
