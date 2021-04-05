import { useEffect, useState } from "react"

export function useSubtotalMasEnvio(costo, subtotal){
    const [subtotalMasCostoEnvio, setSubtotalMasCostoEnvio] =  useState(0)

    useEffect(() => {
    function updateSubtotalConCostoDeEnvio(subtotal, costo){
      let ammount = subtotal + costo
   
      setSubtotalMasCostoEnvio(parseFloat(ammount))
     }
     updateSubtotalConCostoDeEnvio(subtotal, costo)
     },[costo, subtotal])

     return [subtotalMasCostoEnvio, setSubtotalMasCostoEnvio]
}