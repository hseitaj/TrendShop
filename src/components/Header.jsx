// src/components/Header.jsx
import React from 'react';

function Header() {
  return (
    <div className="container mb-5">  {/* Added margin-bottom (mb-5) */}
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
        <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          {/* Replace the SVG with your logo */}
          {/* <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg> */}
          TrendShop
        </a>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
          <li><a href="#" className="nav-link px-2 link-dark">Features</a></li>
          <li><a href="#" className="nav-link px-2 link-dark">Pricing</a></li>
          <li><a href="#" className="nav-link px-2 link-dark">FAQs</a></li>
          <li><a href="#" className="nav-link px-2 link-dark">About</a></li>
        </ul>
        <div className="col-md-3 text-end">
          <a href="/login" className="btn btn-outline-primary me-2">Login</a>
          <a href="/signup" className="btn btn-primary">Sign-up</a>
        </div>
      </header>
    </div>
  );
}

export default Header;
