import React, { useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyReviewCard = ({ myRv, handleDelete }) => {
    const { _id, review, time, serviceName } = myRv
    return (
        <div className="card w-96 bg-teal-600 text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Service: {serviceName}</h2>
                <p>Review:"{review}"</p>
                <p>Time: {time}</p>
                <div className="card-actions justify-end">
                    <Link to={`/updatereview/${myRv._id}`}><button className="btn bg-fuchsia-500 border-0">Update</button></Link>
                    <button onClick={() => handleDelete(_id)} className="btn bg-red-400 border-0"><FaTrash></FaTrash></button>
                </div>
            </div>
        </div>
    );
};

export default MyReviewCard;