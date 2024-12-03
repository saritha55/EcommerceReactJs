import React from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"

const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />

            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>

        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old"> ${product.old_price} </div>
            <div className="productdisplay-right-price-new"> $(product.new_price) </div>

        </div>
        <div className="productdisplay-right-description">
        Elevate your everyday style with our classic cotton t-shirt, designed for ultimate comfort and durability. Featuring a versatile fit and available in a range of vibrant colors, it’s perfect for casual outings or layering. Crafted with breathable fabric, this wardrobe essential keeps you cool and stylish all day long. 
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-size">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category :</span>Women, T-Shirt, Crop Top</p>
        <p className="productdisplay-right-category"><span>Category :</span>Women, T-Shirt, Crop Top</p>

      </div>
    </div>
  )
}

export default ProductDisplay
