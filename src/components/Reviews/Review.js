import React from 'react';
import moment from 'moment'

const Review = ({ review }) => {

    return (
        <div className="card w-96  bg-teal-500  shadow-xl">
            <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={review.userImg} alt='user' />
                </div>
            </div>
            <div className="card-body">
                <p className='text-xl text-white'>"{review.review}"</p>
                <h2 className="card-title italic font-semibold">-{review.name}</h2>
                <p>{moment(review.time).fromNow()}</p>
            </div>
        </div>
    );
};

export default Review;