import React from "react";

const HeaderMain = () => {
  return (
    <section className="container mt-5">
      <div className="d-flex">
        <div className="col-md-6">
          <div className="font-cursive fs-1 fw-bold main-text">Welcome</div>
          <div className="fs-1 fw-bold">
            Creative solutions to improve your business!
          </div>
          <p className="text-secondary mt-3">
            Together with you we develop ideas, strategies, concepts, <br /> and
            measures for the corporate and personnel
          </p>
          <button className="btn main-btn mt-3 px-4 text-white">
            Get Started
          </button>
        </div>
        <div className="col-md-6">
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
