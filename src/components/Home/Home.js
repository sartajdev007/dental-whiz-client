import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Loader from '../Loader/Loader';
import Appointment from './Appointment';
import Banner from './Banner';
import Features from './Features';
import HomeServices from './HomeServices';




const Home = () => {
    const { loading } = useContext(AuthContext)
    useTitle('Home')
    if (loading) {
        return <Loader></Loader>
    }


    return (
        <div>
            <Banner></Banner>
            {/* service section */}
            <HomeServices></HomeServices>
            <Features></Features>
            {/* Appointment section */}
            <Appointment></Appointment>
        </div>
    );
};

export default Home;