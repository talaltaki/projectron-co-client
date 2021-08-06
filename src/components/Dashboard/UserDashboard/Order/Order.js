import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../../../App";
import DashboardNavbar from "../../DashboardNavbar/DashboardNavbar";

const Order = () => {
  document.title = "Place your order";

  const [loggedInUser] = useContext(UserContext);
  const history = useHistory();
  const [setServices] = useState([]);
  const [service, setService] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch("https://morning-reef-93942.herokuapp.com/services")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
        const myService = data.find((e) => e._id === id);
        setService(myService);
      });
  }, []);

  const handleSubmit = (event) => {
    const newOrder = {
      ...loggedInUser,
      title: service.title,
      image: service.image,
      description: service.description,
      status: "Pending",
    };

    fetch("https://morning-reef-93942.herokuapp.com/place-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((done) => {
        if (done) {
          alert("Your Order has been placed successfully!");
        }
        history.replace("/order-list-user");
      });
    event.preventDefault();
  };

  return (
    <div>
      <DashboardNavbar />

      <div className="font-cursive text-center fs-1 fw-bold">
        <hr className="w-25 mx-auto" />
        Place Your Order
        <hr className="w-25 mx-auto" />
      </div>

      <form className="container w-25 mt-5">
        <div className="mt-3">
          <label>
            <small className="main-text">Your Name / Your Company Name</small>
          </label>
          <input
            type="text"
            className="form-control rounded-0 border-0 border-bottom border-secondary mt-1 bg-transparent"
            value={loggedInUser.name}
            disabled
          />
        </div>
        <div className="mt-3">
          <label>
            <small className="main-text">Email Address</small>
          </label>
          <input
            type="email"
            className="form-control rounded-0 border-0 border-bottom border-secondary mt-1 bg-transparent"
            value={loggedInUser.email}
            disabled
          />
        </div>
        <div className="mt-3">
          <label>
            <small className="main-text">Chosen Service</small>
          </label>
          <input
            type="text"
            className="form-control rounded-0 border-0 border-bottom border-secondary mt-1 bg-transparent"
            value={service.title}
            disabled
          />
        </div>
        <div className="main-text mt-3 fs-5 fw-bold text-center">
          Your Service Charge will be ৳{service.price}
        </div>
        <div className="d-grid gap-2">
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn main-btn rounded-3 mt-3 text-white"
          >
            Pay Your Service Charge
          </button>
        </div>
      </form>
    </div>
  );
};

export default Order;
