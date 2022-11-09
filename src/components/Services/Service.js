import React from 'react';
import { FaStar, FaStarHalfAlt, FaTooth } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    return (
        <div className="card my-10 card-compact w-96 bg-base-100 shadow-xl shadow-purple-400">
            <figure className='w-full max-h-64 relative'>
                <PhotoProvider>
                    <PhotoView src={service.img}>
                        <img src={service.img} alt="" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
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
                        {
                            service.ratings ? <ReactStars
                                size={25}
                                count={5}
                                isHalf={true}
                                value={service.ratings}
                                edit={false}
                                halfIcon={<FaStarHalfAlt></FaStarHalfAlt>}
                                fullIcon={<FaStar></FaStar>}
                                activeColor="#ffd700" />
                                :
                                <p>No Ratings</p>
                        }
                    </div>
                    <button className="btn bg-fuchsia-500 border-0 hover:bg-fuchsia-400"><Link to={`/services/${service._id}`}>See Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Service;