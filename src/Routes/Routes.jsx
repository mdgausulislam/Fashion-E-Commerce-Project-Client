import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import OurTeam from "../Pages/OurTeam/OurTeam";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../Layout/DashBoard";
import Booking from "../Pages/DashBoard/Booking/Booking";
import ServiceList from "../Pages/DashBoard/ServiceList/ServiceList";
import Review from "../Pages/DashBoard/Review/Review";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/ourTeam',
                element: <PrivateRoutes><OurTeam></OurTeam></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard', // <-- Update path to '/dashboard'
        element: <DashBoard></DashBoard>,
        children: [
            {
                path: 'booking', // <-- This should match the link '/dashboard/booking'
                element: <Booking></Booking>
            },
            {
                path: 'bookingList',
                element: <ServiceList></ServiceList>
            },
            {
                path: 'review',
                element: <Review></Review>
            }
        ]
    },
]);