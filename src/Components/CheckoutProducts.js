import React from 'react'
import "./CheckoutProducts.css";
import { useStateValue } from '../../src/StateProvider';
function CheckoutProducts({ id, image, title, price,hideButton }) {
    const [{ cart }, dispatch] = useStateValue();
    const removeFromCart = () => {
        dispatch({
          type: "REMOVE_FROM_CART",
          id: id,
        });
      };
    return (
        <div className="checkoutProduct">
           <img className="checkoutProduct__image" src={image} />
           <div className="checkoutProduct__info ">
                <p>{title}</p>
                <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
                </p>
                {!hideButton && (
                <button onClick={removeFromCart}>Remove from Basket</button>
                )}{' '}
            </div>
        </div>
    )
}

export default CheckoutProducts;
