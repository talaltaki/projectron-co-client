import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const Navbar = () => {
  const [loggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((response) => response.json())
      .then((data) => setIsAdmin(data));
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white font-poppins sticky-top">
      <div className="container">
        <Link className="navbar-brand font-logo fs-3" to="/">
          projectron<span className="main-text">.co</span>
        </Link>
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
          <div className="navbar-nav mx-auto mb-2 mb-lg-0">
            <Link className="nav-link text-dark me-3 mt-2" to="/">
              Home
            </Link>
            <a className="nav-link text-dark me-3 mt-2" href="#projects">
              Projects
            </a>
            <a className="nav-link text-dark me-3 mt-2" href="#services">
              Services
            </a>
            <a className="nav-link text-dark me-3 mt-2" href="#testimonials">
              Testimonials
            </a>
            <a className="nav-link text-dark mt-2" href="#contact">
              Contact
            </a>
          </div>
          <span className="navbar-text">
            {loggedInUser.name ? (
              <div>
                <div
                  className="fw-bold border-0"
                  style={{ pointerEvents: "none" }}
                >
                  Hi, <span className="main-text">{loggedInUser.name}</span>
                </div>
                {!isAdmin ? (
                  <div>
                    <Link to="/order-list" className="text-decoration-none">
                      <div className="main-text text-center border border-primary">
                        Orders
                      </div>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Link to="/order-list" className="text-decoration-none">
                      <div className="main-text text-center border border-primary">
                        Dashboard
                      </div>
                    </Link>
                  </div>
                )}
              </div>
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
