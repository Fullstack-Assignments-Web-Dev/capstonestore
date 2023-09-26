import '../App.css'
import { Link } from 'react-router-dom'
import LogoutButton from './buttons/LogoutButton'

export default function HeaderNav() {

    return (
      <>
      <div className='header-nav'>    
      <Link className="navbar-link" to="/">Home</Link>
      <Link className="navbar-link" to="/login">Log In</Link>
      <Link className="navbar-link" to="/register">Register</Link>
      <Link className="navbar-link" to="/cart">Cart</Link>
      <LogoutButton />
      </div>
      </>
    )
  }