import axios from "axios";
import { useEffect, useState } from "react";
import { ordenamiento } from "../../helpers/filtros";
import { urlProductos } from "../../settings/requestSettings";

export const useFetchProductos = (id, MobileUser) => {
    
    const [state, setState] = useState({productos: [], loading: true, error: ''})
    const [orderBy, setOrderBy] = useState({direction: '', field: ''})

    const pagination = {PageFrom:0,
        PageCount:15,
        CalculateTotalRows:false,
        ReadCountMode:false}

    useEffect(() => {
        axios.post(urlProductos, {
            FilterIdCategoria: id,
            orderBy, 
            MobileUser,
             /* ...requestGlobalObject */
            ...pagination
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
                     productos: [],
                     loading: false,
                     error: error
                 })
             });               
    }, [id, orderBy]);
    return [state,setOrderBy]
}