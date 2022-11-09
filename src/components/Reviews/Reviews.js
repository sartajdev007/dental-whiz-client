import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            {
                reviews.map(review => <Review
                    key={review._id}
                    review={review}
                >
                </Review>)
            }
        </div>
    );
};

export default Reviews;