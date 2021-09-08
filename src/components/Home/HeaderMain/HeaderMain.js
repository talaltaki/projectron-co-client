import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import headerMain from "./headerMain.svg";

const HeaderMain = () => {
  const [loggedInUser] = useContext(UserContext);

  return (
    <section className="container" style={{ marginTop: "120px" }}>
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
        <div className="col-md-6 col-12 mt-3">
          <div className="font-cursive fs-1 fw-bold main-text">Welcome</div>
          <div className="fs-2 fw-bold">
            Creative solutions to improve your{" "}
            <span className="text-primary text-uppercase fst-italic">
              business!
            </span>
          </div>
          <p className="text-secondary mt-3">
            Together with you, we develop ideas, strategies, concepts, <br />{" "}
            and measures for the corporate and personnel
          </p>
          <Link to="/login">
            <button className="btn main-btn mt-3 px-4 text-white rounded-1">
              Get Started
            </button>
          </Link>
        </div>
        <div className="col-md-6 col-12">
          <img src={headerMain} alt="Work Together" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default HeaderMain;
