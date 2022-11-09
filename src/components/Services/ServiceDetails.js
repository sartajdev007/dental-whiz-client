import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AddReviews from '../Reviews/AddReviews';
import Reviews from '../Reviews/Reviews';

const ServiceDetails = () => {
    const service = useLoaderData()

    return (
        <div>
            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: `url(${service.banner_img})` }}>
                    <div className="hero-overlay bg-opacity-60 bg-teal-400"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-lg">
                            <h1 className="mb-5 text-6xl font-xl underline underline-offset-8 decoration-fuchsia-700">{service.name}</h1>
                            <p className="mb-5 py-4 font-semibold text-4xl border-2 border-fuchsia-600 bg-teal-700 bg-opacity-60">Repair and Strengthen Your Smile</p>
                        </div>
                    </div>
                </div>
                <div className='my-10 w-9/12 mx-auto align-middle'>
                    <h1 className='text-5xl font-bold'>What is <span className='text-teal-500 text-bold'>{service.name}</span>?</h1>
                    <p className='pt-6 text-start text-2xl font-semibold'>{service.details}</p>
                </div>
            </div>
            {/* Reviews section */}
            <div className='my-10 mx-5'>
                <h2 className='text-2xl'>Kind Words From Patients</h2>
                <Reviews service={service}></Reviews>
            </div>
            <div className='my-10 mx-5'>
                <h2 className='text-2xl'>We Welcome Your Opinion!</h2>
                <AddReviews service={service}></AddReviews>
            </div>
        </div>
    );
};

export default ServiceDetails;