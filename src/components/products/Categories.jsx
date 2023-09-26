import '../../App.css'
import { Link } from 'react-router-dom'



export default function Categories() {

    return (
        <>  
<div className='categories-container'>
      <Link className="navbar-link" to="/electronics">Electronics</Link>
      <Link className="navbar-link" to="/jewelry">Jewelry</Link>
      <Link className="navbar-link" to="/mensclothing">Men's Clothing</Link>
      <Link className="navbar-link" to="/womensclothing">Women's Clothing</Link>
      <Link className="navbar-link" to="/">All Products</Link>
        </div>
        </>

    )
  }