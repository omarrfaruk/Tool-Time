import React from 'react';
import { useQuery } from 'react-query';
import SingleTools from './SingleTools';

const Tools = () => {


    const { data } = useQuery('products', () => fetch('https://secure-refuge-17271.herokuapp.com/product').then(res => res.json()))
    return (
        <div className='my-20 mx-20'>
            <h1 className='text-center text-2xl  uppercase font-bold'>Find The Right Tool</h1>
            <h1 className='text-center text-2xl mb-8 uppercase font-bold '>For Every Job</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 '>
                {
                    data?.slice(-6).map(tool => <SingleTools key={tool._id} tool={tool}></SingleTools>)
                }
            </div>

        </div>
    );
};

export default Tools;