import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/services")
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
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
