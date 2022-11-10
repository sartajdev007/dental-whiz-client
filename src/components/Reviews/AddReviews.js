import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ServiceContext } from '../Services/ServiceDetails';


const AddReviews = () => {
    const { setAdded } = useContext(ServiceContext)
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
        const time = new Date()
        const serviceName = service.name
        const newReview = { review, email, name, serviceId, userImg, serviceName, time }

        setAdded(false)
        if (email !== 'unregistered') {
            console.log(email)
            fetch(`https://dental-whiz-server.vercel.app/reviews`, {
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
                        setAdded(true)
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
        <div>
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
        </div>
    );
};

export default AddReviews;