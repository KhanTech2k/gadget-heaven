import React from 'react';
import { NavLink } from 'react-router-dom';

const Category = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center gap-5 border p-8 rounded-xl mx-auto mb-10 shadow-md'>
                <NavLink to="/" className={({ isActive }) => `btn rounded-3xl text-[#09080F99] text-lg w-full font-medium ${isActive ? 'bg-[#9538E2]' : 'bg-[#09080F0D]'}`}>All Products</NavLink>

                <NavLink to="/smartphones" className={({ isActive }) => `btn rounded-3xl text-lg text-[#09080F99] w-full font-medium ${isActive ? 'bg-[#9538E2]' : 'bg-[#09080F0D]'}`}>Smartphones</NavLink>

                <NavLink to="/laptops" className={({ isActive }) => `btn rounded-3xl text-lg text-[#09080F99] w-full font-medium ${isActive ? 'bg-[#9538E2]' : 'bg-[#09080F0D]'}`}>Laptops</NavLink>

                <NavLink to="/headphones" className={({ isActive }) => `btn rounded-3xl text-lg text-[#09080F99] w-full font-medium ${isActive ? 'bg-[#9538E2]' : 'bg-[#09080F0D]'}`} >Headphones</NavLink>
                <NavLink to="/watches" className={({ isActive }) => `btn rounded-3xl text-lg text-[#09080F99] w-full font-medium ${isActive ? 'bg-[#9538E2]' : 'bg-[#09080F0D]'}`} >Watches</NavLink>
            </div>
        </div>
    );
};

export default Category;