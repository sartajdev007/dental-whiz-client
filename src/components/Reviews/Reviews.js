import React, { useEffect, useState } from 'react';

const Reviews = ({ service }) => {
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            {
                reviews.map(review => {
                    return if (review.serviceId === service._id) {

                    }
                })
            }
        </div>
    );
};

export default Reviews;