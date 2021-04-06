import axios from "axios";
import { useEffect, useState } from "react";
import { requestGlobalObject } from "../helpers/requestObject";

export const useFetchCategorias = (urlCategorias, id) => {
    const [state, setState] = useState({categorias: [], loading: true, error: ''})

    useEffect(() => {
        axios.post(urlCategorias, {Id: id, ...requestGlobalObject})
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
