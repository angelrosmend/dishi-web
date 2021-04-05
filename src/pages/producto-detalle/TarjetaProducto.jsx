import React from 'react'
import LikeyCarrito from './LikeyCarrito';


function TarjetaProducto(props) {
    const {id, imagen, nombre, precio, sucursal, enCarrito, ValorParaCajaDelivery, Stock, itemQuantity} = props

    return (
    <div className="col-lg-7" style={{height: '400px'}}>
    <div className=" bg-white descripcion-row row d-flex " style={{height: '100%', position: 'relative'}}>
        <div className="col  mr-4 mt-5 " >
            <div className="row ">
                <div className="col ">
                <p className="titulo font-weight-bold mb-2">{sucursal}</p>
                </div>
            </div>
            <div className="row">
                <div className="col mb-3">
                <h3 className="titulo-productos">{nombre}</h3>
                </div>
            </div>
        </div>
        <LikeyCarrito id={id}
                      imagen={imagen}
                      nombre={nombre}
                      precio={precio}
                      enCarrito={enCarrito}
                      ValorParaCajaDelivery={ValorParaCajaDelivery}
                      Tipo={0}
                      Stock={Stock}
                      itemQuantity={itemQuantity}/>
    </div>
    </div>
    )
}

export default TarjetaProducto
