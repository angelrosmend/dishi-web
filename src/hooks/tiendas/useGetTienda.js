import {useEffect, useState} from 'react'
import axios from 'axios'
import { requestGlobalObject } from '../helpers/requestObject'


export const useGetTienda = (id) => {
    const [state, setState] = useState({details: [], loading: true, error: ''})

    const IdSucursalCompra = user ? user.IdSucursalCompra : 835

    useEffect(() => {
        axios.post(urlDetalle, {
            Id: id,
            ...requestGlobalObject
        })
             .then(response => {
                 setState({
                          details: response.data.Items[0],
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

