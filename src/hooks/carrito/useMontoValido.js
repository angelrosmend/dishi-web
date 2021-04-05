import { useEffect, useState } from "react"

export function useMontoValido(totalFinal, descuentoPesos, subtotalMasCostoEnvio){

    const [validMontoEstado, setValidMontoEstado] = useState(1)
    const [validMontoTipo, setValidMontoTipo] = useState(totalFinal)

    useEffect(()=>{
        function updateMontoValido(estado, total, subtotal){
       
          if(estado === 1){
            setValidMontoTipo(total)
          }
          else if(estado === 2 || estado === 3){
           setValidMontoTipo(subtotal)
          }
        }
        updateMontoValido(validMontoEstado, totalFinal, subtotalMasCostoEnvio)
       
       }, [validMontoEstado, totalFinal, descuentoPesos, subtotalMasCostoEnvio])

    return [[validMontoEstado, setValidMontoEstado],[validMontoTipo, setValidMontoTipo]]
}