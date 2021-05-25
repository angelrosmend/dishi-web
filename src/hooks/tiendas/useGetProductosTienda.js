import axios from "axios";
import { useEffect, useState } from "react";
import { urlProductos } from "../../settings/requestSettings";

export const useProductosTienda = (id) => {
        const [state, setState] = useState({
                                            productos: [],
                                            loading: true, 
                                            error: ''
                                           })

    useEffect(() => {
        axios.post(urlProductos, {
            IdSucursal: id,
             })
             .then(response => {
                 let result = response.data.Items
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
    }, [id]);
    return state
}