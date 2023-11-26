import { Rating } from '@smastrom/react-rating';
import React, { useEffect, useState } from 'react';
import '@smastrom/react-rating/style.css'
import './Testimonial.css'

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage,] = useState(3);


    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const totalPages = Math.ceil(reviews.length / itemsPerPage);
    const pageNumber = [...Array(totalPages).keys()];

    const indexLastReview = (currentPage + 1) * itemsPerPage;
    const indexFirstReview=indexLastReview-itemsPerPage;
    const currentReview=reviews.slice(indexFirstReview,indexLastReview);

    const handlePageChange=(pageNumber)=>{
        setCurrentPage(pageNumber);
    }
    return (
        <div>
            <h1 className='text-4xl font-bold text-center'>Testimonials</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 my-8 gap-4 lg:mx-10'>
                {
                    currentReview.map(review => <div key={review._id}>
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body space-y-6">
                                <div className='flex gap-5'>
                                    <div>
                                        <img className='w-16' src={review.image} alt="" />
                                    </div>
                                    <div>
                                        <h1 className='font-bold text-xl'>{review.name}</h1>
                                        <p className='font-semibold text-md'>{review.title}</p>
                                    </div>
                                </div>
                                <p>{review.text}</p>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>)
                }
            </div>

            <div className='pagination'>
                <p>CurrentPage:{currentPage} and itemsPerPage:{itemsPerPage}</p>
                {
                    pageNumber.map(number => <button
                        key={number}
                        className={currentPage === number ? 'selected' : ''}
                        onClick={() => handlePageChange(number)}
                    >{number + 1}</button>)
                }
            </div>
        </div>
    );
};

export default Testimonial;