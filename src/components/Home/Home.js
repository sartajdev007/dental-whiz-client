import React from 'react';
import useTitle from '../../hooks/useTitle';
import Appointment from './Appointment';
import Banner from './Banner';
import HomeServices from './HomeServices';




const Home = () => {
    useTitle('Home')
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