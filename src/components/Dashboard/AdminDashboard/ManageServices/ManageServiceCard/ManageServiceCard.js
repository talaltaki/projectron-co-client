import React from "react";
import { useHistory } from "react-router-dom";

const ManageServiceCard = ({ service }) => {
  const history = useHistory();

  const handleDelete = (id) => {
    fetch(`https://morning-reef-93942.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((done) => {
        if (done) {
          alert("Service has been Deleted successfully!");
        }
        history.replace("/");
      });
  };

  return (
    <div className="col-md-4 col-12">
      <div className="card mx-2 mt-4 border-0 shadow">
        <div className="card-body px-4 text-center">
          <img
            src={service.image}
            alt=""
            className="img-fluid"
            style={{ width: "70px" }}
          />
          <div className="fs-6 fw-bold mt-3">{service.title}</div>
          <div className="mt-2">
            <small>{service.description}</small>
          </div>
        </div>
        <div className="d-grid gap-2">
          <button
            onClick={() => handleDelete(service._id)}
            class="btn btn-danger btn-sm fw-bold fs-6 rounded-0 rounded-bottom"
          >
            Delete Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageServiceCard;
