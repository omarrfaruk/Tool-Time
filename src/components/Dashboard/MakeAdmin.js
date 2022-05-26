import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AdminControl from './AdminControl';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const MakeAdmin = () => {
    const [user] = useAuthState(auth)

    const { data: users, isLoading, refetch } = useQuery(['users', user], () => fetch('https://secure-refuge-17271.herokuapp.com/users', {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="overflow-x-auto m-10">
            <table className="table w-full">
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