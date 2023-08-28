import React, { useEffect, useState } from 'react'
import '../style/App.css'

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/');
                const result = await response.json()
                // console.table(result)
                setProducts(result)
            } catch (err) {
                console.error(err)
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
                        <div className="prodContainer">
                         <div className="prodCard" key={products.id} onClick={() =>
                            setSelectedProductId(products.id)}>
                            <img className="thumbnail" key={products.image} src={products.image}/>
                            <div className="prodTitle" key={products.title}>{products.title}</div>
                            </div>
                        </div>
                    )
                })}
            
            </div>       
        </>
    )
}

export default AllProducts