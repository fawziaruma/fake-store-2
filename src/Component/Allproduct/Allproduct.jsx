import { useEffect, useState } from "react"
import SingleProducts from "../Singleproduct/SingleProducts"

const Allproduct = (props) => {
   const{setCartCount} =props
  
    const [products, setProduct] = useState([])
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProduct(data))
    },  [  ])
  return (
    <div className="container" > 
        <div className="row pt-5  " >
                {
                    products.map(product => <SingleProducts key={ product.id  } product={product} setCartCount={setCartCount} ></SingleProducts>)
                }
        </div>
    </div>
  )
}

export default Allproduct