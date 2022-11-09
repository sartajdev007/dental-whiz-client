import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import banner1 from '../../assets/hero/hero-1.jpg'
import banner2 from '../../assets/hero/hero-2.jpg'
import banner3 from '../../assets/hero/hero-3.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel relative w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full" alt='' />
                    <div className="hero-content absolute text-start text-neutral-content flex align-middle transform -translate-y-1/2 left-20 top-1/2">
                        <div className="max-w-md">
                            <p className='mb-2 text-2xl text-fuchsia-500 font-semibold'>Welcome to the Dental Whiz Care</p>
                            <h1 className="mb-6 font-sans text-8xl font-bold text-teal-600">Special Personalized Care</h1>
                            <button className="btn bg-fuchsia-500 border-0 hover:bg-fuchsia-400">See Services <span className='ml-1 pt-1/5'><FaArrowRight></FaArrowRight></span></button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-ghost">❮</a>
                        <a href="#slide2" className="btn btn-ghost">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full" alt='' />
                    <div className="hero-content absolute text-start text-neutral-content flex align-middle transform -translate-y-1/2 left-20 top-1/2">
                        <div className="max-w-md">
                            <p className='mb-2 text-2xl text-fuchsia-500 font-semibold'>Welcome to the Dental Whiz Care</p>
                            <h1 className="mb-6 font-sans text-8xl font-bold text-teal-600">Smile To Enjoy Life</h1>
                            <button className="btn bg-fuchsia-500 border-0 hover:bg-fuchsia-400">See Services</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-ghost">❮</a>
                        <a href="#slide3" className="btn btn-ghost">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full" alt='' />
                    <div className="hero-content absolute text-start text-neutral-content flex align-middle transform -translate-y-1/2 left-20 top-1/2">
                        <div className="max-w-md">
                            <p className='mb-2 text-2xl text-fuchsia-500 font-semibold'>Welcome to the Dental Whiz Care</p>
                            <h1 className="mb-6 font-sans text-8xl font-bold text-teal-600">Eat What You Want</h1>
                            <button className="btn bg-fuchsia-500 border-0 hover:bg-fuchsia-400">See Services</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-ghost">❮</a>
                        <a href="#slide1" className="btn btn-ghost">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;