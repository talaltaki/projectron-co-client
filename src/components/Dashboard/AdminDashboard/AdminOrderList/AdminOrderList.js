import React, { useEffect, useState } from "react";
import DashboardNavbar from "../../DashboardNavbar/DashboardNavbar";
import AdminOrderCard from "./AdminOrderCard/AdminOrderCard";

const AdminOrderList = () => {
  document.title = "All orders";

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://morning-reef-93942.herokuapp.com/all-orders")
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className="mb-5">
      <DashboardNavbar />

      <div className="text-center fs-3 fw-bold">
        All Orders
        <hr className="w-25 mx-auto" />
      </div>

      <div className="container">
        <div className="row">
          {orders.length === 0 && (
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
          {orders.map((order) => (
            <AdminOrderCard key={order._id} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminOrderList;
