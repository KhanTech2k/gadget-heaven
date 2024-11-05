import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div>
            <div className='flex flex-col'>
                <Link to="/"> Allproducts </Link>
                <Link to="/smartphones">Smartphones</Link>
                <Link to="/laptops"> Laptops</Link>
                <Link to="/headphones"> Headphones</Link>
            </div>
        </div>
    );
};

export default Category;