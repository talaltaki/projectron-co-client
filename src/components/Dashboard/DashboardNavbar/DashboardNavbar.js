import React, { useContext } from "react";
import { UserContext } from "../../../App";
import {
  AiOutlineShoppingCart,
  AiOutlineUnorderedList,
  AiOutlineMessage,
  AiOutlinePlus,
  AiOutlineUserAdd,
  AiOutlineAppstore,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const DashboardNavbar = () => {
  const [loggedInUser] = useContext(UserContext);

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
          <div className="navbar-nav mx-auto mb-2 mb-lg-0 pt-2">
            {/* <Link className="nav-link text-dark me-5 mt-1" to="/order">
              <button className="btn btn-outline-primary border-0">
                <AiOutlineShoppingCart className="mb-1 me-1" /> Order
              </button>
            </Link>
            <Link
              className="nav-link text-dark me-5 mt-1"
              to="/order-list-user"
            >
              <button className="btn btn-outline-primary border-0">
                <AiOutlineUnorderedList className="mb-1 me-1" /> Order List
              </button>
            </Link>
            <Link className="nav-link text-dark me-5 mt-1" to="/feedback">
              <button className="btn btn-outline-primary border-0">
                <AiOutlineMessage className="mb-1 me-1" /> Feedback
              </button>
            </Link> */}

            <Link
              className="nav-link text-dark me-5 mt-1"
              to="/order-list-admin"
            >
              <button className="btn btn-outline-primary border-0">
                <AiOutlineUnorderedList className="mb-1 me-1" /> Order List
              </button>
            </Link>
            <Link className="nav-link text-dark me-5 mt-2" to="/add-service">
              <button className="btn btn-outline-primary border-0">
                <AiOutlinePlus className="mb-1 me-1" /> Add Service
              </button>
            </Link>
            <Link className="nav-link text-dark me-5 mt-2" to="/make-admin">
              <button className="btn btn-outline-primary border-0">
                <AiOutlineUserAdd className="mb-1 me-1" /> Make Admin
              </button>
            </Link>
            <Link
              className="nav-link text-dark me-5 mt-2"
              to="/manage-services"
            >
              <button className="btn btn-outline-primary border-0">
                <AiOutlineAppstore className="mb-1 me-1" />
                Manage Services
              </button>
            </Link>
          </div>

          <span className="navbar-text">
            {loggedInUser.name && (
              <button
                className="btn fw-bold border-0 shadow"
                style={{ pointerEvents: "none" }}
              >
                Hi, <span className="main-text">{loggedInUser.name}</span>
              </button>
            )}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
