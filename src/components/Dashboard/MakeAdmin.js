import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AdminControl from './AdminControl';

const MakeAdmin = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

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
                        <th>name</th>
                        <th>name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((d, index) => <AdminControl
                            key={d._id}
                            index={index}
                            refetch={refetch}
                            d={d}></AdminControl>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;