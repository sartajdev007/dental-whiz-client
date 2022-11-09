import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import img from '../../assets/login/login.png'

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                handleUpdateUserProfile(name, photoURL)
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(err => console.log(err))
    }
    return (
        <div className="hero w-full my-10">
            <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20 px-1">
                    <h1 className="text-5xl text-center font-bold">Sign Up!</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Photo Url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-teal-500 border-0 hover:bg-teal-400" type="submit" value="Sign Up" />
                        </div>
                        <p className='text-red-500 font-semibold'>
                            {error}
                        </p>
                    </form>

                    <p className='text-center'>Already Joined?! <Link className='text-teal-500 font-bold' to='/login'>Sign In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;