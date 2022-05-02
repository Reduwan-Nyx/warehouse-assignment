import React from "react";
import './Customer.css'
const Customer = ({ customer }) => {
  const { img, description } = customer;
  return (
    <div className="card-group col-sm-12 col-md-6 col-lg-4 customer-container">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customer;
