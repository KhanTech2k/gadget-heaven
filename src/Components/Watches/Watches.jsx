import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';

const Watches = () => {
    document.title="Gadget Heaven | Watches"
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-4xl font-semibold text-center -mt-16 lg:-mt-24'>Explore Cutting-Edge Gadgets</h2>
            <div className='flex flex-col lg:flex-row gap-10 my-16  lg:px-10'>
                <Category></Category>
                <div className='flex justify-center items-center text-3xl'>
                <h2>No Products Available</h2>
                </div>
            </div>
        </div>
    );
};

export default Watches;