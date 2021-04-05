import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchCategorias = (urlCategorias, id) => {
    const [state, setState] = useState({categorias: [], loading: true, error: ''})

    useEffect(() => {
        axios.post(urlCategorias, {
            "Id": id,
            "PaginationSettings": [],
            "IdSucursal": 1,
            "IdCategoria":1,
            "IdSucursalCompra": 0,
            "SucursalCompra": null,
            "ModeEmpresas": false,
            "MobileMonoMarca": true 
    })
             .then(response => {
                 let result = response.data;
                let res = result.find(item => item.Id == id)
                 setState({
                          categorias: res,
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
    }, [id]);
    return state
}
