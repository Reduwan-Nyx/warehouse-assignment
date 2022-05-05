import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './InventoryDetail.css'

const InventoryDetail = () => {
  const navigate = useNavigate()
    const {inventoryId} = useParams()
    const stockRef = useRef("")
    const [service, setService] = useState({})
    
   useEffect( ()=>{
      const url = `http://localhost:5000/inventory/${inventoryId}`;

    fetch(url)
    .then(res => res.json())
    .then(data => setService(data))

    },[])


    const handleManageItem = () =>{
      navigate("/manageservice");
    }

    const handleDeliverd = () => {
      const updatedStock = {
        quantity: parseInt(service.quantity) - 1,
        name: service.name,
        price: service.price,
        description: service.description,
        suppliername: service.suppliername,
        img: service.img
      }
      const url = `http://localhost:5000/inventory/${inventoryId}`;
      fetch(url, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(updatedStock)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setService(updatedStock)
      })
    } 

    const stockUpdate = (event) =>{
      event.preventDefault()
      const newStock = stockRef.current.value;
      console.log(newStock);
      const updateStock = {
        quantity: parseInt(service.quantity) + parseInt(newStock),
        name: service.name,
        price: service.price,
        description: service.description,
        suppliername: service.suppliername,
        img: service.img,
        _id: service._id

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
        setService(updateStock)
      })
      event.target.reset()
    }




  return (
    <div className='container'>
      <div className='single-item'>
        <div className='single-image'>
          <img src={service.img} alt="" />
        </div>
        <div className='singleitem-info'>
          <h2>{service.name}</h2>
          <p>Id: {service._id}</p>
          <p>{service.body}</p>
          <h5>Supplier Name: {service.suppliername}</h5>
          <p>Price: <small>{service.price}</small></p>
          <p>quantity: <small>{service.quantity}</small></p>
          <div className='double-buttons'>
              <div className='single-buttons'>
                <button onClick={handleManageItem} className='btn btn-primary'>Manage Item</button>
              </div>
          </div>
          <button className='btn btn-primary m-3' onClick={()=> handleDeliverd()}>Deliverd</button>
          <div>
            <form onSubmit={stockUpdate}>
              <input ref={stockRef} type="number" name='added' id=''/>
              <input type="submit" value="add Stock"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetail;