import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
       <hr />
       <div className="relatedproducts-item">
        {data_product.map((item,i)=>{
            return <Item/>
        })}
       </div>
    </div>
  )
}

export default RelatedProducts
