
import React from 'react';
import Breadcrum from '../components/Breadcrums/Breadcrum'
import { useParams } from 'react-router-dom'
import all_product from '../components/assets/all_product';


import Productdisplay from '../components/ProductDisplay/Productdisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';


const Products = () => {
 
  const{productId}=useParams();
  const product=all_product.find((e)=>e.id===Number(productId));
  return (
    <div>
    
    {product ? (
        <>
          <Breadcrum product={product} />
          <Productdisplay product={product} />
          <DescriptionBox/>
          <RelatedProducts/>
        </>
      ) : (
        <p>Product Not Found</p>
      )}
   
    
      
    </div>
  )
}

export default Products
