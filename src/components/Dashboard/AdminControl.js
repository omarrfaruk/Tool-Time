import React from 'react';
import toast from 'react-hot-toast';

const AdminControl = ({ d, index, refetch }) => {


    const makeAdmin = () => {
        fetch(`http://localhost:5000/users/admin/${d.email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {

                    console.log(data);
                    toast.success('Successfully Made an Admin')
                    refetch()
                }
                else {
                    toast.error('Failed To Make an Admin')
                }
            })
    }


    return (
        <tr>
            <th>{index + 1}</th>
            <th>{d.email}</th>
            <td>{d.role !== 'admin' && <button onClick={makeAdmin} className='btn btn-sm'>Make Admin</button>}</td>
            <td><button className='btn btn-sm'>Delete</button></td>
        </tr>
    );
};

export default AdminControl;