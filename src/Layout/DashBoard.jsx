import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBook, FaHome, FaShoppingCart } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import './DashBoard.css'

const DashBoard = () => {

    const isAdmin = true;
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-warning drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full space-y-4 bg-red-500">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>
                            <li><NavLink to='/'><FaHome /> Home </NavLink></li>
                            <li><NavLink to='/dashboard/allUsers'><FaShoppingCart /> All Users</NavLink></li>
                            <li><NavLink to='/dashboard/bookingList'><FaBook />Order List</NavLink></li>
                            <li><NavLink to='/dashboard/review'><MdReviews />Make Admin</NavLink></li>
                            <li><NavLink to='/dashboard/review'><MdReviews />Manage Services</NavLink></li>
                        </> : <>
                            <li><NavLink to='/'><FaHome /> Home </NavLink></li>
                            <li><NavLink to='/dashboard/booking'><FaShoppingCart /> Booking</NavLink></li>
                            <li><NavLink to='/dashboard/bookingList'><FaBook /> Booking list</NavLink></li>
                            <li><NavLink to='/dashboard/review'><MdReviews /> Review</NavLink></li>
                        </>
                    }


                </ul>

            </div>
        </div>
    );
};

export default DashBoard;