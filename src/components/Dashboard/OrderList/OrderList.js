import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import AdminOrderList from "../AdminDashboard/AdminOrderList/AdminOrderList";
import UserOrderList from "../UserDashboard/UserOrderList/UserOrderList";

const OrderList = () => {
  const [loggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://morning-reef-93942.herokuapp.com/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((response) => response.json())
      .then((data) => setIsAdmin(data));
  }, []);

  return <div>{isAdmin ? <AdminOrderList /> : <UserOrderList />}</div>;
};

export default OrderList;
