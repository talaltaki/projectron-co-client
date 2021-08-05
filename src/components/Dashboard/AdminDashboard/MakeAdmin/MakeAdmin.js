import React from "react";
import { useForm } from "react-hook-form";
import DashboardNavbar from "../../DashboardNavbar/DashboardNavbar";

const MakeAdmin = () => {
  document.title = "Make new admin";

  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    fetch("http://localhost:8080/add-admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((done) => {
        if (done) {
          alert("New Service added successfully!");
        }
      });
    event.preventDefault();
  };

  return (
    <div>
      <DashboardNavbar />

      <div className="text-center fs-3 fw-bold">
        Make New Admin
        <hr className="w-25 mx-auto" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="container w-25 mt-5">
        <div className="mt-3">
          <label>
            <small className="main-text">Email</small>
          </label>
          <input
            type="email"
            className="form-control rounded-0 border-secondary mt-1 bg-transparent"
            {...register("email", { required: true })}
          />
        </div>
        <div className="d-grid gap-2">
          <button
            type="submit"
            className="btn main-btn rounded-0 mt-3 text-white"
          >
            Add New Admin
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakeAdmin;
