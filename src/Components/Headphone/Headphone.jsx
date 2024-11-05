import React from 'react';
import { Link } from 'react-router-dom';

const Headphone = ({gadget}) => {
    const { product_title, category, product_image,product_id } = gadget;
    return (
        <div>
            <div>
                <img src={product_image} alt="" />
            </div>
            <h2>{product_title}</h2>
            <h2>{category}</h2>
            <Link to={`/product/${product_id}`}> <button className='btn'>Details</button> </Link>
            
        </div>
    );
};

export default Headphone;