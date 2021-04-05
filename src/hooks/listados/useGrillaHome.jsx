import { useEffect, useState} from 'react'
import axios from 'axios'
import { ordenamiento } from '../../helpers/filtros'



export const useGrillaHome = (url, user) => {
    const [state, setState] = useState({productos: [], loading: true, error: ''})
    const IdSucursalConfig = user ? user.IdSucursalCompra : 835
    const [orderBy, setOrderBy] = useState('PREDETERMINADO')
    useEffect(() => {
        axios.post(url, {
            "IdSucursal": 1,
            "Id": 1204,
            "MobileMonoMarca": true,
            "IdSucursalCompra": IdSucursalConfig,
            "IdCategoria": 1
    })
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