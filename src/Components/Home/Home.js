import React from 'react';
import Inventory from '../Inventory/Inventory';
import Banner from './Banner/Banner';
import Customers from './Customers/Customers';
import Memories from './Memories/Memories';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Inventory></Inventory>
            <Memories></Memories>
            <Customers></Customers>
        </div>
    );
};

export default Home;