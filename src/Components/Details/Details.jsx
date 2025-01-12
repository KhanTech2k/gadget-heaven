import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CartProduct } from '../Root/Root';
import { WishProduct } from '../Root/Root';
import { FaCartShopping } from 'react-icons/fa6';
import { CiHeart } from 'react-icons/ci';
import ReactStars from "react-rating-stars-component";
import 'react-toastify/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Details = () => {
    const [cartProduct, setCartProduct] = useContext(CartProduct);
    const [wishProduct, setWishProduct] = useContext(WishProduct);
    const [isWishListed, setIsWishListed] = useState(false);

    const { product_id } = useParams();
    const data = useLoaderData();
    const product = data.find(product => product.product_id === product_id);
    const { product_title, product_image, price, availability, description, specification, rating } = product;
    document.title= `Gadget Heaven | Product Detsils | ${product_title}`

    const handleAddToCart = () => {
        setCartProduct([...cartProduct, product]);
        toast.success("Sucessfully Product added to cart");
    };

    const handleAddToWishList = () => {
        setWishProduct([...wishProduct, product]);
        setIsWishListed(true);
        toast.success("Added to wishlist!");
    };

    return (
        <div>
            <div className='hero bg-[#9538E2] h-auto pt-5 pb-32 my-5'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold text-white mb-4'>Product Details</h2>
                    <p className='py-6 max-w-md lg:max-w-2xl mx-auto mb-4 text-gray-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nesciunt incidunt iusto, accusantium aliquam iste voluptatem quisquam fugit repellendus ab.</p>
                </div>
            </div>
            <div className='border rounded-3xl relative bottom-36 p-4  w-10/12 lg:w-6/12 mx-auto bg-white'>
                <div className='flex flex-col lg:flex-row items-center'>
                    <div>
                        <img className='w-[680px]' src={product_image} alt={product_title} />
                    </div>
                    <div>
                        <h2 className='text-3xl mb-2 font-bold'>{product_title}</h2>
                        <p className='text-lg font-semibold mb-2'>Price: {price}</p>
                        <p className='rounded-2xl w-24 text-center mb-2 py-0.5 bg-lime-50 border border-[#23BE0A] text-[#23BE0A]'>{availability}</p>
                        <p className='mb-2'>{description}</p>
                        <div>
                            <h3 className='font-bold'>Specifications:</h3>
                            {specification.map((spec, index) => (
                                <p key={index}>{spec}</p>
                            ))}
                        </div>

                        <div className='my-2'>
                            <h4 className='font-bold'>Rating:</h4>
                            <div className='flex gap-4 items-center'>
                                <ReactStars
                                    count={5}
                                    value={rating}
                                    size={24}
                                    activeColor="#ffd700"
                                    edit={false}
                                />
                                <p>{rating}</p>
                            </div>
                        </div>

                        <div className='flex gap-4'>
                            <button
                                className='btn px-4 py-2 bg-[#9538E2] text-white rounded-3xl flex items-center space-x-2'
                                onClick={handleAddToCart}>
                                Add to cart <FaCartShopping />
                            </button>
                            <button
                                className={`btn btn-circle border border-gray-300 rounded-full ${isWishListed ? 'bg-gray-400 text-gray-200' : 'bg-gray-300 text-gray-500'} text-center text-xl`}
                                onClick={handleAddToWishList}
                                disabled={isWishListed}>
                                <CiHeart />
                            </button>
                            <ToastContainer  position='top-center' autoClose={2000}></ToastContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
