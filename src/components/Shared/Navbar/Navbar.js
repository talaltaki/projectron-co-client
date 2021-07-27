import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent font-poppins">
      <div className="container">
        <a className="navbar-brand fw-bold fs-3" href="/">
          projectron.<span className="main-text">co</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-dark" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark mx-3" href="/services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/testimonials">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark mx-3" href="/about">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/contact">
                Contact
              </a>
            </li>
          </ul>
          <span className="navbar-text">
            <button className="btn main-btn btn-sm text-white px-4">
              Login
            </button>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
