import React from 'react'
import { useStateValue } from '../../src/StateProvider';
import Subtotal from './Subtotal';
import CheckoutProducts from "./CheckoutProducts"
import "./cartPage.css"
// function Checkoutpage() 
function Cartpage() {
    const [{ cart }, dispatch] = useStateValue();
    return (
        <div>
            <div className="checkout">
                <div className="checkout__left">
                    {cart.map((item) => (
                        <CheckoutProducts
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
                <div className="checkout__right">
                    <Subtotal/>
                </div>
            </div>
        </div>
    )
}

export default Cartpage
