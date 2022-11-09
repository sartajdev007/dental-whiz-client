import React, { useState } from 'react';
import img from '../../assets/appointment/img-booking.png'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Appointment = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="hero w-full my-10">
            <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20 px-1">
                    <h1 className="text-4xl text-center font-bold">Book Appointement!</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Describe Your Problem</span>
                            </label>
                            <input type="text" name='text' placeholder="Your Problem" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Appointment Date</span>
                            </label>
                            <div className='text-start p-2 border-2'>
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <label htmlFor="my-modal-6" className="btn  bg-teal-500 border-0 hover:bg-teal-400">Book Us</label>
                        </div>
                    </form>
                    {/* modal */}
                    < input type="checkbox" id="my-modal-6" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Congratulations!</h3>
                            <p className="pt-4">You've a booking with us,See you soon!</p>
                            <div className="modal-action">
                                <label htmlFor="my-modal-6" className="btn  bg-teal-500 border-0 hover:bg-teal-400">Close</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;