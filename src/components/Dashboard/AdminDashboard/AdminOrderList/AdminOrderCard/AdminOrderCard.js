import React from "react";

const AdminOrderCard = ({ order }) => {
  const changeStatus = (e) => {
    fetch("http://localhost:8080/update-status", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: e.target.value,
        id: order._id,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          alert("Status updated successfully");
        }
      });
  };

  return (
    <div className="col-md-4 col-12">
      <div className="card mx-2 mt-4 border-primary rounded-0 shadow">
        <div className="card-body px-4 text-center">
          <div className="fs-6 fw-bold">
            <label>
              <small className="main-text">Service</small>
            </label>
            <input
              type="text"
              className="form-control border-0 bg-transparent text-center"
              value={order.title}
              disabled
            />
          </div>
          <hr />
          <div className="fs-6 fw-bold">
            <label>
              <small className="main-text">Customer</small>
            </label>
            <input
              type="text"
              className="form-control border-0 bg-transparent text-center"
              value={order.name}
              disabled
            />
          </div>
          <hr />
          <div className="fs-6 fw-bold">
            <label>
              <small className="main-text">Email</small>
            </label>
            <input
              type="text"
              className="form-control border-0 bg-transparent text-center"
              value={order.email}
              disabled
            />
          </div>
          <hr />
          <div className="fs-6 fw-bold">
            <label>
              <small className="main-text">Status</small>
            </label>
            <br />
            {order.status === "Pending" && (
              <select
                className="border-secondary mt-2 px-3 py-1"
                onChange={changeStatus}
              >
                <option selected className="text-danger">
                  Pending
                </option>
                <option className="text-warning">On Going</option>
                <option className="text-success">Done</option>
              </select>
            )}
            {order.status === "On Going" && (
              <select
                className="border-secondary mt-2 px-3 py-1"
                onChange={changeStatus}
              >
                <option className="text-danger">Pending</option>
                <option selected className="text-warning">
                  On Going
                </option>
                <option className="text-success">Done</option>
              </select>
            )}
            {order.status === "Done" && (
              <select
                className="border-secondary mt-2 px-3 py-1"
                onChange={changeStatus}
              >
                <option className="text-danger">Pending</option>
                <option className="text-warning">On Going</option>
                <option selected className="text-success">
                  Done
                </option>
              </select>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderCard;
