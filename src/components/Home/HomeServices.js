import React, { useEffect, useState } from 'react';
import { FaStar, FaStarHalfAlt, FaTooth } from 'react-icons/fa'
import ReactStars from 'react-rating-stars-component';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const HomeServices = () => {
    const [services, setServices] = useState([])
    const sliceServices = services.slice(0, 3)

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-10 mx-5'>
            <div>
                <h1 className='text-5xl text-teal-400 font-bold'>Committed to Bring <br /> <span className='text-fuchsia-600'>Happiness</span></h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                {
                    sliceServices.map(sliced =>
                        <div key={sliced._id} className="card my-10 card-compact w-96 bg-base-100 shadow-xl shadow-purple-300">
                            <figure className='w-full max-h-64 relative'>
                                <PhotoProvider>
                                    <PhotoView src={sliced.img}>
                                        <img src={sliced.img} alt="" />
                                    </PhotoView>
                                </PhotoProvider>
                            </figure>
                            <div className='absolute top-56 right-10 bg-white p-3 shadow-xl'><FaTooth className='text-3xl text-pink-500'></FaTooth></div>
                            <div className="card-body">
                                <h2 className="card-title">{sliced.name}</h2>
                                <p className='text-start font-semibold text-teal-600'>${sliced.price}</p>
                                <p className='text-start'>
                                    {
                                        sliced.details.length > 100 ?
                                            <>
                                                {sliced.details.slice(0, 100) + '...'}
                                            </>

                                            :
                                            <>
                                                {sliced.details}
                                            </>
                                    }
                                </p>
                                <div className="card-actions flex justify-between">
                                    <div className='pt-3'>
                                        <ReactStars
                                            size={25}
                                            count={5}
                                            isHalf={true}
                                            value={sliced.ratings}
                                            edit={false}
                                            halfIcon={<FaStarHalfAlt></FaStarHalfAlt>}
                                            fullIcon={<FaStar></FaStar>}
                                            activeColor="#ffd700" />
                                    </div>
                                    <button className="btn bg-fuchsia-500 border-0 hover:bg-fuchsia-400">
                                        <Link to={`/services/${sliced._id}`}>See Details</Link></button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
            <button className='btn bg-teal-600 border-0'><Link to='/services'>All Services</Link></button>
        </div >
    );
};

export default HomeServices;