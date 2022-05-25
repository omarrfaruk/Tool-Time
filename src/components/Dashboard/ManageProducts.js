import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageProducts = () => {

    const { data: product, isLoading } = useQuery('orders', () => fetch('http://localhost:5000/product').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th></th>
                        <th> Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Minimum</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}
                    {
                        product?.map((p, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{p.name}</td>
                            <td>${p.price}</td>
                            <td>{p.available}</td>
                            <td>{p.Minimum}</td>
                            <td><button class="btn btn-sm">UPDATE</button></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;