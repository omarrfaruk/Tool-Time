import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import SingleTools from './SingleTools';

const Tools = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://secure-refuge-17271.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data.reverse()))

    }, [])




    return (
        <div className='my-16 mx-20'>
            <h1 className='text-center text-2xl  uppercase font-bold'>Find The Right Tool</h1>
            <h1 className='text-center text-2xl mb-8 uppercase font-bold '>For Every Job</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 '>
                {
                    products?.slice(0, 6).map(tool => <SingleTools key={tool._id} tool={tool}></SingleTools>)
                }
            </div>

        </div>
    );
};

export default Tools;