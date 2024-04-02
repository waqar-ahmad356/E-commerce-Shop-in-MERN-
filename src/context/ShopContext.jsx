import React from 'react'
import all_data from '../components/assets/all_product';
import { createContext } from 'react';
import { useState } from 'react';
export const ShopContext=createContext(null);

const ShopContextProvider = (props) => {
  const getDefaultCart = () => {
    let cart = {};
    for (let index=0;index<all_data.length+1;index++){
      cart[index]=0;
    }
    
    return cart;
  }

  const [cartItems, setCartItems] = useState(getDefaultCart());
 

  const addToCart = (itemId) => {
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    console.log(cartItems);
  }
    const removeFromCart = (itemId) => {
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

      
    }
    const getTotalAmount=()=>{
      let totalAmount=0;
      for (const item in cartItems)
      {
        if(cartItems[item]>0){
          let itemInfo=all_data.find((product)=>product.id===Number(item));
          totalAmount+=itemInfo.new_price*cartItems[item];
        }
       
        
      }
      return totalAmount;
    } 
    console.log(getTotalAmount());
    
    const contextValue={all_data,getTotalAmount,addToCart,removeFromCart,cartItems};
   
  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;