import { useEffect, useState} from 'react'
import axios from 'axios'
import { ordenamiento } from '../../helpers/filtros'
import { requestGlobalObject } from '../../helpers/requestObject'



export const useGrillaHome = (url, user, MobileUser) => {
    const [state, setState] = useState({productos: [], loading: true, error: ''})
    const IdSucursalCompra = user ? user.IdSucursalCompra : 835
    const [orderBy, setOrderBy] = useState('PREDETERMINADO')
    const pagination = {PageFrom:0,
                        PageCount:15,
                        CalculateTotalRows:false,
                        ReadCountMode:false}
    useEffect(() => {
        axios.post(url, 
           {IdSucursalCompra, 
            ...MobileUser,
            ...requestGlobalObject,
            ...pagination})
             .then(response => {
                 const result = response.data.Items
                 const listadoProductos = ordenamiento(result, orderBy)
                 setState({
                          productos: listadoProductos,
                          loading: false, 
                          error: ''
                         })
             }).catch(error => {
                 setState({
                     categorias: [],
                     loading: false,
                     error: error
                 })
             });               
    }, [user, orderBy]);
    return [state, setOrderBy]
}