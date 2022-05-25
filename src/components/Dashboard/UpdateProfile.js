import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';

const UpdateProfile = () => {

    const [user] = useAuthState(auth)

    const updateProfile = (e) => {
        e.preventDefault()

        const updatedInformation = {
            education: e.target.education.value,
            phone: e.target.phone.value,
            address: e.target.address.value,

        }

        console.log(updatedInformation);
        fetch(`http://localhost:5000/user/${user?.email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedInformation)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })


    }




    return (
        <div>
            <h1 className='text-2xl'>UPDATE YOUR PROFILE</h1>
            <form
                onSubmit={updateProfile}
                className='grid grid-cols-1 gap-2'
            >
                <input type="text" name='education' placeholder="Education" class="input input-bordered w-full max-w-xs" />
                <input type="text" name='address' placeholder="Address" class="input input-bordered w-full max-w-xs" />
                <input type="number" name='phone' placeholder="Number" class="input input-bordered w-full max-w-xs" />
                <input type="link" name='social' placeholder="Social L" class="input input-bordered w-full max-w-xs" />
                <input type="submit" value='UPDATE PROFILE' class="input input-bordered w-full max-w-xs" />
            </form>
        </div>
    );
};

export default UpdateProfile;