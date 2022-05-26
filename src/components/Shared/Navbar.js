import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import img from '../../assests/images/cartoon-boy-images-4.jpg'


const Navbar = ({ children }) => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const logOut = () => {
        signOut(auth)
        localStorage.removeItem('accessToken')
        navigate('/')
    }
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div className="w-full navbar bg-transparent">
                    <div className="flex-none lg:hidden">
                        <label for="my-drawer-2" className="btn btn-ghost btn-circle drawer-button lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                    </div>
                    <div className="px-2 mx-2 text-2xl font-bold font-serif">
                        <Link to='/'>Tool Time</Link>
                    </div>
                    <div className=" mx-auto hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {/* <!-- Navbar menu content here --> */}
                            <li><NavLink to='/'>Home</NavLink></li>
                            {
                                user && <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                            }
                            <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
                            <li><NavLink to='/blogs'>Blogs</NavLink></li>


                            <li><NavLink to='/register'>Register</NavLink></li>
                            {
                                user ?
                                    <li><button onClick={logOut}>Sign Out</button></li>
                                    :
                                    <li><NavLink to='/login'>Login</NavLink></li>
                            }
                        </ul>
                    </div>
                    <Link to='/dashboard'>
                        <div className="avatar hidden lg:block">
                            <div className="w-8 rounded-full">
                                <img src={user && (user?.photoURL || img)} alt="" />
                            </div>
                        </div>
                        <p className='hidden lg:block ml-1 mr-4'>
                            {user && user?.displayName}
                        </p>
                    </Link>
                    <label for="my-drawer-3" className="btn btn-square block lg:hidden btn-ghost grid">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>

                </div>
                {/* <!-- Page content here --> */}
                {children}
            </div>
            <div className="drawer-side">
                <label for="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to='/'>Home</NavLink></li>
                    {
                        user && <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                    }
                    <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
                    <li><NavLink to='/blogs'>Blogs</NavLink></li>


                    <li><NavLink to='/register'>Register</NavLink></li>
                    {
                        user ?
                            <li><button onClick={logOut}>Sign Out</button></li>
                            :
                            <li><NavLink to='/login'>Login</NavLink></li>
                    }

                </ul>


            </div>

        </div>
    );
};

export default Navbar;