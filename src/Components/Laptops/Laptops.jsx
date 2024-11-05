import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Category from '../Category/Category';
import Laptop from '../Laptop/Laptop';
import Banner from '../Banner/Banner';

const Laptops = () => {
    const gadgets = useLoaderData();
    const laptops= gadgets.filter(gadget=>  gadget.category === 'Laptops');
    return (
        
        <div>
            <Banner></Banner>
            <h2 className='text-4xl font-semibold text-center'>Explore Cutting-Edge Gadgets</h2>
            <div className='flex gap-20'>
            <Category></Category>
            {
               laptops.map(gadget=> <Laptop gadget={gadget}></Laptop>)
            }
        </div>
        </div>
    );
};

export default Laptops;