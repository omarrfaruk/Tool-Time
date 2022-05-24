import React from 'react';
import { Link } from 'react-router-dom';

const SingleTools = ({ tool }) => {
    const { _id, name, price, description, img, Minimum, available } = tool;


    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl image-full">
            <figure><img src={img} alt="" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description.slice(0, 70)}</p>
                <div class="card-actions justify-between">
                    <div class="badge badge-outline">Minimum: {Minimum}</div>
                    <div class="badge badge-outline">Available: {available}</div>
                </div>
                <div class="badge badge-outline">Price: ${price}</div>
                <div class="card-actions justify-center">
                    <button
                        class="btn bg-red-500">
                        <Link to={'purchase/' + _id}>Details</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleTools;