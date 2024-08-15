import React, { useContext } from 'react'
import './ProductDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import ProductItem from '../ProductItem/ProductItem'

function ProductDisplay({category}) {
    const {product_list} =useContext(StoreContext)
  return (
    <div className='product_display' id='product_display'>
        <h2>Top product for you</h2>
<div className="product_display_list">
    {product_list.map((item,index)=>{
      if (category==="All" || category===item.category) {
        return <ProductItem key={index} id={item.id} name={item.name} description={item.description} price={item.price}  image={item.image} />
        
      }
    })}
</div>
    </div>
  )
}

export default ProductDisplay