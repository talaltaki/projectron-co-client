import React from "react";
import DashboardNavbar from "../../DashboardNavbar/DashboardNavbar";

const Order = () => {
  document.title = "Place your order";

  return (
    <div>
      <DashboardNavbar />

      <div className="font-cursive text-center fs-1 fw-bold">
        <hr className="w-25 mx-auto" />
        Place Your Order
        <hr className="w-25 mx-auto" />
      </div>
    </div>
  );
};

export default Order;
