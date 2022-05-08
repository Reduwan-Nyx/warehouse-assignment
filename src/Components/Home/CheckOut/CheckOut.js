import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import useInventoryDetail from "../../../Hooks/UseInventory";
import axios from "axios";
import { toast } from "react-toastify";

const CheckOut = () => {
  const { inventoryId } = useParams();
  const [service] = useInventoryDetail(inventoryId);
  const [user] = useAuthState(auth);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      inventoryId: inventoryId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    axios
      .post("https://mighty-tundra-48234.herokuapp.com/order", order)
      .then((response) => {
        const { data } = response;
        if (data.insertedId) {
          toast("your order is booked !!!");
          event.target.reset();
        }
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h2>This is Checkout: {service.name}</h2>
      <form onSubmit={handlePlaceOrder}>
        <input
          className="w-100 mb-2"
          type="text"
          value={user?.displayName}
          name="name"
          placeholder="name"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="email"
          value={user?.email}
          name="email"
          placeholder="email"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          value={service.name}
          name="service"
          placeholder="service"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="address"
          placeholder="address"
          autoComplete="off"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="phone"
          placeholder="phone"
          required
        />
        <br />
        <input className="btn btn-primary" type="submit" value="Place order" />
      </form>
    </div>
  );
};

export default CheckOut;
