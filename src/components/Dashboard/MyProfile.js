import React from 'react';
import auth from '../../firebase.init';
import ima from '../../assests/images/cartoon-boy-images-4.jpg'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const MyProfile = () => {

    const [user] = useAuthState(auth)



    const { data: users, isLoading } = useQuery('users', () => fetch('https://secure-refuge-17271.herokuapp.com/user', {
        method: "GET",
        headers: {
            email: user?.email
        }
    }).then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div className="avatar grid justify-items-center mb-[-90px]">
                <div className="w-44 rounded-full ">
                    <img src={user?.photoURL || ima} alt='' />
                </div>
            </div>
            <div className='bg-gray-300 h-[50vh] flex'>
                <div className='flex-auto w-2/5 text-center lg:mt-20 text-white-300'>
                    <p className=''>{user?.displayName}</p>
                    <p className=''>{user?.email}</p>
                    <p>{users?.address}</p>
                    <p>{users?.phone}</p>
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