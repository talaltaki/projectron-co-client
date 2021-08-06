import React, { useEffect, useState } from "react";
import DashboardNavbar from "../../DashboardNavbar/DashboardNavbar";
import ManageFeedbackCard from "./ManageFeedbackCard/ManageFeedbackCard";
import ManageServiceCard from "./ManageServiceCard/ManageServiceCard";

const ManageServices = () => {
  document.title = "Manage services";

  const [services, setServices] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch("https://morning-reef-93942.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  useEffect(() => {
    fetch("https://morning-reef-93942.herokuapp.com/feedbacks")
      .then((res) => res.json())
      .then((data) => setFeedbacks(data));
  }, []);

  return (
    <div className="mb-5">
      <DashboardNavbar />

      <div className="text-center fs-3 fw-bold">
        Manage Services
        <hr className="w-25 mx-auto" />
      </div>

      <div className="container">
        <div className="row">
          {services.length === 0 && (
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
          {services.map((service) => (
            <ManageServiceCard key={service._id} service={service} />
          ))}
        </div>
      </div>

      <div className="text-center fs-3 fw-bold mt-5">
        Manage Feedbacks
        <hr className="w-25 mx-auto" />
      </div>

      <div className="container">
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
            <ManageFeedbackCard key={feedback._id} feedback={feedback} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageServices;
