import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrders = () => {

    const [user] = useAuthState(auth)

    // get all orders
    const customerEmail = user?.email;


    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${customerEmail}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [customerEmail])




    // delete a order
    const handleDelete = id => {
        const sure = window.confirm('Are You Sure?')
        if (sure) {
            const url = `http://localhost:5000/orders/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }

    }


    return (
        <div class="overflow-x-auto m-10">
            <table class="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map(d => <tr>
                            <th>1</th>
                            <th>{d.productName}</th>
                            <td>{d.orderQuantity}</td>
                            <td>{'$' + d.price}</td>
                            <td><button className='btn btn-sm'>pay</button></td>
                            <td><button
                                onClick={() => handleDelete(d._id)}
                                className='btn btn-sm'>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;