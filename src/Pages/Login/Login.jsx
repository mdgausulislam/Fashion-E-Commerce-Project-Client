import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLink from '../Shared/SocialLink/SocialLink';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { signIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const onSubmit = (data) => {
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })

            })
            .catch(error => console.log(error.message))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left md:w-1/2">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 max-w-sm w-full shadow-2xl bg-base-100 md:w-1/2">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' {...register('email')} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' {...register('password')} placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-blue-600 underline">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type='Submit' value='Login' className="btn btn-primary" />
                        </div>
                    </form>
                    <p className='text-center'>Don’t have an account? <Link to='/signUp' className='underline text-blue-600'>Create an account</Link> </p>
                    <div className="divider"></div>
                    <SocialLink></SocialLink>
                </div>
            </div>
        </div>
    );
};

export default Login;