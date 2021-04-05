import {useEffect, useState} from 'react'
import axios from 'axios'

export const useFetchRecetas = (url, config) => {

    const [state, setState] = useState({recetas: [], loading: true, error: ''})

    useEffect(() => {
        axios.post(url, config)
             .then(response => {
                 setState({
                          recetas: response.data.items,
                          loading: false, 
                          error: ''
                         })
             }).catch(error => {
                 setState({
                     data: {},
                     loading: false,
                     error: error
                 })
             });               
    }, [url]);
    return state
}