import React from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const {inventoryId} = useParams()
  return (
    <div>
      <h2> welcome Service Detail: {inventoryId}</h2>
      <div className='text-center'>
        <Link to="/CheckOut">
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default InventoryDetail;