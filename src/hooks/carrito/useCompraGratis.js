import { useEffect, useState } from "react"

export function useCompraGratis(cartItems, totalFinal, validMontoEstado){
    
const [compraGratis, setCompraGratis] = useState(false)

        useEffect(() => {
        function updateCompraGratisEstado(totalFinal) {
            if(totalFinal > 0){
            setCompraGratis(false)
            }else if(validMontoEstado === 3){
                setCompraGratis(true)
            }
        }
        updateCompraGratisEstado(totalFinal)
        },[cartItems, totalFinal])
        return[compraGratis, setCompraGratis]
}