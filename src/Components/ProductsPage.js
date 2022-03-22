import React, { useState,useEffect,useContext,useReducer } from 'react';
import "./ProductsPage.css"
import Header from './Header';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Product from './Product';
import { Link, useHistory } from 'react-router-dom';
// import { useStateValue } from '../StateProvider';
// import {ProductContext} from '../ProductContext1';
import { useStateValue } from '../../src/StateProvider';
import Item from './Items';
import Search1 from './Search1';
function ProductsPage({prdt,  onChangeHandler}) {
    // const [{ cart }, dispatch] = useStateValue();
 return (
    <div className='prdt'>
        {/* <div><Search1 search={onChangeHandler}/></div> */}
        <ul class="nav">
        {/* <Search1 search={onChangeHandler}/> */}
        <div>
        <Header search={onChangeHandler}/>
        </div>
        </ul>
       <div className="ProductsPage">

       {prdt.map((product) => (
        <Product key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            catagory={product.category} />
        ))}
        </div>
    </div>
    )
}

export default ProductsPage;
// const ProductInfo = useContext(ProductContext);
// import ProductContext from '../ProductContext';

{/* <div className="ProductsPage">
        {products.map((product) => (
            <Product
            image={product.image}
            title={product.title}
            price={product.price}
            />
        ))}
            
        </div> */}
        {/* <Link to ="/Cart" >
            <li className="shop"><ShoppingCartIcon/><span>{cart.length}</span></li>
            </Link> */}
            {/* <li><span className="Product_icone">{cart.length}</span></li> */}
             {/* <li class="active" href="#home">Home</li>
            <li>About Us</li>
            <li>Our Clients</li>  
            <li>Contact Us</li> */}
 {/* <div   className="Cart">
            <Link to ="/Cart" >
            <div className="shop__Cart">
            <ShoppingCartIcon/>
            </div>
            </Link>
            
            <span className="Product_icone">
            {cart.length}
                </span>
        </div> */}

         {/* {products.map((product, index) => (
        <Item key={index} product={product} />
            ))} */}
             {/* {products.map((product) => (
        <Product key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price} />
        ))} */}