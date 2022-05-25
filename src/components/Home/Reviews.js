import React from 'react';
import divider from '../../assests/images/Ozar_O2-1.png'
import { UserCircleIcon, UserIcon } from '@heroicons/react/solid'
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';



const Reviews = () => {

    const { data, isLoading } = useQuery('reviews', () => fetch('https://secure-refuge-17271.herokuapp.com/reviews').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='my-10 '>
            <div className="text-center text-2xl">Client Reviews</div>
            <div className='flex  justify-center'>
                <img src={divider} alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 px-32'>

                {
                    data?.map(d => <div className="card-body">

                        <div className="card border p-5 bg-base-100">

                            <p>{d.review}</p>
                            <small className='mt-3'>rating: {d.rating}</small>
                            <small className='mt-5'><UserCircleIcon className="h-5 w-5 inline text-gray-500" />{d.name}</small>

                        </div>

                    </div>)

                }


            </div>
        </div>
    );
};

export default Reviews;