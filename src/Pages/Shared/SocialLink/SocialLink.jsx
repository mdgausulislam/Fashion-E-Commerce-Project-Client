import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';


const SocialLink = () => {
    const { googleSignIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const from = location.state?.from?.pathname || '/';
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const googleLogged = result.user;
                console.log(googleLogged);
                const saveUsers = { name: googleLogged.displayName, email: googleLogged.email }
                axiosPublic.post('/users', saveUsers)
                    .then(res => {
                        console.log(res.data);
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your gmail account login ",
                            showConfirmButton: false,
                            timer: 1500
                        });

                    })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);

            })
    }

    return (
        <div className='text-center mb-5'>
            <div className="join">
                <button onClick={handleGoogleLogin} className="btn join-item rounded-r-full bg-red-500"><FaGoogle /></button>
                <span className="border-2 rounded-e-xl placeholder-text flex items-center px-4">Continue With Google</span>
            </div>
        </div>
    );
};

export default SocialLink;