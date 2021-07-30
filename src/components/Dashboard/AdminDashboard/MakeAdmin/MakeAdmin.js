import React from "react";
import DashboardNavbar from "../../DashboardNavbar/DashboardNavbar";

const MakeAdmin = () => {
  document.title = "Make new admin";

  return (
    <div>
      <DashboardNavbar />

      <div className="text-center fs-3 fw-bold">
        Make New Admin
        <hr className="w-25 mx-auto" />
      </div>
    </div>
  );
};

export default MakeAdmin;
