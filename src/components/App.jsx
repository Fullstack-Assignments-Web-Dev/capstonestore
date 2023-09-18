import Header from './Header.jsx'
import AllProducts from './AllProducts.jsx'
import SelectedProduct  from './SelectedProduct.jsx';
import '../style/App.css'
import { useState } from "react";




export default function App () {

  const [selectedProductId, setSelectedProductId] = useState(null);

  return (
  <>

<div className="app">

  <Header />
  <div className="container">

{selectedProductId ? (
  <SelectedProduct selectedProductId={selectedProductId}
   setSelectedProductId={setSelectedProductId}
  />

) : (

<AllProducts setSelectedProductId={setSelectedProductId} />

)

}

</div>

</div>
  

  </>
)}