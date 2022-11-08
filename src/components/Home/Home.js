import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import { FaStar, FaStarHalfAlt, FaTooth } from 'react-icons/fa'
import ReactStars from 'react-rating-stars-component';



const Home = () => {
    const [services, setServices] = useState([])
    const sliceServices = services.slice(0, 3)

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])



    return (
        <div>
            <Banner></Banner>
            <div className='my-10 mx-5'>
                <div>
                    <h1 className='text-5xl text-teal-400 font-bold'>Determined to Bring <br /> <span className='text-fuchsia-600'>Happiness</span></h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    {
                        sliceServices.map((sliced, index) =>
                            <div key={sliced._id} className="card my-10 card-compact w-96 bg-base-100 shadow-xl">
                                <figure className='w-full max-h-64 relative'><img src={sliced.img} alt="" /></figure>
                                <div className='absolute top-56 right-10 bg-white p-3 shadow-xl'><FaTooth className='text-3xl text-pink-500'></FaTooth></div>
                                <div className="card-body">
                                    <h2 className="card-title">{sliced.name}</h2>
                                    <div className="card-actions justify-between">
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
                                        <button className="btn bg-fuchsia-500 border-0 hover:bg-fuchsia-400">See Details</button>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
                <button className='btn bg-teal-600 border-0'><Link to='/services'>More Services</Link></button>
            </div>
        </div>
    );
};

export default Home;