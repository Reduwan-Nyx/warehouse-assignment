import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const {inventoryId} = useParams()
    const [service, setService] = useState({})
    
   useEffect( ()=>{
      const url = `http://localhost:5000/inventory/${inventoryId}`;

    fetch(url)
    .then(res => res.json())
    .then(data => setService(data))

    },[])
  return (
    <div>
      <h2>you are about to order food: {service.name}</h2>
      <div className="text-center">
        <Link to="/CheckOut">
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
      <Link to="/manageservice">
        <button className="btn btn-primary d-block mx-auto mt-5">manage inventory</button>
      </Link>
    </div>
  );
};

export default InventoryDetail;