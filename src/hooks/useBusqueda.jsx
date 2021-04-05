import {useEffect, useState} from 'react'
import axios from 'axios'
import { urlBusqueda, urlProductos, urlPromociones } from '../settings/requestSettings'


export const useBusqueda = (keyWord, user) => {
    const [state, setState] = useState({data: [], loading: true, error: ''})

    const IdSucursalConfig = user ? user.IdSucursalCompra : 835

    
    const requestConfig = {
        PaginationSettings: [],
        IdSucursal: 1,
        Filter: {
             Text: keyWord,
             SucursalesFilter:''
        },
        ModeEmpresas: false,
        MobileMonomarca: false,
        IdSucursalCompra: IdSucursalConfig
    }

    const requestHomeFilter = axios.post(urlBusqueda, requestConfig)
    const requestProductsfilter = axios.post(urlProductos, requestConfig)


    useEffect(() => {
        if(keyWord.length > 1){
        axios.all([requestHomeFilter, requestProductsfilter])
             .then(axios.spread((...response) => {
                 console.log('busqueda',response)
                const results = { ...response[0].data, Productos: response[1].data}
                 setState({
                          data:results,
                          loading: false, 
                          error: ''
                         })
                        
                         
             })).catch(error => {
                 console.log('catch',error)
                 setState({
                     data: [],
                     loading: false,
                     error: error
                 })
             });
        }else{
            setState({
                data:'',
                loading: false, 
                error: ''
               })
        }               
    }, [keyWord, user]);
    return state
}

