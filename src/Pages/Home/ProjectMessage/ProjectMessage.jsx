import React from 'react';

const ProjectMessage = () => {
    return (
        <div className='lg:mx-72 mt-10'>
            <h1 className='font-bold text-4xl text-center'>Let us handle your <br />
                project, professionally.</h1>
            <form>
                <div className='md:flex gap-8 mt-10'>
                    <div className="form-control w-full">
                        <input type="text" placeholder="Full Name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <input type="text" placeholder="Last Name" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='md:flex gap-8 md:mt-10 mt-4'>
                    <div className="form-control w-full">
                        <input type="email" placeholder="Email Address" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <input type="number" placeholder="Phone Number" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="form-control md:my-10 my-4">
                    <textarea className="textarea textarea-bordered h-24 w-full" placeholder="your Message"></textarea>
                </div>
            </form>
            <div className='text-center mb-10'>
                <button className='bg-[#F63E7B] btn px-8 text-white'>Send Message</button>
            </div>
        </div>
    );
};

export default ProjectMessage;