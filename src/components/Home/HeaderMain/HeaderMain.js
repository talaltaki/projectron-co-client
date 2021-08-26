import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const HeaderMain = () => {
  const [loggedInUser] = useContext(UserContext);

  return (
    <section className="container" style={{ marginTop: "20px" }}>
      {loggedInUser.name && (
        <div
          class="alert alert-primary alert-dismissible fade show"
          role="alert"
        >
          <p>
            Hello, <strong>{loggedInUser.name}</strong>!
          </p>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      <div className="row">
        <div className="col-md-5 col-12">
          <div className="font-cursive fs-1 fw-bold main-text">Welcome</div>
          <div className="fs-2 fw-bold">
            Creative solutions to improve your business!
          </div>
          <p className="text-secondary mt-3">
            Together with you we develop ideas, strategies, concepts, <br /> and
            measures for the corporate and personnel
          </p>
          <Link to="/login">
            <button className="btn main-btn mt-3 px-4 text-white rounded-1">
              Get Started
            </button>
          </Link>
        </div>
        <div className="col-md-7 col-12">
          <img
            src="https://i.ibb.co/YWjj36S/undraw-work-together-h63l.png"
            alt="Work Together"
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  );
};

export default HeaderMain;
