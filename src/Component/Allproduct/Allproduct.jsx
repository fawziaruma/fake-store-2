import { useEffect, useState } from "react"
import SingleProducts from "../Singleproduct/SingleProducts"

const Allproduct = () => {
    const [products, setProduct] = useState([])
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
  return (
    <div className="container" > 
        <div className="row " >
                {
                    products.map(product => <SingleProducts key={ product.id  } product={product} ></SingleProducts>)
                }
        </div>
    </div>
  )
}

export default Allproduct