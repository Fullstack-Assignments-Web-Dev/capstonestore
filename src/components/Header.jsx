import '../index.css'
import HeaderNav from './HeaderNav.jsx';

import { useState, useEffect } from 'react';
import { isLoggedIn } from './AJAXhelper';


export default function Header() {
  const [authenticated, setAuthenticated] = useState(isLoggedIn());

  useEffect(() => {
    const checkAuthentication = () => {
      setAuthenticated(isLoggedIn());
    };
    window.addEventListener("authChange", checkAuthentication);
    return () => {
      window.removeEventListener('authChange', checkAuthentication);
    };
  }, []);


  return (
    <>

      <div className='header'>

        <div className='logo'>
          <img src="https://s3.us-west-1.amazonaws.com/rdelarosa.com/capstone/fakestore08.png" className="logo" alt="FakeStore Logo" />
        </div>

        <div className="navs">
          <HeaderNav authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </div>
  
      </div>
      
    
    </>
  )
}