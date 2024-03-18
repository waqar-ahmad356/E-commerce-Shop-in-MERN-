import React from 'react'
import all_data from '../components/assets/all_product';
import { createContext } from 'react';
export const ShopContext=createContext(null);
const ShopContextProvider = (props) => {
   
    const contextValue={all_data};
  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;