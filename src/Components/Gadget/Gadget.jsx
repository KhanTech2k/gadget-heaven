import React from 'react';
import { Link } from 'react-router-dom';

const Gadget = ({ gadget }) => {
    const { product_id, product_title, product_image, price } = gadget;
    return (
        <div>
            <div>
                <div><img className='h-[180px] w-full' src={product_image} alt="" /></div>
                <h2>{product_title}</h2>
                <p>Price: ${price}</p>
                <Link to={`/product/${product_id}`}> <button className='btn'>Details</button> </Link>
            </div>
        </div>
    );
};

export default Gadget;