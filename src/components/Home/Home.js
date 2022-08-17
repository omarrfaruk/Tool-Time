import React from 'react';
import HomeBanner from './HomeBanner';
import Reviews from './Reviews';
import Summary from './Summary';
import Tools from './Tools';
import Choose from './Choose';
import Footer from '../Shared/Footer';
import HomeCarousel from './HomeCarousel';
import Featured from './Featured';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Summary></Summary>
            <Tools></Tools>
            <Featured />
            <Choose></Choose>
            <HomeCarousel></HomeCarousel>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;