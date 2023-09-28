/* eslint-disable react/prop-types */
import '../../App.css'


export default function ProductCard({ setSelectedProductId, products, }) {
    return (
        <>
        <div className="prodCard" key={products.id} onClick={() =>
            setSelectedProductId(products.id)}>
            <img className="thumbnail" key={products.image} src={products.image}/>
            <div className="prodTitle" key={products.title}>{products.title}</div>
            <div className="prodRate" key={products.rating.rate}>Rate: {products.rating.rate}</div>
            <div className="prodPrice" key={products.price}>${products.price.toFixed(2)}</div>
            <button>Add to Cart</button>
            </div>
            </>
    );
  }