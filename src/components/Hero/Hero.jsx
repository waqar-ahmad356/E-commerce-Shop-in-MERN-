import React from 'react'
import "./Hero.css";
import hand_icon from '../assets/hand_icon.png';
import arrow_icon from '../assets/arrow.png';
import hero_image from '../assets/hero_image.png';

const Hero = () => {
  return (
    <div className='hero'>
    <div className='hero-left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div className='hero-hand-icon'>
            <p>new</p>
            <img src={hand_icon} alt="hand icon"></img>
        </div>
        <p>Collections </p>
        <p>for everyone</p>
        <div className='hero-icon-btn'>
    <div>Latest Collections</div>
    <img src={arrow_icon} alt='arrow icon' ></img>
    </div>
    </div>
    
    <div className='hero-right'>
        <img src={hero_image} alt='hero image'></img>
    </div>
      
    </div>
  )
}

export default Hero
