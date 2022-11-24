import Home from "@pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "@components/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Footer />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
