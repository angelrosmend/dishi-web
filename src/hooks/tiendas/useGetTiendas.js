import {useEffect, useState} from 'react'
import axios from 'axios'
import { urlTienda, urlTiendas } from '../../settings/requestSettings'
import { requestGlobalObject } from '../../helpers/requestObject'
import { coordinatesToNumber } from '../../helpers/latlngToNumber'


export const useGetTiendas = (id) => {
    const [state, setState] = useState({tiendas: [], loading: true, error: ''})

    useEffect(() => {
        axios.post(urlTiendas, {
          /*   AppDebug: false, */
            PageFrom:0,
	        PageCount:20,
            IdCategoria: id,
            /* ...requestGlobalObject */
        })
             .then(response => {
                let resData = response.data.Sucursa
                let arrLatLng = []
                response.data.Items.forEach(item => arrLatLng.push(coordinatesToNumber(item.Latitud, item.Longitud)))
                 setState({
                          tiendas: response.data.Items,
                          direcciones: arrLatLng,
                          loading: false, 
                          error: ''
                         })
             }).catch(error => {
                 setState({
                     tiendas: {},
                     loading: false,
                     error: error
                 })
             });               
    }, [id]);
    return state
}

