import React from 'react';
import error from '../../../images/error.jpg'
const NotFound = () => {
    return (
        <div>
            <h2>You have entered wrong keyword</h2>
            <div>
                <img className='w-100 mx-auto' src={error} alt="" />
            </div>
        </div>
    );
};

export default NotFound;