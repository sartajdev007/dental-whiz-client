import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';



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
            <div className='my-10'>
                <div>
                    <h1 className='text-5xl text-teal-400 font-bold'>Determined to Bring <br /> <span className='text-fuchsia-600'>Happiness</span></h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    {
                        sliceServices.map(sliced =>
                            <div className="card my-10 card-compact w-96 bg-base-100 shadow-xl">
                                <figure className='w-full max-h-64'><img src={sliced.img} alt="" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{sliced.name}</h2>
                                    <div className="card-actions justify-end">
                                        <button className="btn bg-fuchsia-500 border-0 hover:bg-fuchsia-400">See Details</button>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
                <button className='btn bg-teal-600'><Link to='/services'>More Services</Link></button>
            </div>
        </div>
    );
};

export default Home;