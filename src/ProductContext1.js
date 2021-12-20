import { createContext, useState,useEffect } from "react";

 const ProductContext = createContext({});

function ProductContext1({children}) {
    const  [cart, setCart] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
          .then((res) => res.json())
          .then((data) => setCart(data));
      }, []);
    
console.log(cart)

  return (
      <div>
    <ProductContext.Provider
    value={{
        cart: cart,
    }}
    >
      {children}
    </ProductContext.Provider>
    </div>
  );
  
}

export default ProductContext1;
