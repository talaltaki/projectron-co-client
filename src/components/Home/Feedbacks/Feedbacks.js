import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const feedbackData = [
  {
    image: "https://i.ibb.co/zmPhGTj/customer1.png",
    name: "John Gateway",
    designation: "CEO, Netricks",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ut.",
  },
  {
    image: "https://i.ibb.co/pQbsSqc/customer2.png",
    name: "Emma Hustling",
    designation: "CFO, Gholrim",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ut.",
  },
  //   {
  //     image: "https://i.ibb.co/PwWNXqx/customer3.png",
  //     name: "Douglas Monty",
  //     designation: "CEO, Barbara",
  //     review:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ut.",
  //   },
  //   {
  //     image: "https://i.ibb.co/zmPhGTj/customer1.png",
  //     name: "Carl Marx",
  //     designation: "UI/UX Designer, Fiberr",
  //     review:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ut.",
  //   },
];

const Feedbacks = () => {
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
            className="img-fluid mt-5"
          />
        </div>
        <div className="col-md-6 col-12">
          <div className="fs-1 main-text text-center mt-3 mb-2">
            <FaQuoteLeft />
          </div>
          <div className="row">
            {feedbackData.map((feedback) => (
              <div className="col-md-6 col-12">
                <div className="card my-3 text-center border-0 shadow">
                  <div className="card-body">
                    <img
                      src={feedback.image}
                      alt=""
                      className="img-fluid w-25 mb-2"
                    />
                    <br />
                    <small className="fw-bold">{feedback.name}</small>
                    <br />
                    <small>{feedback.designation}</small>
                    <br />
                    <small className="text-secondary">{feedback.review}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;
