import React, { useContext } from 'react'
import { Fragment } from 'react'
import '../../carrito/carrito.css'
import Formulario from './Formulario'
import Mapa from './Mapa'
import Resumen from '../Resumen'
import Titulos from './Titulos'
import { ProgressBarPaso2 } from '../ProgressBar'
import { withRouter } from 'react-router-dom'
import { ContextUser } from '../../../context/UserContext'
import { CartContext } from '../../../context/CarritoContext'
import { urlCodigoPostal } from '../../../settings/requestSettings'
import { useCodigoPostal } from '../../../hooks/useCodigoPostal'

function CheckoutDireccion() {
    const{zipcode, direccionEnvio} = useContext(CartContext)
    const {user} = useContext(ContextUser)

   const {areaCobertura, message} = useCodigoPostal(urlCodigoPostal, zipcode, direccionEnvio, user)
  
    return (
        <Fragment>
         <ProgressBarPaso2/>
        <div className="container checkout-step-1">
            <div className="row aos-init aos-animate justify-content-md-center">
                <div className="col-sm-10">
                    <Resumen/>
                    <Titulos areaCobertura={areaCobertura} message={message} zipcode={zipcode}/>
                    <Mapa/>
                    <Formulario areaCobertura={areaCobertura}/>                 
                </div>
            </div>
        </div>
     </Fragment>
    )
}

export default withRouter(CheckoutDireccion)
