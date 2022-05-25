import React from 'react';

import auth from '../../firebase.init';
import ima from '../../assests/images/cartoon-boy-images-4.jpg'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const MyProfile = () => {

    const [user] = useAuthState(auth)



    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    console.log(users);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="avatar grid justify-items-center mb-[-90px]">
                <div class="w-44 rounded-full ">
                    <img src={user?.photoURL || ima} alt='' />
                </div>
            </div>
            <div className='bg-gray-300 h-[50vh] flex'>
                <div className='flex-auto w-2/5 text-center lg:mt-20 text-white-300'>
                    <p className=''>{user?.displayName}</p>
                    <p className=''>{user?.email}</p>
                    {/* <p>{users.}</p> */}
                </div>

                <div className='flex-auto w-2/5 text-center items-center lg:mt-20'>
                    <button
                        className='btn btn-sm'>
                        <Link to='updateprofile'>Update Your Profile</Link>
                    </button>
                </div>
            </div>


        </div>
    );
};

export default MyProfile;