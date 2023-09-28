import '../App.css'
import { NavLink } from 'react-router-dom'
import LogoutButton from './buttons/LogoutButton'
import { isLoggedIn } from './AJAXhelper'


export default function HeaderNav() {
      
    return (
      <>
      <div className='header-nav'>    
      <NavLink className="navbar-link" to="/">Home</NavLink>
      
{ isLoggedIn() ? (
      <>
      <NavLink className="navbar-link" to="/cart">Cart</NavLink>
      <NavLink className="navbar-link" to="/checkout">Checkout</NavLink>
      <LogoutButton />
      </>    

) : (
      <>
      <NavLink className="navbar-link" to="/login">Log In</NavLink>
      <NavLink className="navbar-link" to="/register">Register</NavLink>
      </>
        
  )
}
      </div>

      </>
    )
  }