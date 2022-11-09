import React from 'react';
import { FaTeeth, FaTeethOpen, FaTooth } from 'react-icons/fa';

const Features = () => {
    return (
        <div>
            <div className='bg-fuchsia-400 text-white py-10 px-8 mb-10 rounded-xl shadow-2xl shadow-teal-300'>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className='flex flex-col md:flex-row'>
                        <div className='p-10'>
                            <FaTooth className='text-7xl'></FaTooth>
                        </div>
                        <div className='py-10'>
                            <p className='font-semibold text-xl text-start'>Providing The Best <br />Tooth Cleaning Service</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row'>
                        <div className='p-10'>
                            <FaTeeth className='text-7xl'></FaTeeth>
                        </div>
                        <div className='py-10'>
                            <p className='text-xl font-semibold text-start'>The Best <br /> Smile Therapy</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row'>
                        <div className='p-10'>
                            <FaTeethOpen className='text-7xl'></FaTeethOpen>
                        </div>
                        <div className='py-10'>
                            <p className='text-xl font-semibold text-start'>Most Advaned <br /> Tech In The City</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;