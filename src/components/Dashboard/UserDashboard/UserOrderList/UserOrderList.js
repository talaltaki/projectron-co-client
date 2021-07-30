import React from "react";
import DashboardNavbar from "../../DashboardNavbar/DashboardNavbar";

const UserOrderList = () => {
  document.title = "Orders you placed";

  return (
    <div>
      <DashboardNavbar />

      <div className="font-cursive fs-1 fw-bold text-center">
        <hr className="w-25 mx-auto" />
        Orders You Placed
        <hr className="w-25 mx-auto" />
      </div>
    </div>
  );
};

export default UserOrderList;
