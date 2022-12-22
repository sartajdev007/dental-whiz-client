import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Service from './Service';
import { AuthContext } from '../../context/AuthProvider';
import Loader from '../Loader/Loader';

const Services = () => {
    const { loading } = useContext(AuthContext)
    const services = useLoaderData()
    useTitle('Services')

    if (loading) {
        return <Loader></Loader>
    }


    return (
        <div>
            <div className="hero h-96" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80")` }}>
                <div className="hero-overlay bg-opacity-60 bg-teal-700"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl">
                        <p className="mb-5 font-bold text-xl">Committed to your happiness</p>
                        <h1 className="mb-5 text-7xl font-bold underline underline-offset-8 decoration-fuchsia-700">Dental Services</h1>
                    </div>
                </div>
            </div>
            <div className='mt-10 mx-5'>
                <h1 className='text-5xl font-semibold'>Comprehensive Care, One <br /><span className='text-teal-600'>Expert Dentist</span></h1>
                <div className='grid grid-cols-1 justify-items-center md:grid-cols-3'>
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;