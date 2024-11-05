import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import { createContext, useState } from 'react';

export const CartProduct = createContext(null)
export const WishProduct = createContext(null)
const Root = () => {
    const [cartProduct, setCartProduct] = useState([]);
    const [wishProduct, setWishProduct]= useState([])
    return (
        <div className='bg-[#F7F7F7]'>
          <CartProduct.Provider value={[cartProduct, setCartProduct]}>
            <WishProduct.Provider value={[wishProduct, setWishProduct]}>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            </WishProduct.Provider>
          </CartProduct.Provider>
        </div>

    );
};

export default Root;