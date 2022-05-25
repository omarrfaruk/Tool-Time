import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import background from '../../assests/images/Banner-Wrenches.jpg'
import PurchaseModal from './PurchaseModal';

const Purchase = () => {
    const { id } = useParams()
    const [details, setDetails] = useState({})
    const [total, setTotal] = useState(0)

    const orderQuantity = parseInt(total)

    useEffect(() => {
        const url = `https://secure-refuge-17271.herokuapp.com/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setDetails(data)
            })
    }, [id])

    const handleQuantity = e => {
        e.preventDefault()
        const inputValue = e.target.quantity.value;
        setTotal(inputValue)
        if (parseInt(inputValue) < parseInt(details.Minimum)) {
            toast.error(`Quantity Must Be equal minimum`)
        }
        else if (parseInt(inputValue) > parseInt(details.available)) {
            toast.error(`You Can't Order More Than Stock`)
        }
        // else {
        //     toast.success('Congretulation')
        // }
    }

    return (
        <div>
            <div style=
                {{
                    backgroundImage: `url(${background})`,
                    height: '50vh',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',

                }}>
                <h1 className='text-5xl font-serif font-bold sm:pt-10 lg:pl-60 lg:pt-40 text-white'>{details.name}</h1>
            </div>
            <div className="w-4/5 mx-auto mt-28 mb-20 rounded bg-slate-300">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className=' rounded lg:w-2/4 bg-white'>
                        <img src={details.img} alt='' className=" rounded-lg " />
                    </div>
                    <div className=' lg:w-2/4 font-serif lg:mr-60'>
                        <h1 className="text-3xl font-bold">{details.name}</h1>
                        <p className="py-6">{details.description}</p>
                        <p><small>Price: {details.price}</small></p>
                        <p><small>Available: {details.available}</small></p>
                        <p><small>Minimum Order: {details.Minimum}</small></p>
                        <p className='mt-5'>Add Quantity</p>
                        <form onSubmit={handleQuantity}>
                            <input type="number" name="quantity" id="" />
                            <input type="submit" className='btn btn-outline btn-xs' value='Add' id="" />
                        </form>
                        <br />
                        {
                            orderQuantity > details.Minimum && orderQuantity <= details.available ?
                                <label
                                    for="purchase-modal"
                                    className="btn btn-outline btn-sm">PURCHASE
                                </label>
                                :
                                <label
                                    disabled
                                    for="purchase-modal"
                                    className="btn btn-outline btn-sm">PURCHASE
                                </label>
                        }
                    </div>

                </div>
            </div>
            {
                details && <PurchaseModal orderQuantity={orderQuantity} setDetails={setDetails} details={details} ></PurchaseModal>
            }
        </div >
    );
};

export default Purchase;