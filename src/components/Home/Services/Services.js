import React from "react";
import ServiceCard from "./ServiceCard/ServiceCard";

const serviceData = [
  {
    image: "https://i.ibb.co/9NHLG3D/marketing.png",
    title: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, voluptate Lorem ipsum dolor sit amet consectetur",
  },
  {
    image: "https://i.ibb.co/BZzrFt3/branding.png",
    title: "Logo & Branding",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, voluptate Lorem ipsum dolor sit amet consectetur",
  },
  {
    image: "https://i.ibb.co/5FNbhX4/solution.png",
    title: "Custom Web Solution",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, voluptate Lorem ipsum dolor sit amet consectetur",
  },
];

const Services = () => {
  return (
    <section id="services" className="container" style={{ marginTop: "100px" }}>
      <div className="text-center">
        <div className="fs-1 fw-bold font-cursive main-text">Try Out</div>
        <div className="fs-3 fw-bold">Our Services</div>
      </div>

      <div className="row">
        {serviceData.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
