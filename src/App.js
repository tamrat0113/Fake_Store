import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Productdetailspage from './Components/Productdetailspage';
import ProductsPage from './Components/ProductsPage';
// import Checkoutpage from './Components/Checkoutpage';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Payment from '../src/Components/Payment';
import Cartpage from './Components/Cartpage';
import Header from './Components/Header';
import Login from './Components/Login';
import { useStateValue } from './StateProvider';
import { auth } from './Components/Firebase';
import Orders from './Components/Orders';
import Search1 from './Components/Search1';
function App() {
  const  [products, setproducts] = useState([]);
  const  [searchField, setSearchField] = useState('');
  const  [filteredMonsters, setfilteredMonsters] = useState(products);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=8')
    .then(res=>res.json())
    .then(json =>{
    const data = json
        setproducts(data) 
    })
    console.log(products)
   
},[]);

 const handleChange=(event)=>{
    const searchString = event.target.value.toLowerCase();
    setSearchField(searchString);
  console.log(searchField); //we capture the the type value in the state that is in the searchield 
    }

    useEffect(()=>{ 
      const newfilteredCards = products.filter((product)=>{
        return product.category.toLowerCase().includes(searchField);//this means if the name include the search string(true) it filter the name, that  keep it
      });
      setfilteredMonsters(newfilteredCards);
    },[products, searchField])

  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  const promise = loadStripe(
    'pk_test_51JL6xnAEIvf3Nqjj7uXFtXUuN39k2BN4gzJqJQVCCSLrGinlxr2VV72LOSwFf9vCznoEI8iGAR2QScPTjIPtV4I700oWf3EDsS'
  );
  return (
    <Router>
      <div className="App">
        <Switch> 
          <Route path="/Login">
          <Login/>
          </Route>
          <Route path="/orders">
            <Header  onChangeHandler={handleChange} />
            <Orders/>
          </Route>
          <Route path="/cart">
            <Cartpage  />
          </Route>
          <Route path="/checkout "  >
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/products/:id">
            <Productdetailspage />
          </Route>
          <Route  path="/">
           <ProductsPage  prdt={filteredMonsters}  onChangeHandler={handleChange}/>
          </Route> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;

 {/* <Search1 /> */}
            {/* <ProductsPage  prdt={filteredMonsters}  /> */}
