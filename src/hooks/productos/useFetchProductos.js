import axios from "axios";
import { useEffect, useState } from "react";
import { urlProductos } from "../../settings/requestSettings";

export const useFetchProductos = (id, MobileUser) => {
    
    const [state, setState] = useState({productos: [], loading: true, error: ''})
    const [orderBy, setOrderBy] = useState({direction: '', field: ''})


    useEffect(() => {
        axios.post(urlProductos, {
            FilterIdCategoria: id,
            orderBy, 
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
    }, [id, orderBy]);
    return [state,setOrderBy]
}