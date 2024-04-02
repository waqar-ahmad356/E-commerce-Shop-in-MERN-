import React from 'react'
import './Popular.css';
import popular_data  from '../assets/data';
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className='popular'>
    <h1>POPULAR FOR WOMENS</h1>
    <hr/>
    <div className='popular-items'>
        {popular_data.map((item,i)=>{
           return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

        })}
    </div>

      
    </div>
  )
}

export default Popular
