import axios from 'axios'
import React, { useContext } from 'react'
import { CartContext } from '../../../context/CarritoContext'
import { ContextUser } from '../../../context/UserContext'
import { urlPostPedido } from '../../../settings/requestSettings'

function BotonPagoCupon() {

   const {direccionEnvio, pisoCasa, entreCalles,itemsConfig, localidad, zipcode, cuponRequest, subtotalMasCostoEnvio,totalFinal, descuentoPesos, showModalFail, showModalSuccess, envio} = useContext(CartContext)
 const {user} =   useContext(ContextUser)
 const {costo, cantidadCajas} = envio

    const configPedido = {
        AppDebug: false,
        Version: 1,
        IdTipoEntrega: 1,
        Presupuesto: false,
        FacturacionEnLinea: false,
        NotaCredito: false,
        Items: itemsConfig,
        IdMedioPago: 16,
        Comentarios: "",
        PedidoDeliveryInfo: {
          TipoDireccion: 2,
          Direccion: direccionEnvio,
          PisoPuertaDepto: pisoCasa,
          Entrecalles: entreCalles,
          Localidad: localidad,
          CP: zipcode
        },
        TelefonoContacto: user.Celular,
        SubTotal: subtotalMasCostoEnvio,
        Iva: 0,
        PercepIva: 0,
        Total: totalFinal,
        Descuento: descuentoPesos,
        PorcentajeDescuento: 0,
        TotalConDescuento: totalFinal,
        CostoEnvio: costo,
        CantidadCajas: cantidadCajas,
        ModoCreacionPedidoPostPago: false,
        DescuentoCuponesList: [cuponRequest],
        MobileMonomarca: false,
        MobileUser: {
          Id: user.Id,
          Email: user.Email,
          RolId: user.RolId
        },
        APP_ConfigurationID: "20033",
        Fecha: new Date().toISOString(),
        AppVersion: "1.0.0,1.0.0",
        IdSucursal: 1,
        IdSucursalCompra: user.IdSucursalCompra,
        Platform: "Browser"
     }

    const handlePostPedido = () => {

        axios.post(urlPostPedido, configPedido)
              .then(response => {
                  showModalSuccess()
 
              }).catch(error => {
                let errorMessage = 'Ooops algo salio mal';
                if (error.response != undefined && error.response.data != undefined ){
                  if (error.response.data.Message != undefined){
                   errorMessage = error.response.data.Message;
                   
                  }
                }
                console.log('messagee',errorMessage)
                console.log(error.config)
               showModalFail()
              }); 
             }
    return (
        <button type="submit" 
                onClick={handlePostPedido}
                 className="btn btn-primary rounded-pill  px-4 py-2 text-right float-lg-right float-sm-none float-md-none mb-3"
                 >    
             CONFIRMAR COMPRA
        </button>
    )
}

export default BotonPagoCupon
