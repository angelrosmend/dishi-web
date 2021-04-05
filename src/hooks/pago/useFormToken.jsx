import axios from "axios";
import { useEffect, useState } from "react";

export const useFormToken = (url, id, precio, user) => {
    const [state, setState] = useState({token: '', loading: true, error: ''})
    
    useEffect(() => {
        axios.post(url,  
            {
                    APP_ConfigurationID: "20034",
                    Accuracy: 2555,
                    Alt: null,
                    AppDebug: false,
                    AppVersion: "1.0.0,1.0.0",
                    Fecha: new Date().toISOString(),
                    IdEmpresa: undefined,
                    IdSucursal: 1,
                    IdSucursalCompra: user.IdSucursalCompra,
                    Lat: -34.5009741,
                    Lng: -58.497270699999994,
                    MobileMonoMarca: true,
                    MobileUser:  {Id: user.Id, Email: user.Email, RolId: user.RolId},
                    ModeEmpresas: false,
                    Platform: "Browser",
                    amount: precio * 100,
                    currency: "ARS",
                    orderId: `P${id}-${id}-${user.Id}`,
                    shopId: "18192840"
              })
             .then(response => {
                 setState({
                          token: response.data.answer.formToken,
                          loading: false, 
                          error: ''
                         })
             }).catch(error => {
                 setState({
                     token: '',
                     loading: false,
                     error: error
                 })
             });               
    }, []);
    return state}