import Button from "./button"
import "./Card.css"

function Card({type, price, image}) {
    console.log({type, price,image})
    return(
        <div className="card">
            <img src={image} alt="image of product" />
            <h1>type : {type}</h1>
            <h2>price : {price}</h2>
            <Button price={price}/>
        </div>
    )
}
export default Card