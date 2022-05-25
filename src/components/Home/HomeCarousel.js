import React from 'react';
import home from '../../assests/images/hand.jpg'
import home1 from '../../assests/images/home1.jpg'
import home2 from '../../assests/images/home2.jpg'
import home3 from '../../assests/images/home3.jpg'
import banner from '../../assests/images/home-back.jpg'

const HomeCarousel = () => {
    return (
        <div
            className='my-20'
            style=
            {{
                backgroundImage: `url(${banner})`,
                height: '55vh',
                width: '100%',
                backgroundSize: 'cover',

                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <div className='grid justify-center'>
                <div class="carousel carousel-center max-w-lg lg:m-10 ">
                    <div id="slide1" class="carousel-item relative w-full">
                        <img src={home} alt='' class="w-full" /> /
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" class="btn btn-circle">❮</a>
                            <a href="#slide2" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" class="carousel-item relative w-full">
                        <img src={home1} alt='' class="w-full" /> /
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" class="btn btn-circle">❮</a>
                            <a href="#slide3" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" class="carousel-item relative w-full">
                        <img src={home2} alt='' class="w-full" /> /
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" class="btn btn-circle">❮</a>
                            <a href="#slide4" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" class="carousel-item relative w-full">
                        <img src={home3} alt='' class="w-full" /> /
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" class="btn btn-circle">❮</a>
                            <a href="#slide1" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCarousel;