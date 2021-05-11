import { useCallback, useContext, useMemo } from "react"
import { CartContext } from "../../context/CarritoContext"

export function useQuantity(id){

    const {CART_VALUES} = useContext(CartContext)
    const {cartItems} = CART_VALUES
    
    const mapCart = useCallback((cartItems)=> cartItems.map(item => item.id).includes(id), [])
    const inCart =  useMemo(()=>  mapCart(cartItems), [cartItems])

    const itemQuantity = useCallback((cartItems) => cartItems.map(itemCart => itemCart).find(item => item.id === id),[])
    const qty = useMemo(()=> itemQuantity(cartItems), [cartItems])
    const quantity= qty && qty.quantity

  return [inCart, quantity]
}