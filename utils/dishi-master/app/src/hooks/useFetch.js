import {useEffect, useState} from 'react'
import axios from 'axios'

export const useFetch = (url, config) => {

    const [state, setState] = useState({data: {}, loading: true, error: ''})

    useEffect(() => {
        axios.post(url, config)
             .then(response => {
                 setState({
                          data: {
                              response: response,
                              banners: response.data.BannerData.Items,
                              categorias: response.data.Categorias.Items,
                              descuentos: response.data.Descuentos.Items,
                              destacados: response.data.Destacados.Items,
                              oportunidades: response.data.Oportunidades.Items,
                              promociones: response.data.Promociones.Items,
                              tiendas: response.data.Tiendas.Items,
                          },
                          loading: false, 
                          error: ''
                         })
             }).catch(error => {
                 setState({
                     data: {},
                     loading: false,
                     error: error
                 })
             });               
    }, [url]);
    return state
}