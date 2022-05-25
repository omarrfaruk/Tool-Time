import React from 'react';
import banner from '../../assests/images/tools.jpg'

const HomeBanner = () => {
    return (
        // <div class="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
        //     <div class="hero-overlay bg-opacity-30"></div>
        //     <div class="hero-content text-center text-neutral-content">
        //         <div className=''>
        //             <h1 class="mb-5 font-sans text-6xl font-bold uppercase">Customized Solutions</h1>
        //             <p className='text-3xl'>Choose, organise & customise</p>
        //             <p class="mb-5 text-3xl">Your tool Trolly</p>
        //             <button class="btn btn-primary">Get Started</button>
        //         </div>
        //     </div>
        // </div >
        <div
            className='bg-opacity-60'
            style=
            {{
                backgroundImage: `url(${banner})`,
                height: '90vh',
                width: '100%',
                backgroundSize: 'cover',

                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'

            }}
        >
            <div className='text-right text-white'>
                <h1 class="mb-5 font-sans text-6xl font-bold uppercase">Customized Solutions</h1>
                <p className='text-3xl'>Choose, organise & customise</p>
                <p class="mb-5 text-3xl">Your tool Trolly</p>
                <button class="btn btn-primary">Get Started</button>
            </div>
        </div>
    );
};

export default HomeBanner;