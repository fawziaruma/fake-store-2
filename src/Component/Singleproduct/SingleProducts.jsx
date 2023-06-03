

const componentName = (props) => {
    const{setCartCount} =props
   
    const { image , title}= props.product
    return (
        
        <>
        <div className="card p-3 border col-4  col-sm-12 " >
            <img className="w-25 m-auto" src={image}  />
            <h1>{title.slice(0,10)}</h1>
            <div className="d-flex justify-content-around" >
                <button onClick={setCartCount} className="btn btn-success" >Add to Cart </button>
                <button className="btn btn-danger" >delete</button>
            </div>

        </div>
        
        </>
    );
};

export default componentName;