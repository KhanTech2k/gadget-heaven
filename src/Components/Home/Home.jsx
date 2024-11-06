import React, { useEffect } from 'react';
import Gadgets from '../Gadegts/Gadgets';
import Category from '../Category/Category';
import Banner from '../Banner/Banner';

const Home = () => {
    useEffect(()=>{
        document.title= "Gadget Heaven";
    },[]);
    return (
        <div >
            <Banner></Banner>
            <h2 className='text-4xl font-semibold text-center -mt-16 lg:-mt-24'>Explore Cutting-Edge Gadgets</h2>
            <div className='flex flex-col lg:flex-row gap-10 my-16  lg:px-10'>
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