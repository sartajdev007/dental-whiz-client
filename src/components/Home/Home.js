import React from 'react';
import Banner from './Banner';
import HomeServices from './HomeServices';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* service section */}
            <HomeServices></HomeServices>
        </div>
    );
};

export default Home;