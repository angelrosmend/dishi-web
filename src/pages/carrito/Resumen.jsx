import React, { useContext } from 'react'
import { CartContext } from '../../context/CarritoContext'

function Resumen() {
    const { descuentoPesos,cupon,numeroDeItems, totalFinal}= useContext(CartContext)
    

    return (
    <div className="row bg-white resumen py-sm-4 no-gutters">
        <div className="col cart-items">

                <div className="col-lg-10  col-sm">
                    <div className="row">
                    <i className="fas fa-shopping-cart ml-3 mr-1 mt-2 ml-xl-3 mr-xl-4 mt-xl-auto"></i>
                   <p className="mb-0">{numeroDeItems}</p>

                    </div>
                    </div>

        </div>
        <div className="col  m-auto">{descuentoPesos ? 
        <div className='row justify-content-around'>
        <p className="mb-0 align-items-center pt-sm-1">Cupon <span className="text-cupon">{cupon }</span></p> 
        </div>
        :null}</div>
        <div className="col text-right mr-md-3 m-auto"><h4 className="mb-0">Total <span className="valor">${totalFinal}</span></h4></div>
    </div>
    )
}

export default Resumen
