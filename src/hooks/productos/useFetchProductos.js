import axios from "axios";
import { useEffect, useState } from "react";
import { urlProductos } from "../../settings/requestSettings";

export const useFetchProductos = ( id, user, MobileUser) => {
    const IdSucursalCompra = user ? user.IdSucursalCompra : 835
    const [state, setState] = useState({productos: [], loading: true, error: ''})
    const [orderBy, setOrderBy] = useState({direction: '', field: ''})


    useEffect(() => {
        axios.post(urlProductos, {
            FilterIdCategoria: id,
            orderBy, 
            IdSucursalCompra, 
            MobileUser
             /* ...requestGlobalObject */
    })
             .then(response => {
                 let result = response.data.Items
                 /* let filtradoCategorias = result.filter(item => item.ProductoCategorias[0].Categoria.Id == id) */
                 setState({
                          productos: result,
                          loading: false, 
                          error: ''
                         })
             }).catch(error => {
                 setState({
                     productos: [],
                     loading: false,
                     error: error
                 })
             });               
    }, [id, user, orderBy]);
    return [state,setOrderBy]
}