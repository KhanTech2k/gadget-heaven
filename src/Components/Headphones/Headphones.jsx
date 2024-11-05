import React from 'react';
import Category from '../Category/Category';
import { useLoaderData } from 'react-router-dom';
import Headphone from '../Headphone/Headphone';
import Banner from '../Banner/Banner';

const Headphones = () => {
    const gadgets = useLoaderData();
    const hedphones = gadgets.filter(gadget => gadget.category === 'Headphones');
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-4xl font-semibold text-center'>Explore Cutting-Edge Gadgets</h2>
            <div className='flex gap-20 mt-16'>
                <Category></Category>
                <div className='grid grid-cols-3 gap-8'>
                {
                    hedphones.map(gadget => <Headphone gadget={gadget}></Headphone>)
                }
                </div>
            </div>
        </div>
    );
};

export default Headphones;