import React, { useContext } from 'react'
import { CartContext } from '../../context/CarritoContext'

function NumeroItems() {
    const {numeroDeItems} = useContext(CartContext)
    return (
    <div className="row">
        <div className="col-12">
            <p className="items">{numeroDeItems} productos</p>
       </div>
    </div>
    )
}

export default NumeroItems
