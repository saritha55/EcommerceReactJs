import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'

const CartItems = () => {
  const {all_product,CartItems,removeFromCart} = useContext(ShopContext);
    return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        <div className="cartItems-format">
            <img src="" alt="" className='carticon-product-icon'/>
            <p></p>
            <p></p>
            <button className='cartitems-quantity'></button>
            <p></p>
            <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default CartItems
