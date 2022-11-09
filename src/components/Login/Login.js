import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import img from '../../assets/login/login.png'
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const { logIn, googleLogin } = useContext(AuthContext)
    const [error, setError] = useState('')
    useTitle('login')
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setError('')
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="hero w-full my-10">
            <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20 px-1">
                    <h1 className="text-5xl text-center font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-teal-500 border-0 hover:bg-teal-400" type="submit" value="Login" />
                        </div>
                        <div className="form-control mt-6">
                            <input onClick={handleGoogleLogin} className="btn bg-teal-500 border-0 hover:bg-teal-400" type="button" value="Login With Google" />
                        </div>
                        <p className='text-red-500 font-semibold'>
                            {error}
                        </p>
                    </form>

                    <p className='text-center'>Haven't Joined Yet?! <Link className='text-teal-500 font-bold' to='/register'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;