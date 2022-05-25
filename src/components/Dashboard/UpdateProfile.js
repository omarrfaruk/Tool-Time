import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const UpdateProfile = () => {

    const [user] = useAuthState(auth)

    const updateProfile = (e) => {
        e.preventDefault()

        const updatedInformation = {
            education: e.target.education.value,
            phone: e.target.phone.value,
            address: e.target.address.value,
            social: e.target.social.value,

        }

        console.log(updatedInformation);
        fetch(`https://secure-refuge-17271.herokuapp.com/user/${user?.email}`, {
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
                <input type="text" name='education' placeholder="Education" className="input input-bordered w-full max-w-xs" />
                <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xs" />
                <input type="number" name='phone' placeholder="Number" className="input input-bordered w-full max-w-xs" />
                <input type="text" name='social' placeholder="Social L" className="input input-bordered w-full max-w-xs" />
                <input type="submit" value='UPDATE PROFILE' className="input input-bordered w-full max-w-xs" />
            </form>
        </div>
    );
};

export default UpdateProfile;