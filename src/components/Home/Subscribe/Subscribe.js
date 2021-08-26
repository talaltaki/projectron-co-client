import React from "react";
import { FiSend } from "react-icons/fi";

const Subscribe = () => {
  return (
    <section id="contact" className="container" style={{ marginTop: "100px" }}>
      <div className="text-center">
        <div className="font-cursive main-text fs-1 fw-bold">Contact</div>
        <div className="fs-3 fw-bold">
          Contact with us and <br /> Let us work with You!
        </div>
        {/* <p className="mt-2 text-secondary">
          Join our mailing list to never miss another update
        </p> */}
      </div>

      <div className="card w-50 rounded-0 mx-auto border-0 shadow-lg mt-5">
        <div className="card-body">
          <div>
            <input
              type="text"
              placeholder="Your message here"
              className="form-control border-0 rounded-0 text-center"
            />
          </div>
        </div>
        <button className="btn main-btn btn-lg px-5 rounded-0 text-white">
          <FiSend className="fs-3" />
        </button>
      </div>
    </section>
  );
};

export default Subscribe;
