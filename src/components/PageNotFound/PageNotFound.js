import React from "react";
import pageNotFound from "./page-not-found.svg";

const PageNotFound = () => {
  return (
    <div className="container text-center mt-5">
      <img className="img-fluid" src={pageNotFound} alt="Page Not Found" />
    </div>
  );
};

export default PageNotFound;
