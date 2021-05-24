import axios from "axios";
import { useEffect, useState } from "react";
import { requestGlobalObject } from "../helpers/requestObject";

export const useFetchProductos = (url, id, user, MobileUser) => {
    const IdSucursalCompra = user ? user.IdSucursalCompra : 835
    const [state, setState] = useState({lista: [], productos: [], loading: true, error: ''})
    const [orderBy, setOrderBy] = useState({direction: '', field: ''})


    useEffect(() => {
        axios.post(url, {
            /* Id: 1201, */
            orderBy, IdSucursalCompra, MobileUser,  ...requestGlobalObject
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