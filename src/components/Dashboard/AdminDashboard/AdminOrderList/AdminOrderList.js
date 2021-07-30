import React from "react";
import DashboardNavbar from "../../DashboardNavbar/DashboardNavbar";

const AdminOrderList = () => {
  document.title = "All orders";

  return (
    <div>
      <DashboardNavbar />

      <div className="text-center fs-3 fw-bold">
        All Orders
        <hr className="w-25 mx-auto" />
      </div>
    </div>
  );
};

export default AdminOrderList;
