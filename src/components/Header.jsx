import '../index.css'
import HeaderNav from './HeaderNav.jsx';
import Categories from './products/Categories.jsx';




export default function Header() {

  return (
    <>

      <div className='header'>

        <div className='logo'>

          <img src="https://s3.us-west-1.amazonaws.com/rdelarosa.com/capstone/fakestore08.png" className="logo" alt="FakeStore Logo" />

        </div>
        <div>
          
          <div className="navs">
            <HeaderNav />

          </div>



        </div>
        <Categories />
      </div>
    </>
  )
}