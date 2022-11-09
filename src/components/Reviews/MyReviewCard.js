import React from 'react';
import { FaTrash } from 'react-icons/fa';

const MyReviewCard = ({ review }) => {

    return (
        <div className="card w-96 bg-teal-600 text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Service: {review.serviceName}</h2>
                <p>Review:"{review.review}"</p>
                <p>Time: {review.time}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-fuchsia-500 border-0">Update</button>
                    <button className="btn bg-red-400 border-0"><FaTrash></FaTrash></button>
                </div>
            </div>
        </div>
    );
};

export default MyReviewCard;