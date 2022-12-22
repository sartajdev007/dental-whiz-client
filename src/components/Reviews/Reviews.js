import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Loader from '../Loader/Loader';
import { ServiceContext } from '../Services/ServiceDetails';
import Review from './Review';

const Reviews = ({ id }) => {
    const { added } = useContext(ServiceContext)
    const { loading } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://dental-whiz-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [added])

    if (loading) {
        return <Loader></Loader>
    }




    return (
        <div className='grid grid-cols-1 gap-3 md:grid-cols-3'>
            {
                reviews.filter(dt => dt.serviceId === id).length === 0 ?
                    <p className='text-2xl font-bold text-violet-600'>There are no reviews</p> :
                    reviews.filter(dt => dt.serviceId === id).map(review => <Review
                        key={review._id}
                        review={review}
                    >
                    </Review>)
            }
        </div>
    );
};

export default Reviews;