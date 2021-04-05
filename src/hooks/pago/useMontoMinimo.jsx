import axios from "axios";
import { useEffect, useState } from "react";
import { urlProductos } from "../../settings/requestSettings";

export const useMontoMinimo =  (user, logged, estado, descuento) => {
    const [montoMinimo, setMontoMinimo] = useState(null)

    useEffect(() => {

        function updateMontoMinimo(estado , descuento, logged){
            if(logged){
                     
                if(estado === 3){
    
                    setMontoMinimo(descuento)
    
                
                }else if (user.SucursalCompraMontoMinimoCompra){
                setMontoMinimo(user.SucursalCompraMontoMinimoCompra)

                }else{
                    axios.post(urlProductos, {
                        "IdSucursal": 1,
                        "MobileMonoMarca": false,
                        "IdSucursalCompra": user.IdSucursalCompra,
                        "IdCategoria": 1
                })
                         .then(response => {
                             let result = response.data.Items[0]
                             const {Sucursal} = result
                             const {MontoMinimoCompra} = Sucursal
                             setMontoMinimo(MontoMinimoCompra)
                         }).catch(error => {
                             console.log(error)
                         });
                }
    
            }else{
            axios.post(urlProductos, {
                "IdSucursal": 1,
                "MobileMonoMarca": false,
                "IdSucursalCompra": 835,
                "IdCategoria": 1
        })
                 .then(response => {
                     let result = response.data.Items[0]
                     const {Sucursal} = result
                     const {MontoMinimoCompra} = Sucursal
                     setMontoMinimo(MontoMinimoCompra)
                 }).catch(error => {
                     console.log(error)
                 });   
                }         
        }
        updateMontoMinimo(estado, descuento, logged)   
    }, [user, estado]);
    return [montoMinimo, setMontoMinimo]
}