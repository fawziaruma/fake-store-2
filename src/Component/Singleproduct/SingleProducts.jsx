import ReactModal from "../ReactModal.js/ReactModal";


const componentName = (props) => {
    const{setCartCount} =props
   
    const { image , title}= props.product
    return (
        
        <>
        <div 
         data-aos="fade-up"
         data-aos-duration="3000"
    
         className="card p-3 border col-6  "
         >
           
        <img className="w-25 m-auto" src={image}  />
            <h1>{title.slice(0,10)}</h1>
            <div className="d-flex justify-content-around" >
                <button onClick={setCartCount} className="btn btn-success" >Add to Cart </button>
                <button className="btn btn-danger" >delete</button>
                <ReactModal  product={props.product}  ></ReactModal>
            </div>
        </div>
        
        </>
    );
};

export default componentName;