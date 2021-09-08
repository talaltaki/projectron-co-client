import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdArrowUpward } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="container footer-margin-top mb-3">
      <div className="text-center">
        <div className="font-logo fs-1">
          projectron<span className="main-text">.co</span>
        </div>

        <div className="mt-3">
          <a href="https://www.facebook.com" className="text-dark">
            <FaFacebook className="ms-4 fs-4 social-link" />
          </a>
          <a href="https://www.twitter.com" className="text-dark">
            <FaTwitter className="mx-4 fs-4 social-link" />
          </a>
          <a href="https://linkedin.com/" className="text-dark">
            <FaLinkedin className="fs-4 social-link" />
          </a>
          <a href="https://instagram.com/" className="text-dark">
            <FaInstagram className="mx-4 fs-4 social-link" />
          </a>
        </div>

        <a href="#top" className="text-decoration-none">
          <div className="">
            <button className="btn main-btn text-white rounded-circle mt-5">
              <MdArrowUpward className="mb-1" />
            </button>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Footer;
