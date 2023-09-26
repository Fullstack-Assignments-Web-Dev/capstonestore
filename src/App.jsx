import Header from './components/Header.jsx'
import AllProducts from './components/products/AllProducts.jsx'
import SelectedProduct from './components/products/SelectedProduct.jsx';
import './App.css'
import { useState } from "react";
import { Routes, Route } from 'react-router-dom'
import Electronics from './components/products/Electronics.jsx'
import Jewelry from './components/products/Jewelry.jsx'
import MenClothing from './components/products/MensClothing.jsx'
import WomenClothing from './components/products/WomensClothing.jsx'
import Cart from './components/cart/Cart.jsx'
import RegisterForm from './components/forms/RegisterForm.jsx'
import LoginForm from './components/forms/LoginForm.jsx'

export default function App() {
  const [selectedProductId, setSelectedProductId] = useState(null);

  return (
    <>
      <div className="app">      
        <Header />
        <div className="container">
          <div className='selected-product-container'>
            {selectedProductId ? (
              <SelectedProduct selectedProductId={selectedProductId}
                setSelectedProductId={setSelectedProductId}/>
            ) : (
              <>
              
              <Routes>
              <Route path="/" element={<AllProducts setSelectedProductId={setSelectedProductId} />} />
              <Route path="/selectedproduct/:id" element={<SelectedProduct />} />
              <Route path="/electronics" element={<Electronics />} />
              <Route path="/jewelry" element={<Jewelry />} />
              <Route path="/mensclothing" element={<MenClothing />} />
              <Route path="/womensclothing" element={<WomenClothing />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/login" element={<LoginForm />} />       
            </Routes>
            </>
            )
            }
          </div>
        </div>



      </div>


    </>
  )
}