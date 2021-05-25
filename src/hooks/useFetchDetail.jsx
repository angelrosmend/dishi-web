import {useEffect, useState} from 'react'
import axios from 'axios'
import { requestGlobalObject } from '../helpers/requestObject'
import { urlProductos } from '../settings/requestSettings'


export const useFetchDetail = (id, user, MobileUser) => {
    const [state, setState] = useState({details: [], loading: true, error: ''})

    const IdSucursalCompra = user ? user.IdSucursalCompra : 835

    useEffect(() => {
        axios.post(urlProductos, {
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

