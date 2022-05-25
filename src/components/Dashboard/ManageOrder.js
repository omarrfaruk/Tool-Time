import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageOrder = () => {

    const { data: orders, isLoading } = useQuery('orders', () => fetch('https://secure-refuge-17271.herokuapp.com/orders/admin').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}
                    {
                        orders?.map((order, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{order.customerName}</td>
                            <td>{order.customerEmail}</td>
                            <td>{order.productName}</td>
                            <td>{order.orderQuantity}</td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageOrder;