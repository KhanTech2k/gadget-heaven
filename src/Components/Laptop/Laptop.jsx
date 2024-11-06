import React from 'react';
import { Link } from 'react-router-dom';

const Laptop = ({gadget}) => {
    const {product_title,category,product_image,product_id,price}=gadget; 
    return (
        <div >
            <div className='shadow-md rounded-lg p-5 bg-[#FFFFFF]'>
                <div><img className='h-[480px] w-full' src={product_image} alt="" /></div>
                <h2 className='text-2xl font-semibold text-[#09080F] mb-3'>{product_title}</h2>
                <p className='text-xl text-[#09080F99] font-medium mb-4'>Price: ${price}</p>
                <Link to={`/product/${product_id}`}> <button className='text-lg font-semibold text-[#9538E2] border border-[#9538E2] rounded-3xl px-4 py-2'>View Details</button> </Link>
            </div>
        </div>
    );
};

export default Laptop;