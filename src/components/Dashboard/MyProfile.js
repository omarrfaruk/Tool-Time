import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ima from '../../assests/images/cartoon-boy-images-4.jpg'

const MyProfile = () => {

    const [user] = useAuthState(auth)


    const updatedInformation = {
        //f;sdjlk
    }

    const updateProfile = () => {

        fetch(`http://localhost:5000/users/admin/${user?.email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })


    }




    return (
        <div>
            <div class="avatar grid justify-items-center mb-[-90px]">
                <div class="w-44 rounded-full ">
                    <img src={user?.photoURL || ima} alt='' />
                </div>
            </div>
            <div className='bg-gray-400 h-[50vh] flex'>
                <div className='flex-auto w-2/5 text-center'>
                    <p className=''>{user?.displayName}</p>
                    <p className=''>{user?.email}</p>
                </div>

                <div className='flex-auto w-2/5 text-center items-center'>
                    <button
                        onClick={updateProfile}
                        className='btn btn-sm'>Update Your Profile</button>
                </div>
            </div>


        </div>
    );
};

export default MyProfile;