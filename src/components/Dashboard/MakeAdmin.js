import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const MakeAdmin = () => {


    const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/users').then(res => res.json()))

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
                        users?.map((d, index) => <tr>
                            <th>{index + 1}</th>
                            <th>{d.email}</th>
                            {/* <td>{d.orderQuantity}</td>
                            <td>{'$' + d.price}</td>
                            <td><button className='btn btn-sm'>pay</button></td> */}
                            {/* <td><button
                                onClick={() => handleDelete(d._id)}
                                className='btn btn-sm'>Delete</button></td> */}
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;