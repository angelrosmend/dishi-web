import {useEffect, useState} from 'react'
import axios from 'axios'
import { requestGlobalObject } from '../helpers/requestObject'


export const useFetchDetail = (id, urlDetalle, user, MobileUser) => {
    const [state, setState] = useState({details: [], loading: true, error: ''})

    const IdSucursalCompra = user ? user.IdSucursalCompra : 835

    useEffect(() => {
        axios.post(urlDetalle, {
            Id: id,
            IdSucursalCompra,
            MobileUser,
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

