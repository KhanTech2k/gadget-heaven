import React from 'react';

const Smartphone = ({gadget}) => {
    const { product_title, category, product_image } = gadget;
    return (
        <div>
            <div>
                <img src={product_image} alt="" />
            </div>
            <h2>{product_title}</h2>
            <h2>{category}</h2>
        </div>
    );
};

export default Smartphone;