import { useEffect, useState } from 'react'
import '../../App.css'

    export default function Cart() {
        const [cart, setCart] = useState([])


        const fetchCart = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/carts/user/2', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const data = await response.json()
                setCart(data)
                console.log(data)
            }
            catch (error) {
                console.log(error)
                  
        }}

        useEffect(() => {
            fetchCart()
        } , []);


    return (
        <>  
        <h2>Cart</h2>        
        </>
    )
  }