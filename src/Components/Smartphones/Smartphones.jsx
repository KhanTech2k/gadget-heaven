import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Smartphone from '../Smartphone/Smartphone';
import Category from '../Category/Category';
import Banner from '../Banner/Banner';

const Smartphones = () => {
    const gadgets = useLoaderData()
    const phones = gadgets.filter(phones=> phones.category==='Smartphones')
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-4xl font-semibold text-center'>Explore Cutting-Edge Gadgets</h2>
            <div className='flex gap-20'>
            <Category></Category>
            {
               phones.map(gadget=> <Smartphone gadget={gadget}></Smartphone>)
            }
        </div>
        </div>
    );
};

export default Smartphones;