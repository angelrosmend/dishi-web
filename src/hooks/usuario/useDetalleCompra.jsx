import {useEffect, useState} from 'react'
import axios from 'axios'
import { urlCompraPedido, urlMisCompras } from '../../settings/requestSettings'


export const useDetalleCompra = (user,id) => {
    const [state, setState] = useState({pedido: {}, loading: true, error: ''})
    const idCompra = id && id
    const User = user && user
    const IdSucursalCompra = User? User.IdSucursalCompra : 835
    const IdUser = User.Id
    const EmailUser = User.Email
    const RolUser = User.RolId
    const DNIUser = User.DNI

    const requestConfig = 
                     {Id:idCompra,
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
                     MobileMonoMarca: false,
                     ReadCountMode:false,
                     PageFrom:0,
                     PageCount:5,
                     CalculateTotalRows:false,
                     LastId:0}

    useEffect(() => {
        if(id){
        axios.post(urlCompraPedido ,requestConfig)
             .then(response => {
                // const compra = response.data.map(item => item.Pedido).find(item => item.Id == idCompra)
                 setState({
                          pedido: response.data.Pedido,
                          productos: response.data.Productos,
                          loading: false, 
                          error: ''
                         })
                        
                         
             }).catch(error => {
                 console.log('catch',error)
                 setState({
                     pedido: {},
                     productos: [],
                     loading: false,
                     error: error
                 })
             });
        }            
    }, [id]);
    return state
}

