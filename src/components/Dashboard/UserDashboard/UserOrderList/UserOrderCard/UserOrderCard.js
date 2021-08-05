import React from "react";

const UserOrderCard = ({ placedOrder }) => {
  return (
    <div className="col-md-4 col-12">
      <div className="card mx-2 mt-4 border-0 shadow">
        <div className="card-body px-4 text-center">
          <img
            src={placedOrder.image}
            alt=""
            className="img-fluid"
            style={{ width: "70px" }}
          />
          <div className="fs-6 fw-bold mt-3">{placedOrder.title}</div>
          <div className="mt-2">
            <small>{placedOrder.description}</small>
          </div>
        </div>
        <div className="d-grid gap-2" style={{ pointerEvents: "none" }}>
          {placedOrder.status === "Pending" && (
            <button class="btn btn-danger btn-sm fw-bold fs-6 rounded-0 rounded-bottom">
              {placedOrder.status}
            </button>
          )}
          {placedOrder.status === "On Going" && (
            <button class="btn btn-warning btn-sm fw-bold fs-6 rounded-0 rounded-bottom">
              {placedOrder.status}
            </button>
          )}
          {placedOrder.status === "Done" && (
            <button class="btn btn-success btn-sm fw-bold fs-6 rounded-0 rounded-bottom">
              {placedOrder.status}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserOrderCard;
