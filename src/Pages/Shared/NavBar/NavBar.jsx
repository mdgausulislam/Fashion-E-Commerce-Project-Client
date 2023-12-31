import React from 'react';
import { FaBars } from "react-icons/fa";
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const NavBar = () => {
    const { user, logOut } = useAuth();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error.message))
    }

    const navbar = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/dashboard'>Our Portfolio</Link></li>
        <li><Link to='/ourTeam'>Our Team</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
        <li><Link to='/support'>Support</Link></li>
        <li>
            {
                user ? <>
                    <button onClick={handleLogOut} className='bg-[#F63E7B] text-white px-8 lg:ml-4'>Log Out</button>
                </> : <>
                    <Link to='/login' className='bg-[#F63E7B] text-white px-8 lg:ml-4'>Login</Link>
                </>
            }
        </li>

    </>
    return (
        <div className="navbar fixed hover:text-orange-500 z-10 bg-opacity-50 max-w-screen text-white bg-black">
            <div className="navbar-start w-full">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <FaBars />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold">
                        {navbar}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img className='w-28' src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                    {navbar}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;