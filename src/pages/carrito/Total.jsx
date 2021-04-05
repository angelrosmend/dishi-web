import React,{Fragment, useContext} from 'react'
import { CartContext } from '../../context/CarritoContext'

function Total({descuento}) {
    const { envio, subtotalMasCostoEnvio,  totalFinal} = useContext(CartContext)

    const {costo: costoEnvio, cantidadCajas} = envio
    
 

    return (
    <div className="row no-gutters bg-white">
        <div className="col-12 text-sm-right m-md-auto pr-3 py-4  row justify-content-around">
            
            <div className="sub-valor">
                <h6>Costo Envio </h6>
                <p>$ {costoEnvio}</p>

            </div>
            <div className="sub-valor">
                <h6>Costo Compra </h6>
                <p>$ {subtotalMasCostoEnvio}</p>
            </div>
            <div className="sub-valor">
                <h6>Numero de cajas </h6>
                <p>{cantidadCajas}</p>

            </div>
            <div className="sub-valor">
                {descuento ? 
                <Fragment> 
                <h6>Descuento </h6>
                <p>$ {descuento}</p>
                </Fragment>: 
                null}

            </div>
            <h4 className="mb-0 total-render ">Total <span className="valor ">${totalFinal /* total(subtotal, costoEnvio, descuento) */}</span></h4>
        </div>
    </div>
    )
}

export default Total
