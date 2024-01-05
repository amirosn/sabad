import React, { useState } from 'react'
import "./Products.css"

const Products = ({type, price, image}) => {
    const [array, setArray]=useState([])




  return (
    <div className='card-container'>
        <img src={image} alt="image of product" />
        <h1>type: {type}</h1>
        <h2>price: {price}</h2>
        <button className='addButton'>Add</button>
        
    </div>
  )
}

export default Products