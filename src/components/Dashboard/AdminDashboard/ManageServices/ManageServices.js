import React from "react";
import DashboardNavbar from "../../DashboardNavbar/DashboardNavbar";

const ManageServices = () => {
  document.title = "Manage services";

  return (
    <div>
      <DashboardNavbar />

      <div className="text-center fs-3 fw-bold">
        Manage Services
        <hr className="w-25 mx-auto" />
      </div>
    </div>
  );
};

export default ManageServices;
