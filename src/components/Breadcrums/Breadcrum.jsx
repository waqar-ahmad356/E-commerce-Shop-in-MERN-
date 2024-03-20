import React from 'react'
import './Breadcrum.css';
import arrow_icon from '../assets/arrow.png';

const Breadcrum = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum'>
    HOME <img src={arrow_icon} alt='arrow icon'></img>SHOP<img src={arrow_icon} alt='arrow icon'></img>{product.category}<img src={arrow_icon} alt='arrow icon'></img>{product.name}<img src={arrow_icon} alt='arrow icon'></img>
      
    </div>
  )
}

export default Breadcrum
