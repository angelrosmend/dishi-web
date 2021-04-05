import { useEffect, useState } from "react";
import { formatter } from "../../helpers/NumberFormatter";


export function useSubtotal(cartItems){
    const [subtotal, setSubtotal] = useState(0)

    useEffect(() => {
        function subtotalPrecio(cartItems) {
          let ammount = cartItems.reduce(function (acc, item) {
            acc += item.precio * item.quantity;
            return  acc;
          }, 0)
          setSubtotal(parseFloat(formatter.format(ammount).replace(/,/, '')))
        }
        subtotalPrecio(cartItems)
      
      }, [cartItems])

      const numeroDeItems =  cartItems.reduce((acc, item) => acc + item.quantity, 0) 

      return [subtotal, numeroDeItems]
}