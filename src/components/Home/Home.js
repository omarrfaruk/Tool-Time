import React from 'react';
import HomeBanner from './HomeBanner';
import Reviews from './Reviews';
import Summary from './Summary';
import Tools from './Tools';
import Choose from './Choose';
import CustomerBase from './CustomerBase';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import HomeCarousel from './HomeCarousel';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Tools></Tools>
            <Choose></Choose>
            <Summary></Summary>
            <HomeCarousel></HomeCarousel>
            {/* <CustomerBase></CustomerBase> */}
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;