import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';

const ManageProducts = () => {

    const { data: product, isLoading } = useQuery('orders', () => fetch('https://secure-refuge-17271.herokuapp.com/product').then(res => res.json()))


    if (isLoading) {
        return <Loading />
    }

    const handleDelete = id => {
        const sure = window.confirm('Are You Sure?')
        if (sure) {
            const url = `https://secure-refuge-17271.herokuapp.com/product/${id}`
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
        <div className="overflow-x-auto">
            <table className="table w-full">
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
                            <td><button
                                onClick={() => handleDelete(p._id)}
                                className="btn btn-sm">
                                DELETE
                            </button></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;