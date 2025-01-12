import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { createContext, useState } from 'react';

export const CartProduct = createContext(null)
export const WishProduct = createContext(null)
const Root = () => {
  const [cartProduct, setCartProduct] = useState([]);
  const [wishProduct, setWishProduct] = useState([])
  return (
    <div>
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