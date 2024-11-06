import React, { useContext, useState } from 'react';
import { CartProduct, WishProduct } from '../Root/Root';
import { FaCartShopping } from 'react-icons/fa6';
import sorticon from '../../assets/download.png';
import deleteicon from '../../assets/delete.png';
import modalicon from '../../assets/Group.png'
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
    const handleDeleteWishList = (index) => {
        const newCart = wishProduct.filter((product, ind) => ind !== index);
        setWishProduct(newCart);
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
            <div className='text-center bg-[#9538E2] mt-5 py-5'>
                <h1 className='text-5xl font-bold text-white'>Dashboard</h1>
                <p className='mx-auto text-gray-200 m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non molestias necessitatibus eligendi nulla eum cumque, atque praesentium? Voluptates, id quibusdam.</p>
                <div className='flex justify-center'>
                    <button onClick={() => setActiveTab("cart")} className={`btn w-32 lg:w-40 text-base rounded-3xl mr-5 ${activeTab === "cart" ? " bg-white text-[#9538E2]  font-bold" : "bg-[#9538E2] text-white "
                        }`}>
                        Cart
                    </button>
                    <button onClick={() => setActiveTab("wish")} className={`btn w-32 lg:w-40 text-base rounded-3xl ${activeTab === "wish" ? " bg-white text-[#9538E2] font-bold" : "bg-[#9538E2] text-white "
                        }`}>
                        Wish List
                    </button>
                </div>
            </div>
            <div className='px-10'>
                <div className='flex justify-between items-center mt-10 mb-10'>
                    <div className='text-2xl font-bold'>
                        <h1>{activeTab === "cart" ? "Cart" : "Wish List"}</h1>
                    </div>
                    <div>
                        {activeTab === "cart" && (
                            <div className='flex justify-end items-center gap-5'>
                                <h2 className='font-bold'>Total Cost: ${totalPrice}</h2>
                                <button onClick={sortByPrice} className='btn rounded-3xl border-[#9538E2] text-[#9538E2] bg-white'>Sort by Price <span><img src={sorticon} alt="" /></span> </button>
                                <button onClick={handlePurchase} id='purchasebtn' className='btn border-none rounded-3xl text-base text-white px-5 bg-[#9538E2]'>Purchase</button>
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    {activeTab === "cart" && (
                        <div>
                            {cartProduct.map((product, index) => (
                                <div className='flex justify-between items-center border rounded-2xl p-5 mb-5'>
                                    <div key={index} className='flex items-center gap-5'>
                                        <img className='w-32 h-36 object-cover' src={product.product_image} alt={product.product_title} />
                                        <div className='flex flex-col'>
                                            <h1 className='font-bold lg:text-xl'>{product.product_title}</h1>
                                            <p>{product.description}</p>
                                            <p className='font-semibold'>Price:${product.price}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => handleDelete(index)} className=''><img src={deleteicon} alt="" /> </button>
                                </div>
                            ))}
                        </div>
                    )}
                    {activeTab === "wish" && (
                        <div>
                            {wishProduct.map((product, index) => (
                                <div className='flex justify-between items-center border rounded-2xl p-5 mb-5'>
                                    <div key={index} className='flex items-center gap-5'>
                                        <img className='w-32 h-36 object-cover' src={product.product_image} alt={product.product_title} />
                                        <div className='flex flex-col'>
                                            <h1 className='font-bold lg:text-xl'>{product.product_title}</h1>
                                            <p>{product.description}</p>
                                            <p className='font-semibold'>Price:${product.price}</p>
                                            <button className='btn px-4 py-2 bg-[#9538E2] text-white rounded-3xl flex w-3/12 space-x-2' onClick={() => setCartProduct([...cartProduct, product])}>
                                                Add to cart <FaCartShopping></FaCartShopping>
                                            </button>
                                        </div>
                                    </div>
                                    <button onClick={() => handleDeleteWishList(index)} className=''><img src={deleteicon} alt="" /> </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                {/* Modal */}
                <div>
                    <dialog id="modal" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box flex flex-col justify-center items-center">
                            <img src={modalicon} alt="" />
                            <h3 className="font-bold text-2xl text-[#09080F]">Payment Sucessfully</h3>
                            <p className='text-[#09080F99] font-medium'>Thanks for purchasing </p>
                            <p className="py-4 text-[#09080F99] font-medium">Total: ${purchaseAmount}</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn w-full">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
