import { useEffect, useState } from 'react'
import '../../App.css'

export default function Cart() {
    const [cart, setCart] = useState([])


    const fetchCart = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/carts/user/1', {
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

        }
    }

    useEffect(() => {
        fetchCart()
    }, []);


    return (
        <div>
            <h1>Cart</h1>
            <div className="cart">

                <div className="cart-header">
                    <h2>Cart Items</h2>
                </div>


            </div>
        </div>  
             
    )                    
        }