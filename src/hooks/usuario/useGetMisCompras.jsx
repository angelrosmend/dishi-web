import {useEffect, useState} from 'react'
import axios from 'axios'
import { urlMisCompras } from '../../settings/requestSettings'


export const useGetMisCompras = (user, count) => {
    const [state, setState] = useState({data: [], loading: true, error: ''})

    const User = user && user
    const IdSucursalCompra = User? User.IdSucursalCompra : 835
    const IdUser = user && user.Id
    const EmailUser = user && user.Email
    const RolUser = user && user.RolId
    const DNIUser = user && user.DNI

    const requestConfig = 
                     {Id:0,
                     PaymentGUID:null,
                     MobileUser:{ Id:IdUser,
                                  Email:EmailUser,
                                  RolId: RolUser,
                                  DNI: DNIUser
                                },
                     orderby:
                     { Direction:"DESC",
                       Field:"FechaAlta"
                    },
                     SESSIONID:null,
                     APP_ConfigurationID:"20033",
                     Platform:"Browser",
                     AppVersion:"1.3.4,909",
                     AppDebug:false,
                     Fecha: new Date().toISOString(),
                     IdSucursal:1,
                     IdSucursalCompra: IdSucursalCompra,
                     SucursalCompra:null,
                     ModeEmpresas:false,
                     MobileMonoMarca:true,
                     ReadCountMode:false,
                     PageFrom:0,
                     PageCount: count + 5,
                     CalculateTotalRows:false,
                     LastId:0}

    useEffect(() => {

       if(user){
        axios.post(urlMisCompras ,requestConfig)
             .then(response => {
                console.log(response)
                 setState({
                          data:response.data,
                          loading: false, 
                          error: ''
                         })   
             }).catch(error => {
                 console.log('catch',error)
                 setState({
                     data: [],
                     loading: false,
                     error: error
                 })
             });}
                     
    }, [user, count]);
    return state
}

