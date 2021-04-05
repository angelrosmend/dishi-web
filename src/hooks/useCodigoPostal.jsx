import axios from "axios";
import { useEffect, useState } from "react";

export const useCodigoPostal = (url, zipcode, direccionEnvio, user) => {
    const [state, setState] = useState({message: '', areaCobertura: false, loading: true, error: ''})

  
    useEffect(() => {
        
        axios.post(url,  
            {
                Value: zipcode,
                MobileMonomarca: false,
                MobileUser: {
                  Id: user.Id,
                  Email: user.Email,
                  RolId: user.Usuario.RolId
                },
                APP_ConfigurationID: "20034",
                Fecha: new Date(),
                AppVersion: "1.0.0,1.0.0",
                IdSucursal: 1,
                IdSucursalCompra: user.IdSucursalCompra,
                Platform: "Browser",
              })
             .then(response => {
                    setState({
                        message: response.data.message,
                        areaCobertura: response.data.ok,
                        loading: false,
                        error: ''
                       })
                 
             }).catch(error => {
                 setState({
                     message: 'algo ha salido mal',
                     areaCobertura: false,
                     loading: false,
                     error: error
                 })
             });
                     
    }, [direccionEnvio, zipcode]);
    return state}