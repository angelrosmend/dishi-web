import {useEffect, useState} from 'react'
import axios from 'axios'


export const useFetchCostoEnvio = (url, items, total) => {
    const [state, setState] = useState({envio: {}, loading: true, error: ''})
    const [itemsConfig, setItemsConfig] = useState([])
     
   useEffect(() => {
    const itemsCosto = items.map(item =>  {
      return {IdItem: item.id,
              Tipo: item.Tipo,
              Quantity: item.quantity,
              Precio: item.precio,
              ValorParaCajaDelivery: item.ValorParaCajaDelivery}
      });
    setItemsConfig(itemsCosto)
  
   }, [items])
   

    const configEnvio =             
    {Items: itemsConfig , /* <--- ITEMS EN EL CARRITO */
    Total: total,
    MobileMonoMarca: true,
    MobileUser: {
      Id: 8026,
      Email: "dbertero@clickaut.com",
      RolId: 4
    },
    APP_ConfigurationID: 20034,
    Fecha: "2021-02-11T13:42:05.082Z",
    AppVersion: "1.0.0,1.0.0",
    IdSucursal: 1,
    IdSucursalCompra: 835,
    Platform: "Browser"}

   
    useEffect(() => {
        axios.post(url,configEnvio)
          
             .then(response => {
                 setState({
                          envio: response.data,
                          loading: false, 
                          error: ''
                         })
             }).catch(error => {
                 setState({
                     envio: {},
                     loading: false,
                     error: error
                 })
             });               
    }, [itemsConfig]);
    return state
}

