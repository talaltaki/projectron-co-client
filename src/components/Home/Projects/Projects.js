import React from "react";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdOpenInBrowser } from "react-icons/md";
import { AiOutlineFileDone, AiOutlineCalendar } from "react-icons/ai";
import "./Projects.css";

const projectData = [
  {
    icon: <HiOutlineDesktopComputer />,
    title: "Consultation",
    description: "Smart email campaigns can build brand loyalty",
  },
  {
    icon: <AiOutlineCalendar />,
    title: "Planning",
    description: "Your branding is your first impression, make an",
  },
  {
    icon: <MdOpenInBrowser />,
    title: "Execution",
    description: "Need something more than simple website?",
  },
  {
    icon: <AiOutlineFileDone />,
    title: "Result",
    description: "Chat software is new, but team has extensive",
  },
];

const Projects = () => {
  return (
    <section className="container" style={{ marginTop: "100px" }}>
      <div className="text-center">
        <div className="font-cursive main-text fs-1 fw-bold">Glance</div>
        <div className="fs-3 fw-bold">Our Proven Process</div>
        <p className="mt-2 text-secondary">
          Credibly customize reliable intellectual capital whereas
          infrastructures, <br /> leadership distinctively communicate
        </p>
      </div>

      <div className="row">
        <div className="col-md-7 col-12">
          <img
            src="https://i.ibb.co/RhqmjcN/undraw-project-team-lc5a.png"
            alt="Projects"
            className="img-fluid pt-5"
          />
        </div>
        <div className="col-md-5 col-12">
          <div className="row">
            {projectData.map((project) => (
              <div className="col-md-6 col-12">
                <div
                  className="card project-card mt-4 py-4 text-center shadow"
                  style={{
                    borderLeft: "none",
                    borderTop: "none",
                    borderRight: "none",
                  }}
                >
                  <div className="card-body">
                    <div className="fs-1 main-text">{project.icon}</div>
                    <div className="fs-6 mt-1">{project.title}</div>
                    <div className="mt-1 text-secondary">
                      <small>{project.description}</small>
                    </div>
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

export default Projects;
