import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReviewCard from './MyReviewCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([])
    useTitle('My Reviews')
    useEffect(() => {
        fetch('https://dental-whiz-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                setMyReviews(data)
            })
    }, [])


    const handleDelete = _id => {
        const proceed = window.confirm('Are you sure to delete this review?')
        if (proceed) {
            fetch(`https://dental-whiz-server.vercel.app/reviews/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast('Review Deleted')
                        const remaining = myReviews.filter(rvs => rvs._id !== _id)
                        setMyReviews(remaining)
                    }
                })
        }
    }

    return (
        <div>
            <div className="hero h-96" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
                <div className="hero-overlay bg-opacity-60 bg-teal-700"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-7xl font-bold underline underline-offset-8 decoration-fuchsia-700">My Reviews</h1>
                    </div>
                </div>
            </div>
            <div className='my-10 mx-5 grid grid-cols-1 md:grid-cols-3 gap-2'>
                {
                    myReviews.filter(rv => rv.email === user.email).length === 0 ?
                        <p className='text-2xl font-bold text-violet-600'>You have no reviews</p>
                        :
                        myReviews.filter(rv => rv.email === user.email).map(rv => <MyReviewCard
                            key={rv._id}
                            myRv={rv}
                            handleDelete={handleDelete}
                        >
                        </MyReviewCard>
                        )
                }
                <ToastContainer />
            </div>
        </div>
    );
};

export default MyReviews;