import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import { CartProduct } from '../Root/Root';
import { WishProduct } from '../Root/Root';


const Details = () => {
    // accessing cart products
    const [cartProduct, setCartProduct] = useContext(CartProduct)
    const [wishProduct, setWishProduct] =useContext((WishProduct));
    const {product_id} =useParams();
    const data=useLoaderData();
    const product = data.find(product=>product.product_id ===product_id);
    const {product_title,product_image}=product;
    // const [quantity, setQuantity]=useState(0)
    // const handleAddToCart = ()=>{
    //     setQuantity((quantity)=> quantity+1);
    //     console.log(quantity)
    //     return setQuantity;

    // };
    // const handleAddToCartC = () =>{

    // }
    return (
        <div>
            <h2>{product_title}</h2>
            <img className='w-[120px]' src={product_image} alt="" />
            <div className='flex'>
            <button className='btn' onClick={() => setCartProduct([...cartProduct,product])}>Add to cart</button>
            <button onClick={() => setWishProduct([...wishProduct,product])}>Wish List</button>
            </div>
        </div>
    );
};

export default Details;