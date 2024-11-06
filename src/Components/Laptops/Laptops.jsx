import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Category from '../Category/Category';
import Laptop from '../Laptop/Laptop';
import Banner from '../Banner/Banner';

const Laptops = () => {
    document.title="Gadget Heaven | Laptops"
    const gadgets = useLoaderData();
    const laptops = gadgets.filter(gadget => gadget.category === 'Laptops');
    return (

        <div>
            <Banner></Banner>
            <h2 className='text-4xl font-semibold text-center -mt-16 lg:-mt-24'>Explore Cutting-Edge Gadgets</h2>
            <div className='flex flex-col lg:flex-row gap-10 my-16  lg:px-10'>
                <Category></Category>
                <div className='flex flex-col lg:grid  lg:grid-cols-3 gap-8' >
                    {
                        laptops.map(gadget => <Laptop key={gadget.product_id} gadget={gadget}></Laptop>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Laptops;