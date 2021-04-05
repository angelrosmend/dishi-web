import {useEffect, useState} from 'react'
import axios from 'axios'

export const useFetchPromo = (url, id, user) => {

    const IdSucursalConfig = user ? user.IdSucursalCompra : 835

    const [state, setState] = useState({promociones: [],productos: [],  promocion: [],loading: true, error: ''})

    useEffect(() => {
        axios.post(url, {
        "MobileUser": {
            "Id": 0,
            "Email": "",
            "RolId": 0
        },
        "orderby": null,
        "Filter": {
            "Text": ""
        },
        "APP_ConfigurationID": "20033",
        "Accuracy": "2555",
        "Alt": null,
        "AppDebug": false,
        "AppVersion": "1.0.0,1.0.0",
        "Fecha": new Date().toISOString(),
        "FilterIdCategoria": null,
        "IdEmpresa": undefined,
        "IdSucursal": 1,
        "IdSucursalCompra": IdSucursalConfig,
        "Lat": -34.5009741,
        "Lng": -58.497270699999994,
        "MobileMonoMarca": true,
        "ModeEmpresas": false,
        "Monomarca": 1,
        "Platform": "Browser",
        "UnidadNegocioCaller": 201})
             .then(response => {
                 let result = response.data.Promociones.Items
                 let promo = result.find(item => item.Promocion.Id == id)
                 const {Promocion, Productos} = promo


                 setState({
                          promociones: promo,
                          promocion: Promocion,
                          productos: Productos,
                          loading: false, 
                          error: ''
                         })
             }).catch(error => {
                 setState({
                     promociones: [],
                     promcion: [],
                     productos: [],
                     loading: false,
                     error: error
                 })
             });               
    }, [id]);
    return state
}