import React, { useEffect, useState } from 'react';
import Inventories from '../Inventories/Inventories';
import './Inventory.css'
import { Link } from "react-router-dom";
const Inventory = () => {

    const [inventory, setInventory] = useState([])

    useEffect(()=>{
      fetch("http://localhost:5000/inventory")
        .then((res) => res.json())
        .then((data) => setInventory(data));
    },[])
    return (
      <div id="inventory" className="inventory-title">
        <h2 className="m-5">Our Inventory</h2>
        <div className="inventory-container">
          {inventory.slice(6).map((inventories) => (
            <Inventories
              key={inventories._id}
              inventories={inventories}
            ></Inventories>
          ))}
        </div>
        <Link to="/manageservice">
          <button className="btn btn-primary mt-4">manage inventory</button>
        </Link>
      </div>
    );
};

export default Inventory;