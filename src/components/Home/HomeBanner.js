import React from 'react';
import banner from '../../assests/images/tools.jpg'
import './HomeBanner.css'

const HomeBanner = () => {
    return (
        <div
            style=
            {{
                backgroundImage: `url(${banner})`,
                height: '85vh',
                width: '100%',
                backgroundSize: 'cover',

                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <div className=' lg:pt-28 p-3 pt-6 lg:pl-96 text-white'>
                <h1
                    data-aos='fade-right'
                    data-aos-duration='1000'
                    data-aos-delay='200'
                    className="mb-5 text-4xl  lg:text-7xl font-bold uppercase">Customized Solutions</h1>
                <p
                    data-aos='fade-right'
                    data-aos-delay='400'
                    data-aos-duration='900'
                    className='lg:text-3xl text-xl'>Choose, organise & customise</p>
                <p
                    data-aos='fade-right'
                    data-aos-delay='400'
                    data-aos-duration='900'
                    className="mb-5 lg:text-3xl text-xl">Your tool Trolly</p>
                <button
                    data-aos='zoom-in'
                    data-aos-delay='1300'
                    className="btn px-5 bg-black">Get Started</button>
            </div>
        </div>
    );
};

export default HomeBanner;