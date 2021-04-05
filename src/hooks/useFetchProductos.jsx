import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchProductos = (url, id, user) => {
    const IdSucursalConfig = user ? user.IdSucursalCompra : 835
    const [state, setState] = useState({lista: [], productos: [], loading: true, error: ''})
    const [orderBy, setOrderBy] = useState({direction: '', field: ''})
    const {direction, field} = orderBy

    useEffect(() => {
        axios.post(url, {
            "IdSucursal": 1,
            "Id": 1204,
            "MobileMonoMarca": false,
            "IdSucursalCompra": IdSucursalConfig,
            "orderby": {
                "Direction": direction ,
                "Field": field
            },
            "IdCategoria": 1
    })
             .then(response => {
                 let result = response.data.Items
                 let filtradoCategorias = result.filter(item => item.ProductoCategorias[0].Categoria.Id == id)
                 setState({
                          lista: result,
                          productos: filtradoCategorias,
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
    }, [id, user, orderBy]);
    return [state,setOrderBy]
}