import React from 'react';
import Category from '../Category/Category';
import { useLoaderData } from 'react-router-dom';
import Headphone from '../Headphone/Headphone';
import Banner from '../Banner/Banner';

const Headphones = () => {
    document.title="Gadget Heaven | Headphones"
    const gadgets = useLoaderData();
    const hedphones = gadgets.filter(gadget => gadget.category === 'Headphones');
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-4xl font-semibold text-center -mt-16 lg:-mt-24'>Explore Cutting-Edge Gadgets</h2>
            <div className='flex flex-col lg:flex-row gap-10 my-16  lg:px-10'>
                <Category></Category>
                <div className='flex flex-col lg:grid  lg:grid-cols-3 gap-8'>
                {
                    hedphones.map(gadget => <Headphone key={gadget.product_id} gadget={gadget}></Headphone>)
                }
                </div>
            </div>
        </div>
    );
};

export default Headphones;