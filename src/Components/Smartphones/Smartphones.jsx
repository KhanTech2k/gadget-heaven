import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Smartphone from '../Smartphone/Smartphone';
import Category from '../Category/Category';
import Banner from '../Banner/Banner';

const Smartphones = () => {
    document.title="Gadget Heaven | Smartphones"
    const gadgets = useLoaderData()
    const phones = gadgets.filter(phones => phones.category === 'Smartphones')
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-4xl font-semibold text-center -mt-16 lg:-mt-24'>Explore Cutting-Edge Gadgets</h2>
            <div className='flex flex-col lg:flex-row gap-10 my-16  lg:px-10'>
                <Category></Category>
                <div className='flex flex-col lg:grid  lg:grid-cols-3 gap-8'>
                    {
                        phones.map(gadget => <Smartphone key={gadget.product_id} gadget={gadget}></Smartphone>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Smartphones;