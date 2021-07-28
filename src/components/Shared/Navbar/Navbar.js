import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const Navbar = () => {
  const [loggedInUser] = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white font-poppins sticky-top">
      <div className="container">
        <a className="navbar-brand font-logo fs-3" href="/">
          projectron<span className="main-text">.co</span>
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
              <a className="nav-link text-dark me-3" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark me-3" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark me-3" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark me-3" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <span className="navbar-text">
            {loggedInUser.name ? (
              <button className="btn fw-bold border-0 shadow">
                Hi, <span className="main-text">{loggedInUser.name}</span>
              </button>
            ) : (
              <Link to="/login">
                <button className="btn main-btn btn-sm text-white px-4">
                  Login
                </button>
              </Link>
            )}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
