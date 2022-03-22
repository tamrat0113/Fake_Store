import React, { useState,useEffect,useReducer,useContext } from 'react';
import "./product.css"
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import { Link } from 'react-router-dom';
import { StateProvider, useStateValue } from '../../src/StateProvider';
import { useHistory, useParams } from "react-router";
// import ProductContext from "./cartContext"
// import ProductContext1 from '../ProductContext1';
function Product({id,image,title,price, description, category}) {
  const history = useHistory();
// const  id  = useParams();
  // const ProductInfo = useContext(ProductContext1)
    const [{ cart }, dispatch] = useStateValue();
    console.log("this is the Cart", cart);
    return (
    <div >
     
        <div  className="ProductPage">
            <img className="ProductsPage__image" src={image }/>
            <div className="ProductsPage__info">
                <p className="ProductsPage__title">{title}</p>
                <p >
                <small>$</small>
                <strong>{price} </strong>
                </p>
                <p> </p>
                {/* <button onClick={addToCart}>Add to Cart</button> */}
                <div>
                <button
                  // onClick={() => history.push("/Productdetailspage")}
                  onClick={() => history.push(`/products/${id}`)}
                  className="infoButton"
                >
                  More Info
                </button>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default Product;
