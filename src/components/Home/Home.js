import React from 'react';
import Footer from '../Shared/Footer';
import HomeBanner from './HomeBanner';
import Reviews from './Reviews';
import Summary from './Summary';
import Tools from './Tools';
import Choose from './Choose';
import CustomerBase from './CustomerBase';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Tools></Tools>
            <Choose></Choose>
            <Summary></Summary>
            <CustomerBase></CustomerBase>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;