import Card from "./components/Card"
import Button from "./components/button"
import "./App.css"
import Products from "./components/Products"


function App() {
    const costList = [
        {id : 1, type : "laptop", price : 1000, image : "src/assets/asus.jpg"},
        {id : 2, type : "phone", price : 800, image : "src/assets/iphone14.jpg" },
        {id : 3, type : "headset", price : 500, image : "src/assets/JBL.jpg"},
        {id : 4, type : "camera", price : 900, image : "src/assets/nikon.jpg"},
        
    ]
    
    return(
        <div className="container">
        <article className="basket">
            <h1><b>Basket</b></h1>
            {
                costList.map( item => {
                    // return( <Card type={item.type} price={item.price}
                           return <Card key={item.id} type={item.type} price={item.price} image={item.image} />}
            )}

             <h1>Total Price : </h1>              
            
        </article>

        <section className="products">
            <h1><b>Products</b></h1>
            {
                costList.map( item => {
                    
                           return (
                            <Products key={item.id} type={item.type} price={item.price} image={item.image} />
                            

                )}
            )}
                           
        </section>
        </div>
    )
}

export default App
