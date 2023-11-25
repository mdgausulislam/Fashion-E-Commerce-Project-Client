import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
console.log(stripePromise);

const Booking = () => {
    return (
        <div className='w-full'>
            <form>
                <div className='mx-10 md:mx-52 space-y-6 mt-10'>
                    <input type="text" placeholder="Name" className="input input-bordered input-secondary w-full " /> <br />
                    <input type="email" placeholder="Email" className="input input-bordered input-secondary w-full" /><br />
                    <select className="select select-bordered w-full">
                        <option disabled selected>Select Item </option>
                        <option>Anti Age Face Treatment</option>
                        <option>Hair Color & Styleing</option>
                        <option>Skin Care Treatment</option>
                    </select>
                    <Elements stripe={stripePromise}>
                        <CheckOutForm />
                    </Elements>
                </div>
            </form>
        </div>
    );
};

export default Booking;