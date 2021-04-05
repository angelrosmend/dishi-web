import React from 'react'
import { calcularTotalProducto } from '../../../helpers/NumberFormatter'

function ProductoCheckout(props) {
    const { imagen, precio, nombre, sucursal, quantity} = props

    return (
        <div className="row bg-white no-gutters items-carrito text-center">
        <div className="col-sm-1 m-md-auto ">
            <img src={imagen} alt="" className="img-fluid"/>
        </div>      
        <div className="col-sm-8 px-4  m-md-auto text-sm-left text-md-left text-left">
            <div className="row">
                <p className="mb-0 seller-name">{sucursal}</p>
            </div>
            <div className="row">
                <p className="mb-0 product-name">{nombre}</p>
            </div>
       </div>
        <div className="col m-auto">
            <div className="mb-0 w-100 ">
                <span className="quantity-pago ">{quantity}</span>
            </div>
        </div>
    <div className="col text-right m-md-auto pr-4"><h4 className="price mb-0">${calcularTotalProducto(precio, quantity)}</h4> </div>
    </div>
    )
}

export default ProductoCheckout
