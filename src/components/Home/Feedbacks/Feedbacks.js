import React, { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import FeedbackCard from "./FeedbackCard/FeedbackCard";

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/feedbacks")
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
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://i.ibb.co/6w8kyns/undraw-reviews-lp8w.png"
            alt=""
            className="img-fluid"
            style={{ marginTop: "200px" }}
          />
        </div>
        <div className="col-md-6 col-12">
          <div className="fs-1 main-text text-center mt-3 mb-2">
            <FaQuoteLeft />
          </div>
          <div className="row">
            {feedbacks.map((feedback) => (
              <div className="col-md-6 col-12">
                <FeedbackCard key={feedback._id} feedback={feedback} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;
