import { useEffect, useState } from "react"


export function useDescuentoPorcentaje(subtotalMasCostoEnvio,descuentoPesos, setDescuentoPesos) {
    const [porcentaje, setPorcentaje] = useState(null)
    useEffect(() => {
    function updateDescuento(porcentaje, subtotal){
    if(porcentaje){
    setDescuentoPesos(parseFloat((porcentaje * subtotal) / 100))
    }
    }
    updateDescuento(porcentaje, subtotalMasCostoEnvio)
    }, [subtotalMasCostoEnvio, porcentaje, descuentoPesos])
    
    return [porcentaje, setPorcentaje]
}