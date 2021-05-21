import {useEffect, useState} from 'react'
import axios from 'axios'
import { urlTienda } from '../../settings/requestSettings'
import { requestGlobalObject } from '../../helpers/requestObject'


export const useGetTienda = (id) => {
    const [state, setState] = useState({tienda: [], loading: true, error: ''})

    useEffect(() => {
        axios.post(urlTienda, {
            Id: id,
            AppDebug: false,
            ...requestGlobalObject
        })
             .then(response => {
                let resData = response.data.Sucursal
                 setState({
                          
                          tienda: {
                              data: response.data,
                              logo: resData.Logo,
                              nombre: resData.NombreFantasia,
                              email: resData.EmailCliente,
                              telefono: resData.TelefonoCliente,
                              whatsapp: resData.TelefonoCelular,
                              latitud: resData.Latitud,
                              longitud: resData.Longitud,
                              direccion: resData.Direccion,
                              descripcion: resData.SucursalDescripcion
                            },
                          loading: false, 
                          error: ''
                         })
             }).catch(error => {
                 setState({
                     tienda: {},
                     loading: false,
                     error: error
                 })
             });               
    }, [id]);
    return state
}

