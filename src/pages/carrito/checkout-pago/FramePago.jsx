import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../../context/CarritoContext'
import { ContextUser } from '../../../context/UserContext'
import { useFormToken } from '../../../hooks/pago/useFormToken'
import { urlFormToken, urlPayClickautPedido} from '../../../settings/requestSettings'

function FramePago() {
 
    const { showModalSuccess, showModalFail} = useContext(CartContext)
    const { dataPostPedido:dataPedido ,subtotal,totalFinal,itemsConfig, zipcode, porcentaje,  descuentoPesos, cupon, pisoCasa, entreCalles, localidad, direccionEnvio, envio} = useContext(CartContext)
    const {user} = useContext(ContextUser)
    const {costo, cantidadCajas} = envio
    
    const {id: idCompra, precioFinal} = dataPedido
    
    const {token} = useFormToken(urlFormToken, idCompra, totalFinal,user)

    const configRequest = {
      Version: 1,
      IdTipoEntrega: 1,
      Items: itemsConfig,
      Id : idCompra,
     IdMedioPago: 15,
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
  SubTotal: subtotal,
  Iva: 0,
  PercepIva: 0,
  Total: precioFinal,
  Descuento: descuentoPesos,
  PorcentajeDescuento: porcentaje,
  PagandoQRDistribuidorIdPedido: false,
  TotalConDescuento: totalFinal,
  CostoEnvio: costo,
  CantidadCajas: cantidadCajas,
  ModoCreacionPedidoPostPago: true,
  DescuentoCuponesList: [cupon],
  MobileMonomarca: false,
  MobileUser: {
    Id: user.Id,
    Email: user.Email,
    RolId: user.RolId
  },
  Appdebug: false,
  APP_ConfigurationID: "20034",
  Fecha: new Date().toISOString(),
  AppVersion: "1.0.0,1.0.0",
  IdSucursal: 1,
  IdSucursalCompra: user.IdSucursalCompra,
  Platform: "Browser"}

  


    useEffect(() => {
      const handleFrame = (res) => {
        if(res.data == "doneloading"){
        }
        else{
          if (res.data.err !== undefined){
            showModalFail()
          }else{
            try {
              let obj = JSON.parse(res.data);
              if ( obj.clientAnswer.orderStatus == 'PAID'){
                let PagoPymeData = {
                  IdUsuario: obj.clientAnswer.customer.reference,
                  amount: obj.clientAnswer.orderDetails.orderEffectiveAmount,
                  currency: obj.clientAnswer.orderDetails.orderCurrency,
                  customer_email: obj.clientAnswer.customer.email,
                  orderId: obj.clientAnswer.orderDetails.orderId,
                };
                configRequest.PagoPymeData = PagoPymeData
                axios.post(urlPayClickautPedido, configRequest)
                                                           .then(response =>{
                                                             console.log('success',response.data)
                                                             showModalSuccess()
                                                           })
                                                           .catch(error => {
                
                                                             let errorMessage = 'Ooops algo salio mal';
                                                             if (error.response != undefined && error.response.data != undefined ){
                                                               if (error.response.data.Message != undefined){
                                                                errorMessage = error.response.data.Message;
                                                               }
                                                             }
                                                             showModalFail()
                                                             console.log(' POST ERROR 19 message = ', errorMessage)
                                                      
                                                            })
              }
            } catch (error) {
              showModalFail()
            }
          }
        }
        }
      window.addEventListener('message', handleFrame, false ) 
    }, [])



    return (
      <div className="col-12 d-flex">
        <div className="frame-borders mx-auto">
        <iframe 
                id='my-frame'
                className='m-auto frame-size '
                src={`https://bimboatucasa.clickaut.com/PaymentForm?shopId=18192840&token=${token}`} 
                frameBorder='0'>
        </iframe>
        </div>
      </div>
        
    )
}

export default FramePago
