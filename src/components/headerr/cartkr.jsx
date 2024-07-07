import React, { useContext } from 'react';
import { CartContext } from '../CartContext';


const Cart = () => {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);

    return (
        <div className="cart-dropdown">
            <h3>Savat</h3>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        <span>{item.name}</span>
                        <span>{item.price} $</span>
                        <button onClick={() => removeFromCart(index)}>O'chirish</button>
                    </li>
                ))}
            </ul>
            <button onClick={clearCart}>Savatni tozalash</button>
        </div>
    );
};

export default Cart;
