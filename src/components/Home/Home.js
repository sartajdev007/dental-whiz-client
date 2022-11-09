import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import HomeServices from './HomeServices';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* service section */}
            <HomeServices></HomeServices>
            {/* Appointment section */}
            <Appointment></Appointment>
        </div>
    );
};

export default Home;