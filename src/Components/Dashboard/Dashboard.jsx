import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartProduct } from '../Root/Root';

const Dashboard = () => {
    const [cartProduct, setCartProduct] = useContext(CartProduct);
    return (
        <div>
            <h1>Dashboard</h1>
            <div>
                {
                    cartProduct.map((product) => (
                        <> <h1>{product.product_title}</h1>
                        </>
                    ))
                }
            </div>
        </div>
        
    );
};

export default Dashboard;