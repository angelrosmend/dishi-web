import {useContext, useEffect, useState} from 'react'
import axios from 'axios'

export const useFetchHome = (url,user) => {

    const [state, setState] = useState({data: [], loading: true, error: ''})
      const IdSucursalConfig = user ? user.IdSucursalCompra : 835
     const userId = user && user.Id
     const userEmail = user && user.Email
     const userRolId = user && user.RolId
    
    useEffect(() => {
        axios.post(url, {
            "PaginationSettings": [
                {
                    "Id": 0,
                    "PageFrom": 0,
                    "PageCount": 10
                },
                {
                    "Id": 1,
                    "PageFrom": 0,
                    "PageCount": 10
                },
                {
                    "Id": 2,
                    "PageFrom": 0,
                    "PageCount": 10
                },
                {
                    "Id": 3,
                    "PageFrom": 0,
                    "PageCount": 10
                },
                {
                    "Id": 4,
                    "PageFrom": 0,
                    "PageCount": 10
                },
                {
                    "Id": 5,
                    "PageFrom": 0,
                    "PageCount": 10
                },
                {
                    "Id": 6,
                    "PageFrom": 0,
                    "PageCount": 10
                }
            ],
            "MobileUser": {
                "Id": userId,
                "Email": userEmail,
                "RolId": userRolId
            },
            "orderby": {
                "Direction": '',
                "Field": ''
            },
            "Filter": {
                "Text": ""
            },
            "APP_ConfigurationID": "20033",
            "Accuracy": "2555",
            "Alt": null,
            "AppDebug": true ,
            "AppVersion": "1.0.0,1.0.0",
            "Fecha": "2021-01-13T20:50:06.115Z",
            "FilterIdCategoria": null,
            "IdEmpresa": undefined,
            "IdSucursal": 1,
            "IdCategoria:": 1,
            "IdSucursalCompra":IdSucursalConfig,
            "Lat": -34.5009741,
            "Lng": -58.497270699999994,
            "MobileMonoMarca": true,
            "MobileUser": null,
            "ModeEmpresas": false,
            "Monomarca": 1,
            "Platform": "Browser",
            "UnidadNegocioCaller": 201      
    })
             .then(response => {
                 setState({
                              data: {
                              response: response,
                              banners: response.data.BannerData.Items,
                              categorias: response.data.Categorias.Items,
                              descuentos: response.data.Descuentos.Items,
                              destacados: response.data.Destacados.Items,
                              oportunidades: response.data.Oportunidades.Items,
                              promociones: response.data.Promociones.Items,
                              tiendas: response.data.Tiendas.Items,
                              promociones: response.data.Promociones.Items,
                              configRaw: response.config.data
                          },
                          loading: false, 
                          error: ''
                         })
             }).catch(error => {
                 setState({
                     data: [],
                     loading: false,
                     error: error
                 })
             });               
    }, [url, user]);
    return state
}