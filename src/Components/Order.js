import React from 'react'
import moment from 'moment';
import './Order.css'
import CheckoutProducts from './CheckoutProducts';
import CurrencyFormat from 'react-currency-format';
function Order({order}) {
  return (
    <div className="order">
        <h2>Order</h2>
        <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
        <p className="order__id">
            <small>{order.id}</small>
        </p>
        {order.data.cart?.map((item) => (
        <CheckoutProducts
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            hideButton
            />
        ))}
        <CurrencyFormat
        renderText={(value) => (
        <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        />
    </div>
  )
}

export default Order