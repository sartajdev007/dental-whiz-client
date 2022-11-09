import React, { useContext } from 'react';
import { FaTooth, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }


    const navMenu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/blogs'>Blog</Link></li>
        {
            user?.uid &&
            <>
                <li><Link to='/myreviews'>My Reviews</Link></li>
                <li><Link to='/addservices'>Add Services</Link></li>
            </>
        }
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navMenu}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-2xl">
                    <span className='pr-1'><FaTooth className='text-fuchsia-500 text-bold'></FaTooth></span><span className='text-teal-500 font-bold'>Dental</span><span className='text-fuchsia-500 font-semibold'>Whiz</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 bg-base">
                    {navMenu}
                </ul>
            </div>
            <div className="navbar-end">
                <>
                    {
                        user?.uid ?
                            <>
                                <span className='text-black pr-3'>{user?.displayName}</span>
                                {
                                    user?.photoURL ?
                                        <img title={user.displayName} className='mr-2 rounded-full' style={{ height: '40px' }} src={user?.photoURL} alt='' />
                                        :
                                        <>
                                            <FaUserAlt className='mr-2 text-teal-500'></FaUserAlt>
                                        </>
                                }
                                <button onClick={handleLogOut} className="btn bg-red-600 border-0">Log Out</button>
                            </>
                            :
                            <>
                                <Link to='/login' className="btn bg-fuchsia-500 border-0 hover:bg-fuchsia-400 mr-2">Login</Link>
                                <Link to='/register' className="btn bg-teal-600 border-0 hover:bg-teal-500">Sign Up</Link>
                            </>
                    }
                </>


            </div>
        </div>
    );
};

export default Header;