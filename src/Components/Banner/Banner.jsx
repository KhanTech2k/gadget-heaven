// import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='bg-[#9538E2] p-10' >
            <div className='w-10/12 text-center'>
                <h2 className='text-5xl font-semibold'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <Link to='/dashboard'><button className='btn'>Shop Now</button></Link>
                </div>
        </div>
    );
};

export default Banner;