import React from 'react';
import notFound from '../../assests/images/notFound.jpg'

const NotFound = () => {
    return (
        <div className='grid justify-center'>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;