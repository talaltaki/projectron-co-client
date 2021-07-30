import React from "react";
import DashboardNavbar from "../../DashboardNavbar/DashboardNavbar";

const Feedback = () => {
  document.title = "Leave your valuable feedback";

  return (
    <div>
      <DashboardNavbar />

      <div className="font-cursive text-center fs-1 fw-bold">
        <hr className="w-25 mx-auto" />
        Leave Your Valuable Feedback
        <hr className="w-25 mx-auto" />
      </div>
    </div>
  );
};

export default Feedback;
