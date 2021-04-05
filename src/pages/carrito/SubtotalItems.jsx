import React, { useContext } from 'react'
import { CartContext } from '../../context/CarritoContext'

function SubtotalItems() {
    const {subtotal} =  useContext(CartContext)
    return (
        <div className="row bg-white no-gutters text-center">
            <div className="col text-right m-md-auto pr-4"><h4 className="price mb-0">${subtotal}</h4> </div>
        </div>
    )
}

export default SubtotalItems
