import { Link } from "react-router-dom";
import Logo from "@assets/pictures/logocdm.png";

import "./Navbar.css";

function NavBar() {
  return (
    <nav
      className="navbar d-flex p-0 justify-content-center sticky-top"
      id="navbar"
    >
      <div className="me-auto d-flex">
        <Link
          to="/"
          className="navbar-toggler navbar-brand text-decoration-none"
        >
          <img
            src={Logo}
            alt="Logo"
            width="70"
            height="50"
            className="d-md-inline"
          />
        </Link>
        <Link
          to="/"
          className="d-flex align-items-center fw-bolder fs-5 text-decoration-none text-white d-inline"
        >
          <div>HandiQat</div>
        </Link>
      </div>

      <Link
        to="/BesoinAide"
        className="text-white d-md-block navbar-toggler text-decoration-none"
      >
        <button
          type="button"
          className="navbar-button m-2 navbar-toggler d-flex align-items-center ps-4"
        >
          Besoin d'aide ? 📞
        </button>
      </Link>
    </nav>
  );
}

export default NavBar;
