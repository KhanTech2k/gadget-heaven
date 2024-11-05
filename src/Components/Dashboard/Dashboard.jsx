import React, { useContext, useState } from 'react';
import { CartProduct, WishProduct } from '../Root/Root';

const Dashboard = () => {
    const [cartProduct, setCartProduct] = useContext(CartProduct);
    const [wishProduct, setWishProduct] = useContext(WishProduct);
    const [activeTab, setActiveTab] = useState("cart");
    const totalPrice = cartProduct.reduce((price, product) => price + product.price, 0);
    // Sorting
    const sortByPrice = () => {
        const sortedProducts = [...cartProduct].sort((a, b) => b.price - a.price);
        setCartProduct(sortedProducts);
    };

    // Delete specific product
    const handleDelete = (index) => {
        const newCart = cartProduct.filter((product, ind) => ind !== index);
        setCartProduct(newCart);
    };

    // Handle purchase
    const handlePurchase = () => {
        const purchase =cartProduct.filter(product=>product.product_id !==product.product_id)
        setCartProduct(purchase);
        alert('Purchased');
    };

    return (
        <div>
            <h1>{activeTab === "cart" ? "Cart" : "Wish List"}</h1>
            <div className='flex justify-center'>
                <button onClick={() => setActiveTab("cart")} className='btn'>
                    Cart
                </button>
                <button onClick={() => setActiveTab("wish")} className='btn'>
                    Wish List
                </button>
            </div>
            {activeTab === "cart" && (
                <div className='flex justify-end items-center'>
                    <h2>Total Cost: ${totalPrice}</h2>
                    <button onClick={sortByPrice} className='btn'>Sort by Price</button>
                    <button onClick={handlePurchase}>Purchase</button>
                </div>
            )}
            <div>
                {activeTab === "cart" && (
                    <div>
                        {cartProduct.map((product, index) => (
                            <div key={index} className='flex justify-between'>
                                <img src={product.product_image} alt={product.product_title} width="50" />
                                <h1>{product.product_title}</h1>
                                <p>${product.price}</p>
                                <button onClick={() => handleDelete(index)} className='btn'>Delete</button>
                            </div>
                        ))}
                    </div>
                )}
                {activeTab === "wish" && (
                    <div>
                        {wishProduct.map((product) => (
                            <div key={product.product_id} className='flex justify-between'>
                                <img src={product.product_image} alt={product.product_title} width="50" />
                                <h1>{product.product_title}</h1>
                                <p>${product.price}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;