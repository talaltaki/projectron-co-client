import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../../App";
import DashboardNavbar from "../../DashboardNavbar/DashboardNavbar";

const Feedback = () => {
  document.title = "Leave your valuable feedback";

  const [loggedInUser] = useContext(UserContext);
  const history = useHistory();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    fetch("https://morning-reef-93942.herokuapp.com/add-feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((done) => {
        if (done) {
          alert("Thanks for your valuable review!");
        }
        history.replace("/");
      });
    event.preventDefault();
  };

  return (
    <div>
      <DashboardNavbar />

      <div className="font-cursive text-center fs-1 fw-bold">
        <hr className="w-25 mx-auto" />
        Leave Your Valuable Feedback
        <hr className="w-25 mx-auto" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="container w-auto">
        <div className="mt-3">
          <label>
            <small className="main-text">Your Name / Your Company Name</small>
          </label>
          <input
            type="text"
            className="form-control rounded-0 border-0 border-bottom border-secondary mt-1 bg-transparent"
            defaultValue={loggedInUser.name}
            {...register("name")}
          />
        </div>
        <div className="mt-3">
          <label>
            <small className="main-text">Email Address</small>
          </label>
          <input
            type="email"
            className="form-control rounded-0 border-0 border-bottom border-secondary mt-1 bg-transparent"
            defaultValue={loggedInUser.email}
            {...register("email")}
          />
        </div>
        <input
          type="text"
          className="d-none form-control rounded-0 border-0 border-bottom border-secondary mt-1 bg-transparent"
          defaultValue={loggedInUser.photo}
          {...register("image")}
        />
        <div className="mt-3">
          <label>
            <small className="main-text">Your Designation</small>
          </label>
          <input
            type="text"
            className="form-control rounded-0 border-0 border-bottom border-secondary mt-1 bg-transparent"
            {...register("designation", { required: true })}
          />
        </div>
        <div className="mt-3">
          <label>
            <small className="main-text">Your Feedback</small>
          </label>
          <textarea
            className="form-control rounded-0 border-0 border-bottom border-secondary mt-1 bg-transparent"
            name="review"
            rows="3"
            {...register("review", { required: true })}
          ></textarea>
        </div>
        <div className="d-grid gap-2">
          <button
            type="submit"
            className="btn main-btn rounded-3 mt-3 text-white"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
