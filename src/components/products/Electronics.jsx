import { useEffect, useState } from 'react'
import '../../App.css'
import ProductCard from './ProductCard.jsx';


function Electronics( {setSelectedProductId} ) {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/category/electronics');
                const result = await response.json()
                // console.table(result)
                setProducts(result)
            } catch (error) {
                console.error(error)
            }
        }
        fetchProducts()
    }, [])

    useEffect(() => {
        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [searchQuery, products]);

    return (
        <>

            <div className="searchProducts"><input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
            <br />
            <div className="container">
                    {filteredProducts.map((products) => {
                        return (
                        <ProductCard key={products.id} products={products} setSelectedProductId={setSelectedProductId}/> )
                    })}
            
            </div> 
        </>
    )
}

export default Electronics