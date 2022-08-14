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
                <div className="w-full navbar bg-transparent my-3">
                    <div className="flex-none lg:hidden">
                        <label for="my-drawer-2" className="btn btn-ghost btn-circle drawer-button lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                    </div>
                    <div className="px-2 mx-2 text-3xl font-bold font-serif uppercase">
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
// import React, { useState } from 'react';
// import { CgMenuGridR } from 'react-icons/cg'
// import { AiOutlineClose } from 'react-icons/ai'
// import Typed from 'react-typed'


// const Navbar = () => {

//     const [nav, setNav] = useState(false)

//     const handleNav = () => {
//         setNav(!nav)
//     }

//     return (
//         <div className='flex items-center justify-between h-16 max-w-[1240px] mx-auto px-3 text-white uppercase'>

//             <h1 className='md:block w-full font-bold text-3xl '>
//                 <Typed strings={['tailwind.']} typeSpeed={100} backSpeed={100} backDelay={1000} loop />
//             </h1>
//             <ul className='hidden md:flex'>
//                 <li className='ml-4 '>Home</li>
//                 <li className='ml-4 '>Products</li>
//                 <li className='ml-4 '>Dashboard</li>
//                 <li className='ml-4 '>Contact</li>
//                 <li className='ml-4 '>About</li>
//             </ul>

//             <div onClick={handleNav} className='block md:hidden'>
//                 {
//                     !nav ? <AiOutlineClose size={25} /> : <CgMenuGridR size={30} />
//                 }
//             </div>
//             <div className={!nav ? 'fixed md:hidden bg-[rgb(20,18,18)] z-10 left-0 top-0 h-full w-[60%] border-r border-r-gray-600 ease-in-out duration-500' : 'fixed left-[-100%]'}>
//                 <h1 className='w-full font-bold text-3xl m-4'>
//                     <Typed strings={['tailwind.']} typeSpeed={100} backSpeed={100} backDelay={1000} loop />
//                 </h1>
//                 <ul className=''>
//                     <li className=' p-4 border-b border-gray-600'>Home</li>
//                     <li className=' p-4 border-b border-gray-600'>Products</li>
//                     <li className=' p-4 border-b border-gray-600'>Dashboard</li>
//                     <li className=' p-4 border-b border-gray-600'>Contact</li>
//                     <li className=' p-4'>About</li>
//                 </ul>
//             </div>

//         </div>
//     );
// };

// export default Navbar;