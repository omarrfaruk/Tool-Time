import React from 'react';
import divider from '../../assests/images/Ozar_O2-1.png'
import { UserCircleIcon, UserIcon } from '@heroicons/react/solid'



const Reviews = () => {
    return (
        <div className='my-10'>
            <div className="text-center text-2xl">Client Testimonials</div>
            <div className='flex  justify-center'>
                <img src={divider} alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 px-32'>
                <div class="card border-x  bg-base-100">
                    <div class="card-body">
                        <p>If a dog chews shoes whose shoes does he choose?
                            If a dog chews shoes whose shoes does he choose If a dog chews shoes whose shoes does he chooseIf a dog chews shoes whose shoes does he choose If a dog chews shoes whose shoes does he choose
                        </p>
                        <div>
                            <p><UserCircleIcon className="h-5 w-5 text-blue-500" /> salma </p>
                        </div>

                    </div>
                </div>
                <div class="card border-x bg-base-100">
                    <div class="card-body">

                        <p>If a dog chews shoes whose shoes does he choose?
                            If a dog chews shoes whose shoes does he choose If a dog chews shoes whose shoes does he chooseIf a dog chews shoes whose shoes does he choose If a dog chews shoes whose shoes does he choose
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;