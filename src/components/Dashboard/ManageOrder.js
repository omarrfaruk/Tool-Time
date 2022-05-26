import React, { useEffect, useState } from 'react';

const ManageOrder = () => {


    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('https://secure-refuge-17271.herokuapp.com/order')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data)
            })
    })


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