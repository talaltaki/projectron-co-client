import React from "react";
import DashboardNavbar from "../../DashboardNavbar/DashboardNavbar";

const AddService = () => {
  document.title = "Add new service";

  return (
    <div>
      <DashboardNavbar />

      <div className="text-center fs-3 fw-bold">
        Add New Service
        <hr className="w-25 mx-auto" />
      </div>
    </div>
  );
};

export default AddService;
