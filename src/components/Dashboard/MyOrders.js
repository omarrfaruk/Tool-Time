import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrders = () => {

    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    // get all orders
    const customerEmail = user?.email;


    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`https://secure-refuge-17271.herokuapp.com/orders?email=${customerEmail}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth)
                    navigate('/')
                }
                return res.json()
            })
            .then(data => setOrders(data))
    }, [customerEmail, navigate])




    // delete a order
    const handleDelete = id => {
        const sure = window.confirm('Are You Sure?')
        if (sure) {
            const url = `https://secure-refuge-17271.herokuapp.com/orders/${id}`
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
        <div className="overflow-x-auto m-10">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Payment</th>
                        <th>Transaction Id</th>
                        <th>Cancel</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map((d, index) => <tr key={d._id}>
                            <th>{index + 1}</th>
                            <th>{d.productName}</th>
                            <td>{d.orderQuantity}</td>
                            <td>{'$' + d.price}</td>
                            <td>
                                {(d.price && !d.paid) && <Link to={`/dashboard/payment/${d._id}`}><button className='btn btn-sm '>pay</button></Link>}
                                {(d.price && d.paid) && <span className='text-success '>paid</span>}
                            </td>
                            <td>
                                {(d.price && d.paid) && <p className='text-success '>{d.transactionId}</p>}
                            </td>

                            <td><button
                                disabled={d.paid}
                                onClick={() => handleDelete(d._id)}
                                className='btn btn-sm'>Cancel</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div >
    );
};

export default MyOrders;