import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../App";
import DashboardNavbar from "../../DashboardNavbar/DashboardNavbar";
import UserOrderCard from "./UserOrderCard/UserOrderCard";

const UserOrderList = () => {
  document.title = "Orders you placed";

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [placedOrders, setPlacedOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/orders?email=" + loggedInUser.email)
      .then((response) => response.json())
      .then((result) => setPlacedOrders(result));
  }, []);

  return (
    <div>
      <DashboardNavbar />

      <div className="font-cursive fs-1 fw-bold text-center">
        <hr className="w-25 mx-auto" />
        Orders You Placed
        <hr className="w-25 mx-auto" />
      </div>

      <div className="container">
        <div className="row">
          {placedOrders.map((placedOrder) => (
            <UserOrderCard key={placedOrder._id} placedOrder={placedOrder} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserOrderList;
