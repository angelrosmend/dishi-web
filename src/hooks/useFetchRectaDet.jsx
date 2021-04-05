import {useEffect, useState} from 'react'
import axios from 'axios'

export const useFetchRecetaDet = (url, id) => {

    const [state, setState] = useState({receta: [], loading: true, error: ''})

    useEffect(() => {
        axios.post(url, {
            "Headers": false,
            "IdSeccionesNoticias": null,
            "IdNoticia": id,
            "APP_ConfigurationID": "20007",
            "Platform": "Browser",
            "AppDebug": true,
            "PageFrom": 0,
            "PageCount": 1
    
        })
             .then(response => {
                 
                 setState({
                          receta: response.data.items[0],
                          loading: false, 
                          error: ''
                         })
             }).catch(error => {
                 setState({
                     receta: {},
                     loading: false,
                     error: error
                 })
             });               
    }, [url, id]);
    return state
}