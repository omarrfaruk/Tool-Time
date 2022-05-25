import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)

    return (
        <div class="drawer drawer-mobile shadow-sm bg-gray-200">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                {/* <!-- Page content here --> */}

                <Outlet></Outlet>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='addreview'>Add Review</Link></li>
                    <li><Link to='myprofile'>My Profile</Link></li>
                    <li><Link to='manageorder'>Manage Order</Link></li>
                    <li><Link to='addproduct'>Add Product</Link></li>
                    <li><Link to='manageproducts'>Manage Products</Link></li>
                    <li>{admin &&<Link to='makeadmin'>Make Admin</Link>}</li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;