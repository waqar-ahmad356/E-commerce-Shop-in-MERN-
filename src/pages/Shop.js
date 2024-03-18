import React from 'react'
import Hero from '../components/Hero/Hero';
import Popular from '../components/Popular/Popular';
import Offer from '../components/Offers/Offer';
import Newcollections from '../components/NewCollections/Newcollections';
import Newsletter from '../components/NewsLetter/Newsletter';

const Shop = () => {
  return (
    <div>
    <Hero/>
    <Popular/>
    <Offer/>
    <Newcollections/>
    <Newsletter/>
      
    </div>
  )
}

export default Shop
