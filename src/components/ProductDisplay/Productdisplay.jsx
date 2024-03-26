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
            <img src={product.image} alt='product'></img>
            <img src={product.image} alt='product'></img>
            <img src={product.image} alt='product'></img>
            <img src={product.image} alt='product'></img>
        </div>
        <div className='productdisplay-main-img'>
            <img src={product.image} alt=''></img>
        </div>
    </div>
    <div className='productdisplay-right'>
        <h1>{product.name}</h1>
    
    <div className='productdisplay-right-stars'>
        <img src={star_icon} alt=''></img>
        <img src={star_icon} alt=''></img>
        <img src={star_icon} alt=''></img>
        <img src={star_icon} alt=''></img>
        <img src={star_dull_icon} alt=''></img>
        <p>120</p>
    </div>
    <div className='productdisplay-right-prices'>
    <div className='productdisplay-right-price-old'>${product.old_price}</div>
    <div className='productdisplay-right-price-new'>${product.new_price}</div>

    </div>
    <div className='productdisplay-right-description'>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </div>
    <div className='productdisplay-right-size'>
        <h1>Select Size</h1>
        <div className='productdisplay-right-sizes'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
        </div>

    </div>
    <button >ADD TO CART</button>
    <div className='productdisplay-right-category'><span>category : </span>Women,  T-Shirt, Crop Top</div>
    <div className='productdisplay-right-tags'><span>Tags : </span>Modern, Latest</div>
      </div>
    </div>
  )
}

export default Productdisplay
