import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyItems = () => {
  const [inventories, setinventories] = useState([])
  console.log(inventories);
  const [ user] = useAuthState(auth)


  const handleButton = id =>{
    const proceed = window.confirm('do you want to delete?')
    if(proceed){
      const url = `http://localhost:5000/inventory/${id}`
      fetch(url, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data);
        const remaining = inventories.filter
        (inventories => inventories._id !== id);
        setinventories(remaining)
      })
    }
  }

  useEffect(()=>{
    const getItems = async() =>{
      const email = user.email;
      const url = `http://localhost:5000/myitems?email=${email}`
      if(email){
        const {data}= await axios.get(url)
        setinventories(data)
      }
    }
    getItems()
  }, [user])

  return (
    <div className='container'>
      <h2>Choose your Inventory</h2>
      <div className='allitems-cotnainer'>
        {
          inventories.map(inventory => <div key={inventory._id}></div>)
        }
      </div>
    </div>
  );
};

export default MyItems;