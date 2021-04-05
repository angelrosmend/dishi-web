import { useEffect, useState } from "react"


export  function useTotalFinal(subtotalMasCostoEnvio, descuentoPesos){

  const [totalFinal, setTotalFinal] = useState(0)

   useEffect(() => {
   function getTotalFinal(subtotal, descuento) {
      if (descuento >= subtotal){
      setTotalFinal(0)
      }else{
        let ammount = Number(subtotal) - descuento
         setTotalFinal(ammount)
      }
    }
    getTotalFinal(subtotalMasCostoEnvio, descuentoPesos)
  
  }, [descuentoPesos, subtotalMasCostoEnvio])

  return totalFinal
}