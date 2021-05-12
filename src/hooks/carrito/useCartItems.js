import React, { useEffect, useState } from 'react'


export function useCartItems(){
    const [cartItems, setCartItems] = useState([]) 
 
        useEffect(() => {
        const data = localStorage.getItem('items-carrito-dishi')
        if(data){
            setCartItems(JSON.parse(data))
        }
        },[])

        useEffect(() => {
        localStorage.setItem('items-carrito-dishi', JSON.stringify(cartItems))
        })
       return [cartItems, setCartItems]
}
