import React from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

const Login = () => {
  document.title = "Login to continue";

  return (
    <div className="container">
      <div className="text-center" style={{ marginTop: "80px" }}>
        <Link to="/" className="text-decoration-none">
          <div className="font-logo fs-1 text-dark">
            projectron<span className="main-text">.co</span>
          </div>
        </Link>
        <div
          className="fs-3 fw-bold text-secondary"
          style={{ marginTop: "120px" }}
        >
          To Continue
        </div>
        <GoogleLogin />
      </div>
    </div>
  );
};

export default Login;
