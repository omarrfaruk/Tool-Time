import React from 'react';
import customer from '../../assests/images/world-map.jpg'
import divider from '../../assests/images/Ozar_O2-1.png'

const CustomerBase = () => {
    return (
        <div >
            <div className="text-center text-2xl mt-16">Our Global Customer Base</div>
            <div className='flex  justify-center'>
                <img src={divider} alt="" />
            </div>
            <div className="flex justify-center">
                <img src={customer} alt="" />
            </div>
        </div>
    );
};

export default CustomerBase;