import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  return (
    <div className="col-md-4 col-12">
      <Link to="/dashboard" className="text-decoration-none text-dark">
        <div className="card service-card mx-2 mt-4 border-0 shadow">
          <div className="card-body py-5 px-4 text-center">
            <img
              src={service.image}
              alt=""
              className="img-fluid"
              style={{ width: "50px" }}
            />
            <div className="fs-6 mt-3">{service.title}</div>
            <div className="mt-2">
              <small>{service.description}</small>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
