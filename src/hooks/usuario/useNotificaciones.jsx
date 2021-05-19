import {useEffect, useState} from 'react'
import axios from 'axios'
import { urlNotificaciones, urlNotificacionesSinLeer } from '../../settings/requestSettings'


export const useNotificaciones = (user, logged) => {
    const [state, setState] = useState({notificaciones: [], cantidad: 0, loading: true, error: ''})
    const [notificacionesVisibles, setNotificacionesVisibles] = useState(3)
    const countNotificaciones = [notificacionesVisibles, setNotificacionesVisibles]

    const User = user && user
    const IdSucursalCompra = User? User.IdSucursalCompra : 835
    const IdUser = user && user.Id
    const EmailUser = user && user.Email
    const RolUser = user && user.RolId
    const DNIUser = user && user.DNI

     

    const requestConfig = {MobileUser:
                    {Id:IdUser,
                        Email:EmailUser,
                        RolId:RolUser,
                        DNI:DNIUser},
                orderby:{Direction:"DESC",
                         Field:"FechaAlta"},
                NoLeidas:null,
                SESSIONID:null,
                APP_ConfigurationID:"20033",
                Platform:"Browser",
                AppVersion:"1.0.0,1.0.0",
                AppDebug:false,
                Fecha: new Date().toISOString(),
                IdSucursal:1,
                IdSucursalCompra: IdSucursalCompra,
                SucursalCompra:null,
                ModeEmpresas:false,
                MobileMonoMarca: false,
                IdEmpresa:0,
                Lng:null,
                Lat:null,
                Alt:null,
                ReadCountMode:false,
                PageFrom:0,
                PageCount: notificacionesVisibles + 5,
                CalculateTotalRows:false,
                LastId:0}
   

      let requestNotificaciones = axios.post(urlNotificaciones, requestConfig)
      let requestUnreadNotificaciones =  axios.post(urlNotificacionesSinLeer, requestConfig)

    useEffect(() => {
        if(logged){
        axios.all([requestNotificaciones, requestUnreadNotificaciones])
             .then(axios.spread((...response) => {
                 const notificacion = response[0].data
                 const unreadCount = response[1].data.count
                 setState({
                          notificaciones: notificacion,
                          cantidad: unreadCount, 
                          loading: false,
                          error: ''
                         })
                         
             })).catch(error => {
                 console.log('catch',error)
                 setState({
                     notificaciones: [],
                     cantidad: [],
                     loading: false,
                     error: error
                 })
             });
            }      
    }, [user, notificacionesVisibles]);
    return [state, countNotificaciones]
}

