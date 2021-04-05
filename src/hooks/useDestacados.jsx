import { useEffect, useState} from 'react'
import axios from 'axios'
import { ordenamiento } from '../helpers/filtros'

export const useDestacados = (url, user) => {

    const IdSucursalConfig = user ? user.IdSucursalCompra : 835
    const userId = user && user.Id
    const userEmail = user && user.Email
    const userRolId = user && user.RolId
    const [destacados, setDestacados] = useState({data: [], loading: true, error: ''})
    const [orderBy, setOrderBy] = useState('PREDETERMINADO')

   
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
            "APP_ConfigurationID": "20033",
            "Accuracy": "2555",
            "Alt": null,
            "AppDebug": false ,
            "AppVersion": "1.0.0,1.0.0",
            "Fecha": new Date().toISOString(),
            "IdEmpresa": undefined,
            "IdSucursal": 1,
            "IdSucursalCompra":IdSucursalConfig,
            "Lat": -34.5009741,
            "Lng": -58.497270699999994,
            "MobileMonoMarca": false,
            "ModeEmpresas": false,
            "Monomarca": false,
            "Platform": "Browser",
            "IdSucursal": 1,


    })
             .then(response => {
                 console.log(response)
               
                 const result = response.data.Destacados.Items
                 const dataPromo = ordenamiento(result, orderBy)

                 setDestacados({
                          data: dataPromo,
                          loading: false, 
                          error: ''
                         })
             }).catch(error => {
                 console.log(url)
                 console.log(error.message)
                 setDestacados({
                     data: [],
                     loading: false,
                     error: error.message
                 })
             });               
    }, [url,user, orderBy]);
    return [destacados, setOrderBy]
}