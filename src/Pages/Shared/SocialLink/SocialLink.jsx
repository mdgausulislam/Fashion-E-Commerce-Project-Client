import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';

const SocialLink = () => {
    const { googleSignIn } = useAuth();
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const googleLogged = result.user;
                console.log(googleLogged);
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