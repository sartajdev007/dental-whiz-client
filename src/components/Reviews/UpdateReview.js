import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
    const storedReview = useLoaderData()
    const [review, setReview] = useState(storedReview)

    const handleUpdateReview = event => {
        event.preventDefault();
        fetch(`http://localhost:5000/reviews/${storedReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Review updated')
                }
            })
    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...review }
        newReview[field] = value;
        setReview(newReview);
    }

    return (
        <div>
            <div className="hero h-96 bg-teal-700 bg-opacity-80" >
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-5xl font-bold underline underline-offset-8 decoration-fuchsia-700">Update Review for:</h1>
                        <p className='mb-5 py-4 font-semibold text-3xl border-2 border-fuchsia-600 bg-teal-700 bg-opacity-60'>
                            {storedReview.serviceName}
                        </p>
                    </div>
                </div>
            </div>
            <div className='my-10 mx-5'>
                <form onSubmit={handleUpdateReview}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold">Review</span>
                        </label>
                        <textarea onChange={handleInputChange} defaultValue={storedReview.review} type="text" name='review' placeholder='Review' cols="20" rows="3" className="textarea textarea-bordered" required />
                    </div>
                    <button type="submit" className='btn bg-teal-500 border-0 mt-5 hover:bg-teal-400 '>Update Review</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateReview;