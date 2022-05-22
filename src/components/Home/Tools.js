import React from 'react';
import { useQuery } from 'react-query';
import SingleTools from './SingleTools';

const Tools = () => {


    const { data } = useQuery('products', () => fetch('products.json').then(res => res.json()))

    return (
        <div className='my-16 mx-12'>
            <h1 className='text-center text-2xl text-bold'>Find The Right Tool</h1>
            <h1 className='text-center text-2xl text-bold'>For Every Job</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 '>
                {
                    data?.map(tool => <SingleTools key={tool._id} tool={tool}></SingleTools>)
                }
            </div>

        </div>
    );
};

export default Tools;