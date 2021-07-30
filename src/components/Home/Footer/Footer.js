import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdArrowUpward } from "react-icons/md";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="container footer-margin-top mb-3">
      <div className="text-center">
        <div className="font-logo fs-1">
          projectron<span className="main-text">.co</span>
        </div>

        <div className="mt-3">
          <FaFacebook className="ms-4 fs-4 social-link" />
          <FaTwitter className="mx-4 fs-4 social-link" />
          <FaLinkedin className="fs-4 social-link" />
          <FaInstagram className="mx-4 fs-4 social-link" />
        </div>

        <div className="mt-5 text-secondary">
          <small>Made with 💙 by Talal Taki</small>
        </div>
        <a href="#top">
          <div className="d-grid gap-2">
            <button className="btn main-btn text-white mt-5">
              Go to Top <MdArrowUpward className="mb-1" />
            </button>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Footer;
