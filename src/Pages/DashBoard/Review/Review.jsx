import React from 'react';

const Review = () => {
    return (
        <div className='w-full'>
            <form>
                <div className='mx-10 md:mx-52 space-y-6 mt-10'>
                    <input type="text" placeholder="Your Name" className="input input-bordered input-secondary w-full " /> <br />
                    <input type="text" placeholder="Company's name Designation" className="input input-bordered input-secondary w-full" /><br />
                    <textarea className="textarea textarea-bordered w-full" placeholder="Bio"></textarea>
                </div>
                <div className='text-center mt-4'>
                    <input className='btn btn-secondary px-10' type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default Review;