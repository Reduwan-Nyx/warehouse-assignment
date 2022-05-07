import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './InventoryDetail.css'

const InventoryDetail = () => {
  const navigate = useNavigate()
  const {inventoryId} = useParams()
  const stockRef = useRef('')
  const [inventory, setInventory] = useState({})
  useEffect(()=>{
    const url = `http://localhost:5000/inventory/${inventoryId}`
    fetch(url)
    .then(res => res.json())
    .then(data => setInventory(data))
  },[])


  const hanleManageItem = () =>{
    navigate('/manageservice')
  }

  const handleDeliverd = () => {
    const updateStock ={
      quantity: parseInt(inventory.quantity) - 1,
      name: inventory.name,
      price: inventory.price,
      description: inventory.description,
      suppliername: inventory.suppliername,
      img: inventory.img,
    }
    const url = `http://localhost:5000/inventory/${inventoryId}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateStock)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setInventory(updateStock)
    })
  }

  const stockUpdate = (event) =>{
    event.preventDefault()
    const newStock = stockRef.current.value;
    console.log(newStock);
    const updateStock ={
      quantity: parseInt(inventory.quantity) + parseInt(newStock),
      name: inventory.name,
      price: inventory.price,
      description: inventory.description,
      suppliername: inventory.suppliername,
      img: inventory.img,
      _id: inventory._id
    }
    // send data
    const url = `http://localhost:5000/inventory/${inventoryId}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateStock)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setInventory(updateStock)
    })
    event.target.reset()
  }



  return (
    <div className='container'>
      <div className='single-item'>
        <div className='single-image'>
          <img src={inventory.img} alt="" />
        </div>
        <div className='singleitem-info'>
          <h2>{inventory.name}</h2>
          <p>ID: {inventory._id}</p>
          <p>{inventory.body}</p>
          <h5>supplier name: {inventory.suppliername}</h5>
          <p>price: <small>{inventory.price}</small></p>
          <p>Quantity: <small>{inventory.quantity}</small></p>
          <div className='double-buttons'>
            <div className='single-button'>
            <button onClick={hanleManageItem} className='btn btn-primary'>manage-item</button>
            </div>
          </div>
          <button className='btn btn-primary m-2' onClick={() => handleDeliverd()}>Deliverd</button>
        </div>
        <div>
          <form onSubmit={stockUpdate}>
            <input ref={stockRef} type="number" name='added' id=''/>
            <input type="submit" value="Add Stock" />
          </form>
        </div>
      </div>
      <Link to={`/checkout/${inventoryId}`}>
                    <button className='btn btn-primary d-block mx-auto'>Proceed Checkout</button>
                </Link>
    </div>
  );
};

export default InventoryDetail;