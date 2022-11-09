import React from 'react';

const MyReviews = () => {
    return (
        <div>
            <div className="hero h-96" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
                <div className="hero-overlay bg-opacity-60 bg-teal-700"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-7xl font-bold underline underline-offset-8 decoration-fuchsia-700">My Reviews</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReviews;