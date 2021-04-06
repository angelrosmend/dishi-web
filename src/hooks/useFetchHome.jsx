import {useContext, useEffect, useState} from 'react'
import axios from 'axios'    
import{ requestGlobalObject }from '../helpers/requestObject.js'

export const useFetchHome = (url, MobileUser,user) => {

    const [state, setState] = useState({data: [], loading: true, error: ''})
      const IdSucursalCompra = user ? user.IdSucursalCompra : 835
  
    useEffect(() => {
        axios.post(url, {MobileUser,IdSucursalCompra,...requestGlobalObject})
             .then(response => {
                 setState({
                              data: {
                              banners: response.data.BannerData.Items,
                              categorias: response.data.Categorias.Items,
                              descuentos: response.data.Descuentos.Items,
                              destacados: response.data.Destacados.Items,
                              oportunidades: response.data.Oportunidades.Items,
                              promociones: response.data.Promociones.Items,
                              tiendas: response.data.Tiendas.Items,
                              promociones: response.data.Promociones.Items,
                          },
                          loading: false, 
                          error: ''
                         })
             }).catch(error => {
                 setState({
                     data: [],
                     loading: false,
                     error: error
                 })
             });               
    }, [url, user]);
    return state
}