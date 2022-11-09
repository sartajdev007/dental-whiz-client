import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const AddReviews = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData()

    const handleAddReview = e => {
        e.preventDefault()
        const form = e.target
        const review = form.review.value
        const email = user?.email || 'unregistered'
        const userImg = user?.photoURL || <FaUser></FaUser>
        const name = user?.displayName
        const serviceId = service._id
        const newReview = { review, email, name, serviceId, userImg }

        console.log(newReview)

        // if (email === null) {
        //     alert('You have to login first')
        // }

        fetch(`http://localhost:5000/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset()
                    alert('review added successfully')
                }
            })
            .catch(err => console.error(err))



    }

    return (
        <div>
            <form onSubmit={handleAddReview}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" defaultValue={user?.email} readOnly />
                </div>
                <div className="form-control">
                    <label className='label'>
                        <span className="label-text">Review</span>
                    </label>
                    <textarea name="review" id="" cols="40" rows="5" className="textarea textarea-bordered"></textarea>
                </div>
                <button type="submit" className='btn btn-ghost'>Submit Review</button>
            </form>
        </div>
    );
};

export default AddReviews;