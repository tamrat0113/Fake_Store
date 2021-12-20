import React, { useState,useEffect,useContext,useReducer } from 'react';
import "./ProductsPage.css"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Product from './Product';
import { Link, useHistory } from 'react-router-dom';
// import { useStateValue } from '../StateProvider';
// import {ProductContext} from '../ProductContext1';
import { useStateValue } from '../../src/StateProvider';
import Item from './Items';
function ProductsPage() {
    const [{ cart }, dispatch] = useStateValue();
    // const [{cart}, dispatch] = useReducer(myReducer, { cart:[] });
    const  [products, setproducts] = useState([]);
    // const {ProductInfo} = useContext(ProductContext)
    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5')
        .then(res=>res.json())
        .then(json =>{
        const data = json
            setproducts(data) 
        })
        console.log(products)
       
    },[]);

    return (
    <div>
        
        <div   className="Cart">
            <Link to ="/Cart" >
            <div className="Cart">
            <ShoppingCartIcon/>
            </div>
            </Link>
            
                <span className="Product_icone">
                {/* {basket?.length} */}
               {cart.length}
                </span>
        </div>
        
        <div className="ProductsPage">
        {/* {products.map((product, index) => (
        <Item key={index} product={product} />
            ))} */}
        {products.map((product) => (
        <Product 
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price} />
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
