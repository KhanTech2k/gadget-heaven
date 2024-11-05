import React, { useContext, useState } from 'react';
import { CartProduct, WishProduct } from '../Root/Root';

const Dashboard = () => {
    const [cartProduct, setCartProduct] = useContext(CartProduct);
    const [wishProduct, setWishProduct] = useContext(WishProduct);
    const [activeTab, setActiveTab] = useState("cart");
    const [purchaseAmount, setPurchaseAmount] = useState(0); // State to store purchase amount for modal

    const totalPrice = cartProduct.reduce((price, product) => price + product.price, 0);

    // Sorting function
    const sortByPrice = () => {
        const sortedProducts = [...cartProduct].sort((a, b) => b.price - a.price);
        setCartProduct(sortedProducts);
    };

    // Delete specific product
    const handleDelete = (index) => {
        const newCart = cartProduct.filter((product, ind) => ind !== index);
        setCartProduct(newCart);
    };
    const handlePurchase = () => {
        if (cartProduct.length > 0) {
            setPurchaseAmount(totalPrice);
            const modal = document.getElementById('modal');
            modal.showModal();
            setCartProduct([]);
        } else {
            alert("Your cart is empty!");
        }
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
                    <button onClick={handlePurchase} id='purchasebtn' className='btn'>Purchase</button>
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
            {/* Modal */}
            <div>
                {/* <dialog id="modal" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Purchase Complete</h3>
                        <p className="py-4">Your total purchase amount is ${purchaseAmount}</p>
                        <div className="modal-action">
                            <button className="btn" onClick={() => document.getElementById('modal').close()}>
                                Close
                            </button>
                        </div>
                    </div>
                </dialog> */}
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="modal" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Your total purchase amount is ${purchaseAmount}</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Dashboard;
