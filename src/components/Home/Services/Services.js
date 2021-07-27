import React from "react";

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
    <section className="container" style={{ marginTop: "100px" }}>
      <div className="text-center">
        <div className="fs-1 fw-bold font-cursive main-text">Try Out</div>
        <div className="fs-3 fw-bold">Our Services</div>
      </div>

      <div className="row">
        {serviceData.map((service) => (
          <div className="col-md-4 col-12">
            <div className="card mx-2 mt-4 border-0 shadow">
              <div className="card-body py-5 px-4 text-center">
                <img
                  src={service.image}
                  alt=""
                  className="img-fluid"
                  style={{ width: "50px" }}
                />
                <div className="fs-6 mt-3">{service.title}</div>
                <div className="mt-2 text-secondary">
                  <small>{service.description}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
