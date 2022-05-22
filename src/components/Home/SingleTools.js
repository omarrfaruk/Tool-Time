import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SingleTools = ({ tool }) => {
    const { _id, name, price, description, img, Minimum, available } = tool;


    return (
        <div>

            <div class="card lg:max-w-lg bg-base-100  shadow-xl">
                <figure>
                    <img height={'250px'} src={img} alt="" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        {name}
                    </h2>
                    <p>{description.slice(0, 100)}</p>
                    <div class="card-actions justify-between">
                        <div class="badge badge-outline">Minimum: {Minimum}</div>
                        <div class="badge badge-outline">Available: {available}</div>
                    </div>
                    <div class="badge badge-outline">Price: {price}</div>


                    <Link
                        to={'purchase/' + _id}
                        className='btn btn-outline'
                    > details</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleTools;