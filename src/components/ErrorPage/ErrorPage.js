import React from 'react'
import { useRouteError } from 'react-router-dom';
import { FaDizzy } from "react-icons/fa"

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <>
            <div className='flex flex-col min-h-[700px] justify-center items-center'>
                <FaDizzy className='text-7xl'></FaDizzy>
                <h1 className='text-4xl'>Oops! There's something wrong!</h1>
                <br />
                {error && (
                    <div>
                        <p className='text-red-700 text-3xl font-semibold'>{error.statusText || error.message}</p>
                        <p>{error.status}</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default ErrorPage