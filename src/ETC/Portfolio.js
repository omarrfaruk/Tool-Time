import React from 'react';
import self from '../assests/images/self.jpg'
import project1 from '../assests/images/project1.png'
import project2 from '../assests/images/project2.png'

const Portfolio = () => {
    return (
        <div>
            <div
                className='mt-5'
                style=
                {{
                    backgroundImage: `url(${self})`,
                    height: '80vh',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div style={{ paddingTop: '140px', paddingLeft: '200px' }}>
                    <p className='text-3xl'><em>Hey, I'm</em></p>
                    <h1
                        style={{ fontFamily: ' poppins', color: 'rgba(100, 107, 109, 0.824)' }}
                        className='text-5xl font-bold'>
                        <strong>OMAR FARUK</strong>
                    </h1>
                    <p className='text-xl mt-4'>I am a frontend  developer from</p>
                    <p className='text-xl'>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div class="mt-40 bg-base-100 grid grid-cols-1 lg:grid-cols-2">
                <div className='lg:mx-32 mx-5'>
                    <h1 class="text-3xl font-bold">About Me</h1>
                    <p class="py-6">Hello! My name is Omar Faruk and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to try web designing — that taught me a lot about HTML & CSS!</p>
                </div>
                <div className='lg:mx-32 mx-5  lg:mt-52'>
                    <h1 class="text-3xl font-bold">Objective</h1>
                    <p class="py-6">Looking for opportunities to incorporate my skills and training to help the company grow. I am looking forward to roles that will help me realise my potential by exploring the various aspects of this field.</p>
                </div>
            </div>
            <div class="mt-20 bg-base-100 grid mb-24 grid-cols-1 lg:grid-col-2">
                <div className='lg:mx-10 mx-5'>
                    <h1 class="text-3xl mb-5 font-bold">Recent Project</h1>
                    <p><strong className='text-xl'>Hiking Gears</strong>(full Stack):
                        <a className='text-blue-500' href="https://hiking-gears-518d1.web.app/"> Live Link</a> ||
                        <a className='text-blue-500' href="https://github.com/omarrfaruk/Hiking-Gears"> Client Side Code </a>||
                        <a className='text-blue-500' href="https://github.com/omarrfaruk/Hiking-Gears-server"> Server Side Code </a>

                    </p>
                    <p> It's a MERN stack Hiking Gears stocking website with a dynamic service section. Users can Stock their Product.</p>
                    <p className='my-2'>* <strong>Technology Used:</strong> JavaScript, React, Node, Express, MongoDB,, React Bootstrap, Heroku & Netlify.
                    </p>
                    <p>* Firebase Authentication, Private Routing</p>
                </div>
                <div className='lg:ml-80 mx-5 mt-20'>
                    <img src={project1} alt="" />
                </div>
            </div>
            <div class="mt-20 bg-base-100 grid mb-20 grid-cols-1 lg:grid-col-2">
                <div className='lg:mx-10 mx-5'>
                    <h1 class="text-3xl mb-5 font-bold">Recent Project</h1>
                    <p><strong className='text-xl'>Art By Mahdi</strong>(front-end):
                        <a className='text-blue-500' href="https://art-by-mahdi-ki.web.app/"> Live Link</a> ||
                        <a className='text-blue-500' href="https://github.com/omarrfaruk/Art-by-mahdi"> Client Side Code </a>

                    </p>
                    <p> It’s a frond-end Art Gallery Application </p>
                    <p className='my-2'>* <strong>Technology Used:</strong>JavaScript, React, React Bootstrap, React Router & Firebase Hosting.
                    </p>
                    <p>* Firebase Authentication, Private Routing</p>
                </div>
                <div className='lg:ml-80 mx-5 mt-20'>
                    <img src={project2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;       