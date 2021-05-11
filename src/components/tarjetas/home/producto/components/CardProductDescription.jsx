import React from 'react'
import { Fragment } from 'react'

function CardProductDescription(props) {
    const {nombre, precio, sucursal} = props
    return (
       <Fragment>
           <div className="description-precio">
                <div className="precio-container">
                    <p>${precio}</p>
                </div>
                <div className="payment-icons">
                        <i className="fas fa-wallet"></i>
                        <i className="fas fa-credit-card"></i>
                </div>
            </div>
            <div className="description-info">
                <h5><b>{sucursal}</b></h5>
                <p className="titulo2">{nombre}</p>
            </div>
       </Fragment>
    )
}

export default CardProductDescription
