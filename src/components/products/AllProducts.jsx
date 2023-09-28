import { useEffect, useState } from 'react'
import '../../App.css'
import ProductCard from './ProductCard.jsx';

function AllProducts( {setSelectedProductId} ) {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [category, setCategory] = useState('all');
    const [title, setTitle] = useState('');
         
    // FETCH ALL PRODUCTS
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/');
                const result = await response.json()
    
                setProducts(result)
            } catch (error) {
                console.error(error)
            }
        }
        fetchProducts()
    }, [])

// SELECT CATEGORY via BUTTON

const filteredCategory = products
    ? category === "all" // if category is all then return products
      ? products
      : products.filter((product) => product.category === category)
    : [];

// SEARCH PRODUCTS VIA SEARCH BOX

const filteredProducts = filteredCategory.filter(
    (product) =>
      product.description
        .toLowerCase()
        .includes(searchQuery.toLocaleLowerCase()) ||
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

    // useEffect(() => {
    //     const filtered = products.filter((product) =>
    //         product.title.toLowerCase().includes(searchQuery.toLowerCase())
    //     );
    //     setFilteredProducts(filtered);
    // }, [searchQuery, products]);


// SORT PRODUCTS BY PRICE

// if (sortPrice === "asc") {
//     console.log("asc has run");
//     filteredProducts.sort((a, b) => a.price - b.price);
//   } else if (sortPrice === "desc") {
//     filteredProducts.sort((a, b) => b.price - a.price);
//   }

    return (
        <>
<div className='search-category-container'>

{/* SEARCH TEXT BOX */}
            <div className="searchProducts"><input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
            <br />

{/* SELECT CATEGORY via BUTTONS */}

            <div className='category-selector'>
                
            <button
                className={`cat-btn ${
                  category === "all" ? "active-button" : ""
                }`}
                onClick={() => {
                  setTitle("All Products");
                  setCategory("all");
                }}
              >
                All
              </button>
              <button
                className={`cat-btn ${
                  category === "men's clothing" ? "active-button" : ""
                }`}
                onClick={() => {
                  setTitle("Men's Clothing");
                  setCategory(`men's clothing`);
                }}
              >
                Men
              </button>
              <button
                className={`cat-btn ${
                  category === "women's clothing" ? "active-button" : ""
                }`}
                onClick={() => {
                  setTitle("Women's Clothing");
                  setCategory(`women's clothing`);
                }}
              >
                Women
              </button>
              <button
                className={`cat-btn ${
                  category === "jewelery" ? "active-button" : ""
                }`}
                onClick={() => {
                  setTitle("Jewelery");
                  setCategory(`jewelery`);
                }}
              >
                Jewelery
              </button>
              <button
                className={`cat-btn ${
                  category === "electronics" ? "active-button" : ""
                }`}
                onClick={() => {
                  setTitle("Electronics");
                  setCategory(`electronics`);
                }}
              >
                Electronics
              </button>

            </div>
            </div>

{/* ALL PRODUCTS MAP */}
            <div className="product-container">
                    {filteredProducts.map((products) => {
                        return (
                        <ProductCard key={products.id} products={products} setSelectedProductId={setSelectedProductId}/> )
                    })}
            
            </div> 

            
        </>
    )
}

export default AllProducts