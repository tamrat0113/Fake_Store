import { Link, useHistory } from 'react-router-dom';
import React, { useState,useEffect } from 'react';
import './Payment.css';
import CheckoutProducts from './CheckoutProducts';
import { useStateValue } from '../../src/StateProvider';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from '../axios';
// import { db } from './firebase';

function Payment() {
    const [{ cart }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');
    const [contact, setContact] = useState({
        firstName: "",
        address: "",
       
    });

    function handleInputChange(event) {
        setContact({
            ...contact,
            [event.target.name]: event.target.value,
          });
          console.log(contact)
      }
    const [clientSecret, setClientSecret] = useState(true);
    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
          const response = await axios({
            method: 'post',
            // Stripe expects the total in a currencies subunits
            url: `/payments/create?total=${getCartTotal(cart) * 100}`,
          });
          setClientSecret(response.data.clientSecret);
        };
    
        getClientSecret();
      }, [cart]);
      console.log('THE SECRET IS >>>', clientSecret);

    const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0);

    const handleSubmit = async (event) => { 
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
        card: elements.getElement(CardElement)
        },
    }).then(({ paymentIntent }) => {
    // / paymentIntent = payment confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            history.replace('/ProductsPage');
        dispatch({ 
                type: 'EMPTY_CART',
                });
    })
        
}

    const handleChange = (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '');
    };


    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                Checkout (<Link to="/">{cart?.length} items</Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <div className="payment__input">
                            <fieldset>
                                <legend>Contact Address:</legend>
                            <label for="fname">First Name</label>
                                <input 
                                type="text"
                                placeholder=" Name"
                                name="firstName"
                                value={contact.firstName}
                                onChange={handleInputChange}
                                form="form1"
                                />
                            <label for="adress">Address</label>
                                <input
                                type="text"
                                placeholder="Shiping Address"
                                name="address"
                                value={contact.address}
                                onChange={handleInputChange}
                                form="form1"
                                />
                            <label for="adress">Address</label>   
                                <input
                                type="text"
                                placeholder="Billing Address"
                                name="billingAddresss"
                                value={contact.address}
                                onChange={handleInputChange}
                                form="form1"
                                />
                                </fieldset>
                        </div>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
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
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    
                    <div className="payment__details">
                        <form onSubmit={handleSubmit} id="form1">
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                renderText={(value) => <h3>Order Total: {value}</h3>}
                                decimalScale={2}
                                value={getCartTotal(cart)}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
