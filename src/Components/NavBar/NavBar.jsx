import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartProduct } from '../Root/Root';
import { WishProduct } from '../Root/Root';

const NavBar = () => {
    const [cartProduct, setCartProduct] = useContext(CartProduct);
    const [wishProduct, setWishProduct] = useContext((WishProduct));
    return (
        <section>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><NavLink>Home</NavLink></li>
                            <li><NavLink>Statistics</NavLink></li>
                            <li><NavLink to="dashboard">Dashboard</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="statistics">Statistics</NavLink></li>
                        <li><NavLink to="dashboard">Dashboard</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    <button className='btn'>Cart:{cartProduct.length}</button>
                    <button className='btn'>Wish: {wishProduct.length}</button>
                </div>
            </div>
        </section>
    );
};

export default NavBar;