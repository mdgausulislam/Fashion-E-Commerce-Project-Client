import React from 'react';
import SocialLink from '../Shared/SocialLink/SocialLink';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name)
                    .then(() => {
                        const saveUsers = { name: data.name, email: data.email }
                        axiosPublic.post('/users', saveUsers)
                            .then(res => {
                                if (res.data.insertedId) {
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "You sign Up successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
                    })


            })
            .catch(error => console.log(error.message))
    }
    const password = React.useRef({});
    password.current = watch('password', " ");

    const passwordMatch = (value) => value === password.current || 'password do not match';

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left md:w-1/2">
                    <h1 className="text-5xl font-bold">SignUp now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 max-w-sm w-full shadow-2xl bg-base-100 md:w-1/2">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name='name' {...register('name')} placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" {...register('email')} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input type="password" name='password'
                                {...register('password',
                                    {
                                        required: 'you must specify password', minLength: {
                                            value: 6,
                                            message: 'password must have at least 6 character '
                                        }
                                    })} placeholder="password" className="input input-bordered" required />
                            {errors.password && <p className='text-xs text-red-500'>{errors.password.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirmPassword'
                                {...register('confirmPassword', {
                                    required: 'you must confirm your password',
                                    validate: passwordMatch,
                                })}
                                placeholder="confirm password" className="input input-bordered" required />
                            {errors.confirmPassword && <p className='text-xs text-red-500'>{errors.confirmPassword.message}</p>}
                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' value="Sign Up" className="btn btn-primary" disabled={Object.keys(errors).length > 0} />
                        </div>
                    </form>
                    <p className='text-center'>Already have an account? <Link to='/login' className='underline text-blue-600'>Login</Link> </p>
                    <div className="divider"></div>
                    <SocialLink></SocialLink>
                </div>
            </div>
        </div>
    );
};

export default SignUp;