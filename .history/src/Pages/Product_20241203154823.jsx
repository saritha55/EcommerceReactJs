import React,{useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'

const Product = () => {
 const {all_product} = useContext(ShopContext);
 const {productId} = useParams();
 const product = all_product.find((e)=> e.id === productId)
  return (
    <div className='product'>
      
    </div>
  )
}

export default Product
