import React, { useState } from 'react'
import "./header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom'
// import { auth } from '../firebase'
import { useStateValue } from '../StateProvider';
import { auth } from './Firebase';

function Header({ search}) {
  const [{ cart, user }, dispatch] = useStateValue();
    const handleAuthenticaton = () => {
        if ( user) {
          auth.signOut();
        }
      };
    return (
        <div className="header">
            <Link to="/" >
               {/* <h5 className='home'>Home</h5> */}
            <img
                className="header__logo"
                // src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                src="https://pngimg.com/uploads/calvin_klein/calvin_klein_PNG18.png"
                />
             </Link>
        <div className="header__search">
            {/* <Search1  search ={ onChangeHandler}/> */}
        <input   onChange ={search}  className="header__searchInput"  type='search'  placeholder='search'/>
        {/* <SearchIcon className="header__searchIcon"  /> */}
        </div>
        <div className="header__nav">
            <Link to={!user && "/Login"} className="header__clearlink">
            <div onClick={handleAuthenticaton} className="header__option">
                <span className="header__optionLineOne">
                    Hello {!user ? "Guest" : user.email}
                </span>
                <span className="header__optionLineTwo">
                    {user ? "Sign Out" : "Sign In"}
                </span>   
            </div>
            </Link >
            <Link to='/orders' className="header__option">
            <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>
            </Link>
            <div   className="Cart">
            <Link to ="/Cart" >
            <div className="shop__Cart">
            <ShoppingCartIcon/>
            </div>
            </Link>
            
            <span className="Product_icone">
            {cart.length}
                </span>
        </div>
        </div>
        </div>
    )
}

export default Header;




// {/* <div className="header">
// <Link to="/">
// <img
//     className="header__logo"
//     src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
//     />
//  </Link>
// <div className="header__search">
// <input className="header__searchInput" type="text" />
// <SearchIcon className="header__searchIcon" />
// </div>
// <div className="header__nav">
// <Link to={!user && "/login"}>
// <div onClick={handleAuthenticaton} className="header__option">
//     <span className="header__optionLineOne">
//     Hello {!user ? "Guest" : user.email}
//     </span>
//     {/* <span className="header__optionLineOne">Hello {user?.email}</span> */}
//     <span className="header__optionLineTwo">
//     {user ? "Sign Out" : "Sign In"}
//     </span>
//     {/* <span className="header__optionLineTwo">Sign In</span> */}
    
// </div>
// </Link>
// <Link to="/orders" className="header__clearlink">
// <div className="header__option">
//     <span className="header__optionLineOne">Returns</span>
//     <span className="header__optionLineTwo">& Orders</span>
// </div> 
// </Link>  
// <div className="header__option">
//     <span className="header__optionLineOne">Your</span>
//     <span className="header__optionLineTwo">Prime</span>
// </div> 
// <Link to="/checkout" className="header__clearlink">
//     <div className="header__optionBasket">
//     <ShoppingBasketIcon />
//     <span className="header__optionLineTwo header__basketCount">
//     {basket?.length}
//     </span>
//     </div> 
// </Link>   
// </div>
// </div> */}