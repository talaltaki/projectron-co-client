import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import DashboardNavbar from "../../DashboardNavbar/DashboardNavbar";

const AddService = () => {
  document.title = "Add new service";

  const history = useHistory();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    fetch("http://localhost:8080/add-service", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((done) => {
        if (done) {
          alert("New Service added successfully!");
        }
        history.replace("/");
      });
    event.preventDefault();
  };

  return (
    <div>
      <DashboardNavbar />

      <div className="text-center fs-3 fw-bold">
        Add New Service
        <hr className="w-25 mx-auto" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="container w-25 mt-5">
        <div className="mt-3">
          <label>
            <small className="main-text">Title</small>
          </label>
          <input
            type="text"
            className="form-control rounded-0 border-0 border-bottom border-secondary mt-1 bg-transparent"
            {...register("title", { required: true })}
          />
        </div>
        <div className="mt-3">
          <label>
            <small className="main-text">Description</small>
          </label>
          <input
            type="text"
            className="form-control rounded-0 border-0 border-bottom border-secondary mt-1 bg-transparent"
            {...register("description", { required: true })}
          />
        </div>
        <div className="mt-3">
          <label>
            <small className="main-text">Price</small>
          </label>
          <input
            type="text"
            className="form-control rounded-0 border-0 border-bottom border-secondary mt-1 bg-transparent"
            {...register("price", { required: true })}
          />
        </div>
        <div className="d-grid gap-2">
          <button
            type="submit"
            className="btn main-btn rounded-3 mt-3 text-white"
          >
            Add New Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
