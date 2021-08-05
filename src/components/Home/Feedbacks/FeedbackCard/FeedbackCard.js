import React from "react";

const FeedbackCard = ({ feedback }) => {
  return (
    <div
      className="card my-3 text-center border-0 shadow"
      style={{ height: "18.5rem" }}
    >
      <div className="card-body">
        <img
          src={feedback.image}
          alt=""
          className="img-fluid w-25 mb-2 rounded-circle"
        />
        <br />
        <small className="fw-bold">{feedback.name}</small>
        <br />
        <small>{feedback.designation}</small>
        <br />
        <br />
        <small className="text-secondary">{feedback.review}</small>
      </div>
    </div>
  );
};

export default FeedbackCard;
