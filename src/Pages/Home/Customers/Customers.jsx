import React from 'react';
import image1 from '../../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'

const Customers = () => {
    return (
        <div className='lg:mx-28 my-20'>
            <div className="card lg:card-side bg-base-100 shadow-xl gap-20">
                <figure><img className='w-[580px]' src={image1} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="text-4xl font-bold">Let us handle your <br /> screen <span className='text-orange-500 mb-5'>Professionally.</span></h2>
                    <p>With well written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general ipsum. <br />Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Purus commodo ipsum.</p>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='font-bold text-4xl text-orange-600'>500+</h1>
                            <p>Happy Customer</p>
                        </div>
                        <div>
                            <h1 className='font-bold text-4xl text-orange-500'>16+</h1>
                            <p>Happy Customer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customers;