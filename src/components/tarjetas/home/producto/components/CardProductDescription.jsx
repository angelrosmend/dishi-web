import React from 'react'
import { Fragment } from 'react'

function CardProductDescription(props) {
    const {nombre, precio, sucursal, tienda, direccion, rubro} = props
    return (
       <Fragment>
           <div className="description-precio">
            {tienda ?
            <p className="titulo2 text-white">{nombre}</p>
            :
            <Fragment>
               <div className="precio-container">
                    <p>${precio}</p>
                </div>
                <div className="payment-icons">
                        <i className="fas fa-wallet"></i>
                        <i className="fas fa-credit-card"></i>
                </div>
            </Fragment>}
            </div>
            <div className="description-info bg-white ">
                {tienda ?
                <Fragment>
                <p className="p-0 m-0">{rubro && rubro}</p>
                <div className="row pt-2">
                <div className="col-1">
                   {direccion && <i className="fas fa-map-marker marcador"></i>}
                </div>
                <div className="col-10 text-marcador">
                     <p>{direccion && direccion}</p>
                </div>
            </div>
            </Fragment>
                :
                <Fragment>
                 <h5><b>{sucursal}</b></h5>
                  <p className="titulo2">{nombre}</p>
                </Fragment>}
            </div>
       </Fragment>
    )
}

export default CardProductDescription
