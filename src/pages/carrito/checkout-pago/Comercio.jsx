import React, { useContext } from 'react'
import { CartContext } from '../../../context/CarritoContext'

function Comercio() {
    const { pisoCasa, localidad, zipcode, direccionCorta, country} = useContext(CartContext)
    return (
    <div className="row no-gutters pt-2 pb-2 pl-4 comercio">
        <div className="col-1"><i className="fas fa-store"></i></div>
        <div className="col"> <p className="mb-0">{`${direccionCorta}, ${pisoCasa} - ${localidad}, CP: ${zipcode}, ${country} `}</p></div>
    </div>
    )
}

export default Comercio
