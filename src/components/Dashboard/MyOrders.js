import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const MyOrders = () => {

    const { data, isLoading } = useQuery('orders', () => fetch('http://localhost:5000/orders').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
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
                        data?.map(d => <tr>
                            <th>1</th>
                            <th>{d.productName}</th>
                            <td>{d.orderQuantity}</td>
                            <td>{'$' + d.price}</td>
                            <td><button className='btn btn-sm'>pay</button></td>
                            <td><button className='btn btn-sm'>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;