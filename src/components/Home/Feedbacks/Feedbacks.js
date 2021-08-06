import React, { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import FeedbackCard from "./FeedbackCard/FeedbackCard";

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch("https://morning-reef-93942.herokuapp.com/feedbacks")
      .then((res) => res.json())
      .then((data) => setFeedbacks(data));
  }, []);

  return (
    <section
      id="testimonials"
      className="container"
      style={{ marginTop: "100px" }}
    >
      <div className="text-center">
        <div className="font-cursive fs-1 fw-bold main-text">Feedback</div>
        <div className="fs-3 fw-bold">Clients' Appreciation</div>
      </div>
      <div className="fs-1 main-text text-center mt-3 mb-3">
        <FaQuoteLeft />
      </div>
      <div className="row">
        {feedbacks.length === 0 && (
          <div class="text-center">
            <div
              className="spinner-grow mt-5 main-text"
              style={{ width: "5rem", height: "5rem" }}
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {feedbacks.map((feedback) => (
          <div className="col-md-3 col-12">
            <FeedbackCard key={feedback._id} feedback={feedback} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feedbacks;
