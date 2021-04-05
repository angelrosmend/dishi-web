import React, { useContext } from 'react'
import { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import ModalCompraFail from '../../../components/modals/fail/ModalCompraFail'
import ModalCompraSuccess from '../../../components/modals/success/ModalCompraSuccess'
import { CartContext } from '../../../context/CarritoContext'
import { ProgressBarPaso3 } from '../ProgressBar'
import Resumen from '../Resumen'
import SubtotalItems from '../SubtotalItems'
import BotonPagoCupon from './BotonPagoCupon'
import Comercio from './Comercio'
import FramePago from './FramePago'
import ProductoCheckout from './ProductoCheckout'
import Titulos2 from './Titulos2'
import TitulosPagoFinal from './TitulosPagoFinal'
import TotalFinal from './TotalFinal'

function CheckoutPago() {

    const {cartItems, compraGratis, descuentoPesos} = useContext(CartContext)
   
    const CarritoLista = () =>{
        return(
          cartItems.map(item =>{
              const { id, nombre, precio,imagen, sucursal, quantity} = item;
               return(
            <ProductoCheckout id={id}
              key={id}
              imagen={imagen}
              sucursal={sucursal}
              nombre={nombre}
              precio={precio}
              quantity={quantity}
              product={item}/>
              )
          }
        ))
      }
    return (
        <div className='p-5'>
        <ProgressBarPaso3/>
        <TitulosPagoFinal/>
       <div className="container checkout-step-1">
          <div className="row aos-init aos-animate justify-content-md-center">
            <div className="col-sm-10">
                <CarritoLista/>
                <SubtotalItems/>
                <TotalFinal descuento={descuentoPesos}/>
                <Resumen/>
                <Comercio/>
            
                {compraGratis ? 
                null : 
                <Fragment>
                   <Titulos2/>
                   <FramePago/>
                </Fragment>
                }

                <ModalCompraSuccess/>
                <ModalCompraFail/>

                <div className="row buttons pt-5 text-center">
              <div className="col text-sm-center text-md-center back">
               <Link to='checkout-2-direccion' className="btn btn-light rounded-pill px-4 py-2 text-left float-lg-left float-sm-none float-md-none mb-3 "><i className="fas fa-arrow-left mr-3"></i>VOLVER A LA PÁGINA DE DIRECCIÓN</Link>
             {compraGratis ? 
                 <BotonPagoCupon/> 
                 : 
                 null}
        </div>
    </div>
            </div>
          </div>
      </div>

        </div>
    )
}

export default withRouter(CheckoutPago)
