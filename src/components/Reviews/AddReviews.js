import React, { useContext, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddReviews = () => {
    const { user } = useContext(AuthContext)
    const [error, setError] = useState('')
    const service = useLoaderData()

    const handleAddReview = e => {
        e.preventDefault()
        const form = e.target
        const review = form.review.value
        const email = user?.email || 'unregistered'
        const userImg = user?.photoURL
        const name = user?.displayName
        const serviceId = service._id
        const newReview = { review, email, name, serviceId, userImg }

        // console.log(newReview)
        console.log(email)
        if (email !== 'unregistered') {
            console.log(email)
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
                        toast("Thanks For Your Review")
                    }
                })
                .catch(err => console.error(err))
        }
        else {
            toast('You have to login first')
            setError(`Please`)
        }
    }

    return (
        <form onSubmit={handleAddReview} className='mx-auto max-w-xl'>
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
                <textarea name="review" id="" cols="20" rows="3" className="textarea textarea-bordered"></textarea>
            </div>
            {error ? <div className='pt-5'>{error} <Link to='/login' className='font-semibold text-teal-500 hover:text-teal-400'>Login</Link> first</div> : null}
            <button type="submit" className='btn bg-teal-500 border-0 hover:bg-teal-400 mt-5'>Submit Review</button>
            <ToastContainer />
        </form>
    );
};

export default AddReviews;