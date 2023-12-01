import React from "react";
import { Link } from "react-router-dom"; // Import Link

function Header() {
  return (
    <div className="container mb-5">
      <header className="d-flex flex-wrap align-items-center justify-content-between py-3 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <img
            src="/TrendShopLogo.png"
            alt="TrendShop Logo"
            style={{ height: "80px", marginRight: "10px" }}
          />
          <span className="fs-2 fw-bold text-primary">TrendShop</span>
        </Link>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-start mb-md-0">
          <li>
            <Link to="/" className="nav-link px-2 link-dark">
              Home
            </Link>
          </li>
          <li>
            <Link to="/trending" className="nav-link px-2 link-dark">
              Trending
            </Link>
          </li>
          <li>
            <Link to="/categories" className="nav-link px-2 link-dark">
              Categories
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link px-2 link-dark">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link px-2 link-dark">
              Contact
            </Link>
          </li>
        </ul>
        <div className="col-md-3 text-end">
          <Link to="/login" className="btn btn-outline-primary me-2">
            Login
          </Link>
          <Link to="/signup" className="btn btn-primary">
            Sign-up
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
