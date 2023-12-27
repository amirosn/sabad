import React from 'react'
import { useState } from 'react'
import "./Button.css"


const Button = ({price}) => {
    const [count, setNumber] = useState(1)
    
    const incNumber = () => {
        setNumber(count + 1)
    }

    const decNumber = () => {
        count > 1 ? setNumber(count - 1) : setNumber(count) 
    }

    const [sum, totalPrice] = useState(price)

    const incTot = ()=> {
        totalPrice(sum + price)
    }

    const decTot = ()=> {
        sum > price ? totalPrice(sum - price) : totalPrice(price)
    }
    
  return (
    <div className='setNumButton'>
        <button onClick={()=>{incNumber(); incTot()}}>+</button>
        <h2>{count}</h2>
        <button onClick={()=>{decNumber(); decTot()}}>-</button>
        <h2>total price: {sum}</h2>
        {console.log(sum)}
    </div>
  )
}

export default Button
