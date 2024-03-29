import React, { useContext } from 'react';
import './CartItems.css';
import remove_icon from '../assets/cart_cross_icon.png';
import { ShopContext } from '../../context/ShopContext';
import all_product from '../assets/all_product';

const CartItems = () => {
  const {getTotalAmount,cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {Object.keys(cartItems).map((itemId) => {
        const product = all_product.find((item) => item.id === parseInt(itemId));
        if (cartItems[itemId] > 0 && product) {
          return (
            <div key={itemId}>
              <div className='cartitems-format cartitems-format-main'>
                <img src={product.image} alt='' className='carticon-product-icon' />
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[itemId]}</button>
                <p>${product.new_price * cartItems[itemId]}</p>
                <img className='cartitems-remove-icon'
                  src={remove_icon}
                  onClick={() => removeFromCart(itemId)}
                  alt=''
                />
              </div>
              <hr />
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className='cartitems-down'>
        <div className='cartitems-total'>
            <h1>Cart Totals</h1>
            <div >
                <div className='cartitems-total-items'>
                    <p>Sub Total</p>
                    <p>${getTotalAmount()}</p>
                </div>
                <hr />
                <div className='cartitems-total-items'>
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr/>
                <div className='cartitems-total-items'>
                    <h3>Total</h3>
                    <h3>${getTotalAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cartitems-promo-code'>
            <p>If you have promo code, Enter it here</p>
            <div className='cartitems-promobox'>
            <input type='text' placeholder='enter promo code'></input>
            <button>Submit</button>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default CartItems;
