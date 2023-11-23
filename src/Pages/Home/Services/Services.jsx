import React from 'react';
import icons1 from '../../../assets/icons/Group 1372.png'
import icons2 from '../../../assets/icons/Group 1373.png'
import icons3 from '../../../assets/icons/Group 1374.png'
const Services = () => {
    return (
        <div className='my-10 w-full'>
            <h1 className='text-4xl font-bold text-center'>Our Awesome <span className='text-red-600'>Services</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
                <div className="card bg-base-100 shadow-xl text-center">
                    <div className="card-body flex items-center justify-center">
                        <img className='w-1/5 text-center' src={icons1} alt="" />
                        <h2 className="card-title">Anti Age Face Treatment</h2>
                        <span className='text-red-500'>$199</span>
                        <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl text-center">
                    <div className="card-body flex items-center justify-center">
                        <img className='w-1/5' src={icons2} alt="" />
                        <h2 className="card-title">Anti Age Face Treatment</h2>
                        <span className='text-red-500'>$199</span>
                        <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl text-center">
                    <div className="card-body flex items-center justify-center">
                        <img className='w-1/5' src={icons3} alt="" />
                        <h2 className="card-title">Anti Age Face Treatment</h2>
                        <span className='text-red-500'>$199</span>
                        <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                    </div>
                </div>
            </div>
            <div className='mt-5 text-center'>
                <button className='text-white font-semibold bg-red-500 btn'>Explore More</button>
            </div>
        </div>
    );
};

export default Services;