import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { CartProduct } from '../Root/Root';
import { WishProduct } from '../Root/Root';
import { IoCartOutline } from 'react-icons/io5';
import { CiHeart } from 'react-icons/ci';

const NavBar = () => {
    const [cartProduct] = useContext(CartProduct);
    const [wishProduct] = useContext(WishProduct);
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="statistics">Statistics</NavLink></li>
            <li><NavLink to="dashboard">Dashboard</NavLink></li>
        </>
    );

    return (
        <section className="mt-4">
            <div className={`navbar rounded-xl py-8 px-8 relative ${isHomePage ? 'bg-[#9538E2] text-white' : 'bg-white text-black'}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>
                    <a className="text-xl">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    <div className="btn btn-ghost btn-circle bg-white border border-gray-300">
                        <div className="indicator text-xl text-black">
                            <IoCartOutline />
                            <span className="badge-sm indicator-item -top-0.5">{cartProduct.length}</span>
                        </div>
                    </div>
                    <div className="btn btn-ghost btn-circle bg-white border border-gray-300">
                        <div className="indicator text-xl text-black">
                            <CiHeart />
                            <span className="badge-sm indicator-item -top-0.5">{wishProduct.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NavBar;