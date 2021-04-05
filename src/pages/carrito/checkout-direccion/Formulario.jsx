import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Fragment } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import ModalStockFail from '../../../components/modals/fail/ModalStockFail'
import { CartContext } from '../../../context/CarritoContext'
import { ContextUser } from '../../../context/UserContext'
import {  urlPostPedido } from '../../../settings/requestSettings'


function Formulario({areaCobertura}) {
   const {zipcode,
     pisoCasa, 
    setPisoCasa,
    entreCalles, 
    setEntreCalles,
    localidad, 
    setLocalidad, 
    direccionEnvio,
    setDireccionEnvio,
    setZipcode,
    /* itemsConfig */
    cuponRequest,
    totalFinal,
    porcentaje,
    subtotalMasCostoEnvio,
    setDataPostPedido,
    descuentoPesos,
    cartItems,
    showModalFailStock,
    compraGratis,  envio} = useContext(CartContext)
    const {user} = useContext(ContextUser)
    const {costo, cantidadCajas} = envio

    const history = useHistory()

    const [itemsConfig, setItemsConfig] = useState([])

    useEffect(() => {
      const itemsCosto = cartItems.map(item =>  {
        return {IdItem: item.id,
                Tipo: item.Tipo,
                Quantity: item.quantity,
                Precio: item.precio,
                ValorParaCajaDelivery: item.ValorParaCajaDelivery}
        });
      setItemsConfig(itemsCosto)
     }, [cartItems])

   
    const handleDireccion = (e) =>{
        e.preventDefault()
        setDireccionEnvio(e.target.value)
    }
    const handleDepto = (e) =>{
      e.preventDefault()
        setPisoCasa(e.target.value)
    }
    const handleEntreCalles = (e) => {
        e.preventDefault()
        setEntreCalles(e.target.value)
    }
    const handleLocalidad = (e) => {
        e.preventDefault()
        setLocalidad(e.target.value)
    }
    const handleZipCode = (e) => {
        e.preventDefault()
       
        setZipcode(e.target.value)
      
    }

    const configPedido = {
      AppDebug: false,
      Version: 1,
      IdTipoEntrega: 1,
      Presupuesto: false,
      FacturacionEnLinea: false,
      NotaCredito: false,
      Items: itemsConfig,
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
      SubTotal: subtotalMasCostoEnvio,
      Iva: 0,
      PercepIva: 0,
      Total: totalFinal,
      Descuento: descuentoPesos,
      PorcentajeDescuento: porcentaje,
      TotalConDescuento: totalFinal,
      CostoEnvio: costo,
      CantidadCajas: cantidadCajas,
      ModoCreacionPedidoPostPago: true,
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


  const onSubmit = (e) => {
       e.preventDefault()
       if(compraGratis){
        history.push('/checkout-3-medio-pago')
       }else{
       axios.post(urlPostPedido, configPedido)
           
             .then(response => {

              console.log('post-pedido', response, configPedido)
               setDataPostPedido(response.data)
               history.push('/checkout-3-medio-pago')

             }).catch(error => {
    
               let errorMessage = 'Ooops algo salio mal';
               if (error.response !== undefined && error.response.data !== undefined ){
                 if (error.response.data.Message !== undefined){
                  errorMessage = error.response.data.Message;
                  
                 }
               }
               showModalFailStock(errorMessage)
               console.log(' POST ERROR 19 message = ', errorMessage, configPedido)
               setDataPostPedido(null)
             });
            }

    } 
 
    return (
      <Fragment>
        <form   onSubmit={onSubmit}  className="address-form my-5 bg-white p-5">
                    <div className="row form-group">
                        <label htmlFor="address" className="col-sm col-form-label">Dirección</label>
                        <div className="col-sm-7">
                        <input type="text" 
                                   value={direccionEnvio} 
                                   className="form-control" 
                                   onChange={handleDireccion} 
                                   id="direccionEnvio" 
                                   name="direccionEnvio"
                                   required/>
  
                        </div>
                        <label htmlFor="depto" className="col-sm-2 col-form-label">Piso/Depto/Casa</label>
                        <div className="col-sm">
                            <input type="text" 
                                   value={pisoCasa} 
                                   className="form-control" 
                                   onChange={handleDepto} 
                                   id="depto" 
                                   name="depto"
                                   required
                                   />
                            
                        </div>
                    </div>
                    <div className="row form-group">
                        <label htmlFor="calles" className="col-sm col-form-label">Entre calles</label>
                        <div className="col-sm-7">
                            <input type="text" 
                                   className="form-control" 
                                   id="calles" 
                                   name="calles" 
                                   value={entreCalles}
                                   onChange={handleEntreCalles}
                                   required/>
                        </div>
                        <label htmlFor="cp" className="col-sm-2 col-form-label">Código Postal</label>
                        <div className="col-sm">
                             <input type="text" 
                                   className="form-control" 
                                   id="zipcode" 
                                   name="zipcodeY"
                                   value={zipcode}
                                   required
                                    onChange={handleZipCode}
                                   /> 
                        </div>
                    </div>
                    <div className="row form-group">
                        <label htmlFor="localidad" className="col-sm col-form-label">Localidad</label>
                        <div className="col-sm-7 ">
                            <input type="text" 
                                   className="form-control w-75" 
                                   id="localidad" 
                                   name="localidad"
                                   value={localidad}
                                   onChange={handleLocalidad}
                                   required/>
                        </div>
                        <div className="col-sm-2 col-form-label"></div>
                        <div className="col-sm"></div>
                    </div>


                    <div className="row buttons pt-5 text-center">
                <div className="col text-sm-center text-md-center back">

                <Link to='/checkout-1-carrito' className="btn btn-light rounded-pill px-4 py-2 text-left float-lg-left float-sm-none float-md-none mb-3 "><i className="fas fa-arrow-left mr-3"></i>VOLVER AL CARRITO</Link>

           <button type='submit'
                 className="btn btn-primary rounded-pill  px-4 py-2 text-right float-lg-right float-sm-none float-md-none mb-3"
                  disabled={zipcode.length < 4 || zipcode.length > 4  || !areaCobertura} 
                 >    
             CONFIRMAR
             <i className="fas fa-arrow-right ml-3"></i>
           </button>
        </div>
    </div> 
            </form>
       <ModalStockFail/>
    </Fragment>   
    )
}

export default Formulario
