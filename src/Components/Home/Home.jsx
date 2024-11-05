import React from 'react';
import Gadgets from '../Gadegts/Gadgets';
import Category from '../Category/Category';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <h2 className='text-4xl font-semibold text-center'>Explore Cutting-Edge Gadgets</h2>
            <div className='flex'>
                <div>
                    <Category></Category>
                </div>
                <div>
                    <Gadgets></Gadgets>
                </div>
            </div>
        </div>
    );
};

export default Home;