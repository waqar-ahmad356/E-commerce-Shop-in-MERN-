import React, { useState } from 'react'
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
const [menu,setMenu]=useState("shop");
  return (
    <div className='navbar'>
    <div className='nav-logo'>
        <img src={logo} alt='logo'></img>
        <p>SHOPPER</p>
    </div>
    <ul className='nav-menu'>
        <li onClick={()=>setMenu("shop")}><Link to='/' className='link'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("mens")}><Link to='/mens'  className='link'>Men </Link>{menu==='mens'?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("womens")}><Link to='/womens'  className='link'>Women</Link> {menu==='womens'?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("kids")}><Link to='/kids'  className='link'>Kids</Link> {menu==='kids'?<hr/>:<></>}</li>
    </ul>
    <div className='nav-login-cart'>
       <Link to='/login' className="link"><button>Login</button></Link> 
        <Link to='/cart' className="link"><img src={cart_icon} alt='cart'></img></Link>
        <div className='cart-count'>0</div>
    </div>

      
    </div>
  )
}

export default Navbar
