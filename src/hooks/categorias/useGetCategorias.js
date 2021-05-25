import axios from "axios";
import { useEffect, useState } from "react";
import { requestGlobalObject } from "../../helpers/requestObject";
import { urlCategorias } from "../../settings/requestSettings";

export const useGetCategorias = () => {
    const [state, setState] = useState({categorias: [], loading: true, error: ''})

    useEffect(() => {
        axios.post(urlCategorias, { ...requestGlobalObject})
             .then(response => {
                 setState({
                          categorias: response.data,
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
    }, []);
    return state
}
