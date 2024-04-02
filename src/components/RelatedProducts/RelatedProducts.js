import React from 'react'
import './RelatedProducts.css';
import product_data from '../assets/data';
import Item from '../Item/Item';

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
    <h1>Related Products</h1>
    <hr/>
    <div className='relatedproducts-item'>
        {
            product_data.map((item,i)=>{
                return  <Item
              key={i}
              {...item} // Pass all item properties to Item component
            />
            })
        }
    </div>
      
    </div>
  )
}

export default RelatedProducts
