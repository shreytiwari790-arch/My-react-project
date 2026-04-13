import { Link } from "react-router-dom";
import "../../styles/HeaderStyle.css";
import logo from "../../Food_Assets/assets/logo/logo.png"
const Header = () => {
  return (
  <header>
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">

        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" className="logo-img" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="d-flex flex-row justify-content-end align-items-center w-100" id="navbarNav">
          <ul className="navbar-nav ms-auto flex-row gap-4 align-items-center">

            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/menu">Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Contact us</Link>
            </li>
           

            <li className="nav-item position-relative ms-3">
              <Link className="nav-link" to="/wishlist">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>

                <span className="badge-dot"></span>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </header>
  );
};

export default Header;
