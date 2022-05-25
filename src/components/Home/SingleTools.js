import React from 'react';
import { Link } from 'react-router-dom';

const SingleTools = ({ tool }) => {
    const { _id, name, price, description, img, Minimum, available } = tool;


    return (
        <div

            class="card lg:max-w-lg bg-base-100 shadow-xl">
            <img
                style={{ height: '300px ' }}
                src={img} alt="" />
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description.slice(0, 70)}</p>
                <div class="card-actions justify-between">
                    <div class="badge badge-outline">Minimum: {Minimum}</div>
                    <div class="badge badge-outline">Available: {available}</div>
                </div>
                <div class="badge badge-outline">Price: ${price}</div>
                <div class="card-actions justify-center">

                    <Link className='border hover:text-white hover:bg-red-300' to={'purchase/' + _id}><button className='mx-20 my-2'>Details</button></Link>

                </div>
            </div>
        </div>
    );
};

export default SingleTools;