import React from 'react';
import banner1 from '../../assets/hero/hero-1.jpg'
import banner2 from '../../assets/hero/hero-2.jpg'
import banner3 from '../../assets/hero/hero-3.jpg'

const Home = () => {
    return (
        <div>
            {/* carousel section */}
            <div className="carousel relative w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full" alt='' />
                    <div className="hero-content absolute text-start text-neutral-content flex align-middle transform -translate-y-1/2 left-20 top-1/2">
                        <div className="max-w-md">
                            <p className='mb-5'>Welcome to the Dental Whiz Care</p>
                            <h1 className="mb-5 text-5xl font-bold">Smile To Enjoy Life</h1>
                            <p className="mb-5">We Are Commited to Put A Smile On Fac</p>
                            <button className="btn bg-fuchsia-500 border-0 hover:bg-fuchsia-400">See Services</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-ghost">❮</a>
                        <a href="#slide2" className="btn btn-ghost">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-ghost">❮</a>
                        <a href="#slide3" className="btn btn-ghost">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-ghost">❮</a>
                        <a href="#slide1" className="btn btn-ghost">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;