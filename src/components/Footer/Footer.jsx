import React from 'react'
import './Footer.css';
import footer_logo from '../assets/logo_big.png';
import whats_app_ico from '../assets/whatsapp_icon.png';
import pinterest_icon from '../assets/pintester_icon.png';
import instagram_ico from '../assets/instagram_icon.png';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer-logo'>
       <Link to='/' className='link' ><img src={footer_logo} alt='footer logo'></img></Link>
       <Link to='/' className='link'><p>SHOPPER</p></Link> 
    </div>
    <ul className='footer-links-container'>
    <li >Company</li>
    <li >Products</li>
    <li >Offices</li>
    <li >About</li>
    <li >Contact</li>

    </ul>
    <div className='footer-social-links'>
        <div className='footer-social-links-icon'>
            <img src={pinterest_icon} alt='pinterest ico'></img>
        </div>
        <div className='footer-social-links-icon'>
            <img src={instagram_ico} alt='instagram icon'></img>
        </div>
        <div className='footer-social-links-icon'>
            <img src={whats_app_ico} alt='whatsapp icon'></img>
        </div>
    </div>
    
    <div className='footer-copyright'>
        <hr/>
        <p>Copyright @ All Rights Reserved.</p>
    </div>
    
      
    </div>
    
  )
}

export default Footer
