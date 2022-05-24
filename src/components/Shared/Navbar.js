import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const Navbar = ({ children }) => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const logOut = () => {
        signOut(auth)
        localStorage.removeItem('accessToken')
        navigate('/')
    }
    return (
        <div class="drawer">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div class="w-full navbar bg-transparent">
                    <div class="flex-none lg:hidden">
                        <label tabindex="0" for="my-drawer-2" class="btn btn-ghost btn-circle drawer-button lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                    </div>
                    <div class="px-2 mx-2 text-2xl font-bold font-serif">Tool Time</div>
                    <div class=" mx-auto hidden lg:block">
                        <ul class="menu menu-horizontal">
                            {/* <!-- Navbar menu content here --> */}
                            <li><NavLink to='/'>Home</NavLink></li>
                            {
                                user && <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                            }
                            <li><NavLink to='/register'>Register</NavLink></li>
                            {
                                user ?
                                    <li><button onClick={logOut}>Sign Out</button></li>
                                    :
                                    <li><NavLink to='/login'>Login</NavLink></li>
                            }
                        </ul>
                    </div>
                    <p className='hidden lg:block'>
                        {user && user?.displayName}
                    </p>
                    <label for="my-drawer-3" class="btn btn-square btn-ghost ml-16">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>

                </div>
                {/* <!-- Page content here --> */}
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to='/'>Home</NavLink></li>
                    {
                        user && <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                    }
                    <li><NavLink to='/register'>Register</NavLink></li>
                    {
                        user ?
                            <li><button onClick={logOut}>Sign Out</button></li>
                            :
                            <li><NavLink to='/login'>Login</NavLink></li>
                    }

                </ul>


            </div>
            {/* <div className="navbar-end">
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div> */}

        </div>
    );
};

export default Navbar;