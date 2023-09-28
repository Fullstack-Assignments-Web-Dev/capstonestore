import '../../App.css'
import { useState, useEffect, } from 'react';


const SelectedProduct = ( {selectedProductId, setSelectedProductId } ) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${selectedProductId}`);
        const result = await response.json();
        
        setProduct(result);
        console.log()
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();}, [selectedProductId]);

    console.log(selectedProductId);
    

    return (
      <>
      
    <div id="single">
      {product ? (
        <>
 
 <div className="return-button">
      <button onClick={() => setSelectedProductId(null)}>Return</button>
      </div>
 
          <img className="detail-image" src={product.image}/>
 
        <div className="deets">
        
          <p>{product.title}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
          <p>Desicription{product.description}</p>
          <p>Category: {product.category}</p>
          <p>Rating: {product.rating.rate}</p>
          <p>Rate Count: {product.rating.count}</p>
          <button>Add to Cart</button>

       

      

          </div>

      
          <br/><br/>
        </>
      ) : (
        <p>Loading...</p>
      )}

    </div>

    </>
  );
};

export default SelectedProduct;