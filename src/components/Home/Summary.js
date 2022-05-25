import React from 'react';
import delivery from '../../assests/images/delivery.png'
import buyer from '../../assests/images/buyer.png'
import stock from '../../assests/images/stock.png'
import operation from '../../assests/images/operation.png'

const Summary = () => {
    return (
        <div className='mt-20'>
            <h1 className='text-2xl text-center pb-7'>What Makes Us Different from other tool Manufacturers?
            </h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 mx-10'>
                <div class="card lg:max-w-lg">
                    <div class="card-body text-center">
                        <div className='mx-auto mb-2'>
                            <img className='h-24 w-24' src={stock} alt="" />
                        </div>
                        <h2 class="text-4xl font-bold">3000+</h2>
                        <p className='text-xl'>SKUs</p>

                    </div>
                </div>
                <div class="card lg:max-w-lg  ">
                    <div class="card-body text-center">
                        <div className='mx-auto mb-2'>
                            <img className='h-24 w-24' src={operation} alt="" />
                        </div>
                        <h2 class="text-4xl font-bold">40+</h2>
                        <p className='text-xl'>Years of operation</p>

                    </div>
                </div>
                <div class="card lg:max-w-lg ">
                    <div class="card-body text-center">
                        <div className='mx-auto mb-2'>
                            <img className='h-24 w-24' src={delivery} alt="" />
                        </div>
                        <h2 class="text-4xl font-bold">99%</h2>
                        <p className='text-xl'>On time delivery</p>

                    </div>
                </div>
                <div class="card lg:max-w-lg ">
                    <div class="card-body text-center">
                        <div className='mx-auto mb-2'>
                            <img className='h-24 w-24' src={buyer} alt="" />
                        </div>
                        <h2 class="text-4xl font-bold">5000+</h2>
                        <p className='text-xl'>Customers Globally
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;