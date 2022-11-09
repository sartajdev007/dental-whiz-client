import React from 'react';
import { FaStar, FaStarHalfAlt, FaTooth } from 'react-icons/fa';
import ReactStars from 'react-rating-stars-component';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const services = useLoaderData()


    return (
        <div>
            <div className="hero h-96" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80")` }}>
                <div className="hero-overlay bg-opacity-60 bg-teal-700"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <p className="mb-5 font-bold text-xl">Committed to your happiness</p>
                        <h1 className="mb-5 text-5xl font-bold underline underline-offset-8 decoration-fuchsia-700">Dental Care Services</h1>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <h1 className='text-5xl font-semibold'>Comprehensive Care, One <br /><span className='text-teal-600'>Expert Dentist</span></h1>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    {
                        services.map(service =>
                            <div key={service._id} className="card my-10 card-compact w-96 bg-base-100 shadow-xl">
                                <figure className='w-full max-h-64 relative'><img src={service.img} alt="" /></figure>
                                <div className='absolute top-56 right-10 bg-white p-3 shadow-xl'><FaTooth className='text-3xl text-pink-500'></FaTooth></div>
                                <div className="card-body">
                                    <h2 className="card-title">{service.name}</h2>
                                    <p className='text-start font-semibold text-teal-600'>${service.price}</p>
                                    <p className='text-start'>
                                        {
                                            service.details.length > 100 ?
                                                <>
                                                    {service.details.slice(0, 100) + '...'}
                                                </>

                                                :
                                                <>
                                                    {service.details}
                                                </>
                                        }
                                    </p>
                                    <div className="card-actions flex justify-between">
                                        <div className='pt-3'>
                                            <ReactStars
                                                size={25}
                                                count={5}
                                                isHalf={true}
                                                value={service.ratings}
                                                edit={false}
                                                halfIcon={<FaStarHalfAlt></FaStarHalfAlt>}
                                                fullIcon={<FaStar></FaStar>}
                                                activeColor="#ffd700" />
                                        </div>
                                        <button className="btn bg-fuchsia-500 border-0 hover:bg-fuchsia-400">See Details</button>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;