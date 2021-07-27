import React from "react";
import { FiSend } from "react-icons/fi";

const Subscribe = () => {
  return (
    <section className="container" style={{ marginTop: "100px" }}>
      <div className="text-center">
        <div className="font-cursive main-text fs-1 fw-bold">Subscribe</div>
        <div className="fs-3 fw-bold">
          Always Stay With Us To Get <br /> All The Updates
        </div>
        <p className="mt-2 text-secondary">
          Join our mailing list to never miss another update
        </p>
      </div>

      <div className="card w-50 rounded-pill mx-auto border-0 shadow-lg mt-5">
        <div className="card-body">
          <div className="d-flex">
            <input
              type="text"
              placeholder="Your email here"
              className="form-control border-0 rounded-pill"
            />
            <button className="btn main-btn btn-lg px-5 rounded-pill">
              <FiSend className="fs-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
