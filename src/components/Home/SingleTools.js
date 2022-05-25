import React from 'react';
import { Link } from 'react-router-dom';

const SingleTools = ({ tool }) => {
    const { _id, name, price, description, img, Minimum, available } = tool;


    return (
        <div

            className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className='product'>
                <img
                    style={{ height: '300px ' }}
                    src={img} alt="" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description.slice(0, 70)}</p>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline">Minimum: {Minimum}</div>
                    <div className="badge badge-outline">Available: {available}</div>
                </div>
                <div className="badge badge-outline">Price: ${price}</div>
                <div className="card-actions justify-center">

                    <Link className='border hover:text-white hover:bg-red-300' to={'purchase/' + _id}><button className='mx-20 my-2'>Details</button></Link>

                </div>
            </div>
        </div>
    );
};

export default SingleTools;