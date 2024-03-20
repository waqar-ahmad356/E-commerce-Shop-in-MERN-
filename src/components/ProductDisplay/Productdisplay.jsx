import React from 'react'
import './Productdisplay.css';
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';

const Productdisplay = (props) => {
    const {product}=props;
  return (
    <div className='productdisplay'>
    <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
            <img src={product.image} alt='product image'></img>
            <img src={product.image} alt='product image'></img>
            <img src={product.image} alt='product image'></img>
            <img src={product.image} alt='product image'></img>
        </div>
        <div className='productdisplay-img'>
            <img src={product.image} alt=''></img>
        </div>
    </div>
    <div className='productdisplay-right'>
        <h1>{product.name}</h1>
    </div>
    <div className='productdisplay-right-start'>
        <img src={star_icon} alt=''></img>
        <img src={star_icon} alt=''></img>
        <img src={star_icon} alt=''></img>
        <img src={star_icon} alt=''></img>
        <img src={star_dull_icon} alt=''></img>
    </div>
      
    </div>
  )
}

export default Productdisplay
