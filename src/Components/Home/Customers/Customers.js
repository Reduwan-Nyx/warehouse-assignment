import React from 'react';

import customer1 from '../../../images/customer1.jpg';
import customer2 from '../../../images/customer2.jpg';
import customer3 from '../../../images/customer3.jpg';
import Customer from '../Customer/Customer';

const customers = [
  {
    id: 1,
    description:
      "“I love this product! I've gone through the entire collection and have not found one that I didn't like. Fantastic service and quick delivery as well.” — Alicia Brown",
    img: customer1,
  },

  {
    id: 2,
    description:
      "“Ive been buying these juices for a while now and its absolutely delicious and filling. So happy I discovered it!” — Ellen Carder",
    img: customer2,
  },

  {
    id: 3,
    description:
      "This product is amazing. Experience ordering and receiving products are more than exceptional. Thank you, highly recommending it.— Francis Perry",
    img: customer3,
  },
];

const Customers = () => {
    return (
      <div>
        <h2 className='text-center m-5'>Customers love our products</h2>
        <div className='row'>
          {
            customers.map(customer => <Customer
            key={customer.id}
            customer={customer}
            ></Customer>)
          }
        </div>
      </div>
    );
};

export default Customers;