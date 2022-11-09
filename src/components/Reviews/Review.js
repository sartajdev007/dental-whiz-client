import React from 'react';

const Review = ({ review }) => {
    // const { name, userImg, review } = review

    return (
        <div className="card w-96 bg-teal-500 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={review.userImg} alt="Shoes" className="border-2 border-fuchsia-300 rounded-full w-36" />
            </figure>
            <div className="card-body items-center text-center">
                <p className='text-xl text-white'>"{review.review}"</p>
                <h2 className="card-title font-sans font-semibold">-{review.name}</h2>
            </div>
        </div>
    );
};

export default Review;