import { useCallback, useMemo } from "react"

export function useQuantity(cartItems, id){
    const mapCart = useCallback((cartItems)=> cartItems.map(item => item.id).includes(id), [])
    const inCart =  useMemo(()=>  mapCart(cartItems), [cartItems])

    const itemQuantity = useCallback((cartItems) => cartItems.map(itemCart => itemCart).find(item => item.id === id),[])
    const qty = useMemo(()=> itemQuantity(cartItems), [cartItems])
    const quantity= qty && qty.quantity

  return [inCart, quantity]
}