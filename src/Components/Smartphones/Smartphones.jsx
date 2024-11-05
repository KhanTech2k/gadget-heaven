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
            <div className='flex gap-20 mt-16'>
            <Category></Category>
            <div className='grid grid-cols-3 gap-8'>
            {
               phones.map(gadget=> <Smartphone gadget={gadget}></Smartphone>)
            }
            </div>
        </div>
        </div>
    );
};

export default Smartphones;