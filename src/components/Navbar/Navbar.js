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
        <Link to='/' className='link'><img src={logo} alt='logo'></img></Link>
        <Link to='/' className='link'><p>SHOPPER</p></Link>
    </div>
    <ul className='nav-menu'>
        <li onClick={()=>setMenu("shop")}><Link to='/' className='link'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("men")}><Link to='/men'  className='link'>Men </Link>{menu==='men'?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("women")}><Link to='/women'  className='link'>Women</Link> {menu==='women'?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("kid")}><Link to='/kid'  className='link'>Kid</Link> {menu==='kid'?<hr/>:<></>}</li>
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
