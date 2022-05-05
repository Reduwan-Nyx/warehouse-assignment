import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventories.css'
const Inventories = ({ inventories }) => {
  const {_id, name, img, description, price, quantity, suppliername } = inventories;

  const navigate = useNavigate()

  const naviagteToServiceDetail = id =>{
    navigate(`/inventory/${id}`)
}

  return (
    <div className="inventories-container">
      <div className="inventories-img">
        <img src={img} alt="" />
      </div>
      <h2>{name}</h2>
      <p>price: {price}</p>
      <p>
        <small>{description}</small>
      </p>
      <p>
        <small>{quantity}</small>
      </p>
      <h5>
        <small>suppliername:</small> {suppliername}
      </h5>
      <button
        onClick={() => naviagteToServiceDetail(_id)}
        className="button-inv btn btn-primary"
      >
        Order: {name}
      </button>
     
    </div>
  );
};

export default Inventories;