//import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
//import { ShopContext } from '../context/ShopContext';
import dropdwon_icon from '../components/assets/dropdown_icon.png';
import Item from '../components/Item/Item';
import all_data from '../components/assets/all_product';

const ShopCategory = (props) => {
  //const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img className="shop-category-banner" src={props.banner} alt='banner images' />
      <div className='shopcategory-sortindex'>
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>
        <div className='shopcategory-sort'>
          sort by <img src={dropdwon_icon} alt='drop dwon icon' />
        </div>
      </div>
      <div className='shopcategory-products'>
      {all_data?.length > 0 ? (
          all_data.map((item, i) => {
            if (props.category===item.category)
            {
              return  <Item
              key={i}
              {...item} // Pass all item properties to Item component
            />

            }
            
           
       } )
        ) : (
          <p>No products found.</p>
        )}
            
        
      </div>
      <div className='shopcategory-loadmore'>
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
