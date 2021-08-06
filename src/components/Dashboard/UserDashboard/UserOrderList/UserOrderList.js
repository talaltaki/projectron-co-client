import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../App";
import DashboardNavbar from "../../DashboardNavbar/DashboardNavbar";
import UserOrderCard from "./UserOrderCard/UserOrderCard";

const UserOrderList = () => {
  document.title = "Orders you placed";

  const [loggedInUser] = useContext(UserContext);
  const [placedOrders, setPlacedOrders] = useState([]);

  useEffect(() => {
    fetch(
      "https://morning-reef-93942.herokuapp.com/orders?email=" +
        loggedInUser.email
    )
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
          {placedOrders.length === 0 && (
            <div class="text-center">
              <div
                className="spinner-grow mt-5 main-text"
                style={{ width: "5rem", height: "5rem" }}
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {placedOrders.map((placedOrder) => (
            <UserOrderCard key={placedOrder._id} placedOrder={placedOrder} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserOrderList;
