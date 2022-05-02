import React from 'react';
import './memory.css'
const Memory = ({memory}) => {
    const {name,img,description} = memory
    return (
      <div className="memory-container mb-5">
        <div className='memory-img'>
          <img src={img} alt="" />
        </div>
        <div className='memory'>
          <h1 className='memory-title'>{name}</h1>
          <p className='memory-desc'>
            <small>{description}</small>
          </p>
          <button className='btn btn-primary button'>Learn More</button>
        </div>
      </div>
    );
};

export default Memory;