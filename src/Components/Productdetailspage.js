import React, { useEffect, useState ,useContext} from "react";
import { useParams ,useHistory} from "react-router-dom";
// import ProductContext1 from "../ProductContext1";

import { useStateValue } from "../StateProvider";
// import { useStateValue } from "../../Context/CartContext";
import "./Productdetailspage.css";
 
const Productdetailspage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  // const [count, setCount] = useState(1);
//   const { cart, setCart } = useContext(ProductContext1);
  const history = useHistory();
   const [{ cart }, dispatch] = useStateValue();
   
   useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  
console.log(product)
   const imgStyles = {
     backgroundImage: `url(${product.image})`,
     width: "100%",
     height: "400px",
     backgroundSize: "cover",
     position: "center",
   };
const addToCart = () => {
  // dispatch the item into the data layer
  dispatch({
    type: "ADD_TO_CART",
    item: {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      description: product.description,
      category: product.category
    },
  });
   history.push("/");
};

  return (
    <div className="product_container">
      <div className="product_card">
        {/* <div> */}
          <div style={imgStyles}></div>
          <h2 className="product_title">{product.title}</h2>
          <p className="product_description">{product.description}</p>
            <div className="product_cata">
                    <div>
                        <p >
                        <small>$</small>
                        <strong>{product.price}</strong>
                        </p>
                    </div>
                    <div><p className="ProductsPage__title">Category : {product.category}</p>
                    </div>
            </div>

        <div className="addContainer">
            
            <button className="cntBtn"
                onClick={addToCart}>
                Add To Cart
            </button>
        </div>
      </div>
    </div>
  );
};

export default Productdetailspage;


 // onClick={() => {
            // setCart([...cart, { ...product, count }]);
            //   history.push("/");
            // }}

            // <div>
            //     <button className="cntBtn" onClick={() => setCount(count - 1)}>
            //     -
            //     </button>
            //     {count}{" "}
            //     <button className="cntBtn" onClick={() => {setCount(count + 1); }}>
            //     +
            //     </button>
            // </div>










// import React, { useState,useEffect,useContext,useReducer } from 'react';
// import { useStateValue } from '../../src/StateProvider';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import Product from './Product';
// import { Link, useHistory,useParams } from 'react-router-dom';
// // import ProductContext from "./ProductContextProvider"

// function Productdetailspage() {
    
//     const { id } = useParams();
//     // const [{ cart }, dispatch] = useStateValue();
//     const [{ cart }, dispatch] = useStateValue();
//     const  [products, setproducts] = useState([]);
//     // const ProductInfo = useContext(ProductContext)
//     useEffect(() => {
//         fetch(`https://fakestoreapi.com/products`)
//           .then((res) => res.json())
//           .then((data) => setproducts(data));
//       }, [id]);
// console.log(products)
//       const addToCart = () => {
//         dispatch({
//           type: "ADD_TO_CART",
//           item: {
//             id: id,
//             title: products.title,
//             image: products.image,
//             price: products.price,
//             rating: products.rating,
            
//           },
//         });
//       };

//     return (
//         <div>
            
//         <div  className="ProductPage">
//             <img className="ProductsPage__image" src={products[1].image }/>
//             <div className="ProductsPage__info">
//                 <p className="ProductsPage__title">{products[1].title}</p>
//                 <p >
//                 <small>$</small>
//                 <strong>{products[1].price}</strong>
//                 </p>
//                 <button onClick={addToCart}>Add to Cart</button>
//             </div>
            
//         </div>
//         </div>
//     )
// }

// export default Productdetailspage
