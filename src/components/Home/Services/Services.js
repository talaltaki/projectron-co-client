import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://morning-reef-93942.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section id="services" className="container" style={{ marginTop: "100px" }}>
      <div className="text-center">
        <div className="fs-1 fw-bold font-cursive main-text">Try Out</div>
        <div className="fs-3 fw-bold">Our Services</div>
      </div>

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
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
