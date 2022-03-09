import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../../src/StateProvider';
import { useHistory } from 'react-router-dom';
function Subtotal() {
    const history = useHistory();
    const [{ cart }, dispatch] = useStateValue();
    const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0);
    return (
        <div className="subtotal">
          <CurrencyFormat
            renderText={(value) => (
              <div>
                <p>
                Subtotal  <strong>{value}</strong>
                </p>
              </div>
              )}
              decimalScale={2}
              value={getCartTotal(cart)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
            <button onClick={(e) => history.push('/checkout ')} ><span >Proceed to Checkout</span></button>
            
        </div>
    )
}

export default Subtotal;