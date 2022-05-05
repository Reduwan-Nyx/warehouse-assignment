import React from 'react';
import { Link } from 'react-router-dom';
import useServices from '../../../Hooks/UseServices';
import './ManageServices.css'
const ManageServices = () => {
  const [inventory, setServices] = useServices()


  const handleDelete = id =>{
    
    const proceed = window.confirm('Are you Sure ?')
    if(proceed){
      const url = `http://localhost:5000/inventory/${id}`;
      console.log(url);
      fetch(url, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const remaining = inventory.filter(inventories => inventories._id !== id)
        setServices(remaining)
      })
    }
  }
    return (
      <div>
        <h2 className='text-center m-3'>Manage Your Services</h2>
        <div className='manage-container'>
          {inventory.map((inventories) => (
            <div key={inventories._id}>
              <img width={100} src={inventories.img} alt="" />
              <h5>{inventories.name}</h5>
              <p>{inventories.price}</p>
              <p>
                <small>{inventories.description}</small>
              </p>
              <p>{inventories.quantity}</p>
              <h5>{inventories.suppliername}</h5>
              <button
                className="btn btn-primary mb-3"
                onClick={() => handleDelete(inventories._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <Link to="/addservice">
          <button className="btn btn-primary d-block mx-auto">Add new Item</button>
        </Link>
      </div>
    );
};

export default ManageServices;