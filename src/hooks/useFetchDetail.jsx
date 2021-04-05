import {useEffect, useState} from 'react'
import axios from 'axios'


export const useFetchDetail = (id, urlDetalle, user) => {
    const [state, setState] = useState({details: [], loading: true, error: ''})

    const IdSucursalConfig = user ? user.IdSucursalCompra : 835

    useEffect(() => {
        axios.post(urlDetalle, {
            "Id": id,
            "PaginationSettings": [],
            "IdSucursal": 1,
            "IdCategoria":1,
            "IdSucursalCompra": IdSucursalConfig,
            "ModeEmpresas": false,
            "MobileMonoMarca": true 
        })
             .then(response => {
                 setState({
                          details: response.data.Items,
                          loading: false, 
                          error: ''
                         })
             }).catch(error => {
                 setState({
                     details: {},
                     loading: false,
                     error: error
                 })
             });               
    }, [id, user]);
    return state
}

