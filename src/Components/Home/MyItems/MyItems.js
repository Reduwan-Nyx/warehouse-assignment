import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../../../api/axiosPrivate";
import auth from "../../../firebase.init";
import "./MyItems.css";

const MyItems = () => {
  const [inventories, setinventories] = useState([]);
  console.log(inventories);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleButton = (id) => {
    const proceed = window.confirm("do you want to delete?");
    if (proceed) {
      const url = `https://mighty-tundra-48234.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = inventories.filter(
            (inventories) => inventories._id !== id
          );
          setinventories(remaining);
        });
    }
  };

  useEffect(() => {
    const getItems = async () => {
      const email = user.email;
      const url = `https://mighty-tundra-48234.herokuapp.com/order?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setinventories(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || 401) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getItems();
  }, [user]);

  return (
    <div className="myitems-container">
      <h2>Choose your Inventory</h2>

      <div className="allitems-cotnainer">
        {inventories.map((inventory) => (
          <div key={inventory._id}>
            <div className="all-items">
              <div>
                <h5>{inventory.email}</h5>
                <p>
                  <small>price" {inventory.service}</small>
                </p>
                <p>
                  <small>id: {inventory._id}</small>
                </p>
                <p>
                  <small>address : {inventory.address}</small>
                </p>
              </div>
              <div>
                <button
                  className="btn btn-primary"
                  onClick={() => handleButton(inventory._id)}
                >
                  DELETE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
