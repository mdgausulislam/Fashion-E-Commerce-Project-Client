import React from 'react';
import { FaBars } from "react-icons/fa";
import './NavBar.css';
import logo from '../../../assets/logo.png'

const NavBar = () => {

    const navbar = <>
        <li><a>Home</a></li>
        <li><a>Our Portfolio</a></li>
        <li><a>Our Team</a></li>
        <li><a>Contact Us</a></li>
        <li><a>Support</a></li>
        <li><button className='bg-[#F63E7B] text-white px-8 lg:ml-4'>Log in</button></li>
    </>
    return (
        <div className="navbar fixed z-10 bg-base-100">
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