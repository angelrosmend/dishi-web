import { useEffect, useState } from "react";

export function useItemsConfig(cartItems){

    const [itemsConfig, setItemsConfig] = useState([])

    useEffect(() => {
    const itemsCosto = cartItems.map(item =>  {
        return {IdItem: item.id,
                Tipo: item.Tipo,
                Quantity: item.quantity,
                Precio: item.precio,
                ValorParaCajaDelivery: item.ValorParaCajaDelivery}
        });
    setItemsConfig(itemsCosto)
    }, [cartItems])
    return itemsConfig
}