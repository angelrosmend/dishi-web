import { useEffect, useState} from 'react'
import axios from 'axios'

export const usePromociones = (url, user) => {

    const IdSucursalConfig = user ? user.IdSucursalCompra : 835
    const userId = user && user.Id
    const userEmail = user && user.Email
    const userRolId = user && user.RolId
    const [promos, setPromos] = useState({data: [], loading: true, error: ''})
    const [orderBy, setOrderBy] = useState('PREDETERMINADO')

    const ordenamiento =  (res) => {

        const result = res && res;
        let Productos 

        switch (orderBy) {
            case 'PREDETERMINADO':
                 Productos = result.map(item => item.Promocion)
                break;
            case 'MAYOR': 
                Productos = result.map(item => item.Promocion).sort((menor, mayor) => mayor.Precio - menor.Precio);
                break;
            case 'MENOR':
                Productos = result.map(item => item.Promocion).sort((menor, mayor) => menor.Precio - mayor.Precio)
                break;
            case 'ALFABETO':
                Productos =  result.map(item => item.Promocion).sort((a, b) => a.Nombre.localeCompare(b.Nombre))
                break; 
            default:
                Productos =  result.map(item => item.Promocion)
                break;
        }

        return Productos
    }
    const {direction, field} = orderBy
    useEffect(() => {
        axios.post(url, {
            "PaginationSettings": [],
            "MobileUser": {
                "Id": userId,
                "Email": userEmail,
                "RolId": userRolId
            },
            "orderby": {
                "Direction": direction,
                "Field": field
            },
            "Filter": {
                "Text": ""
            },
            "APP_ConfigurationID": "20033",
            "Accuracy": "2555",
            "Alt": null,
            "AppDebug": false ,
            "AppVersion": "1.0.0,1.0.0",
            "Fecha": new Date().toISOString(),
            "FilterIdCategoria": null,
            "IdEmpresa": undefined,
            "IdSucursal": 1,
            "IdSucursalCompra":IdSucursalConfig,
            "Lat": -34.5009741,
            "Lng": -58.497270699999994,
            "MobileMonoMarca": false,
            "ModeEmpresas": false,
            "Monomarca":  false,
            "Platform": "Browser",
            "Id": 1204,
            "IdSucursal": 1,
            "IdCategoria": 1

    })
             .then(response => {
               
                 const result = response.data.Promociones.Items
                 const dataPromo = ordenamiento(result)
                 setPromos({
                          data: dataPromo,
                          loading: false, 
                          error: ''
                         })
             }).catch(error => {
                 console.log(error.message)
                 setPromos({
                     data: [],
                     loading: false,
                     error: error.message
                 })
             });               
    }, [url,user, orderBy]);
    return [promos, setOrderBy]
}