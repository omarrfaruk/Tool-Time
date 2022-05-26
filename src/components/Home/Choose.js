import React from 'react';
import divider from '../../assests/images/Ozar_O2-1.png'
import idea from '../../assests/images/idea.png'
import quality from '../../assests/images/quality.png'
import support from '../../assests/images/support.png'

const choose = () => {
    return (
        <div className='px-10'>
            <div className="text-center text-2xl pt-11">Why Choose Us</div>
            <div className='flex  justify-center'>
                <img src={divider} alt="" />
            </div>
            <div className='my-12 grid grid-cols-1 lg:grid-cols-3 gap-20 '>
                <div>
                    <div className='flex justify-center'>
                        <img src={idea} alt="" />
                    </div>
                    <div className='text-center'>
                        <p className='text-xl'>Expertise & Innovation</p>
                        <p>Expertise & Innovation
                            Since 1978 weve been supplying the highest quality tools to a variety of specialist markets.</p>
                    </div>
                </div>
                <div className=''>
                    <div className='flex justify-center'>
                        <img src={quality} alt="" />
                    </div>
                    <div className=' text-center'>
                        <p className='text-xl'>Quality</p>
                        <p>We have developed a culture of continuous improvement. We give guarantee against any manufacturing defect.</p>
                    </div>
                </div>
                <div className=''>
                    <div className='flex justify-center '>
                        <img src={support} alt="" />
                    </div>
                    <div className=' text-center'>
                        <p className='text-xl'>Service & Support</p>
                        <p>We have invested heavily to ensure that our products, processes and customer service are second to none.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default choose;