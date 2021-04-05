import React, { useContext } from 'react'
import { CartContext } from '../../../context/CarritoContext'
function Oportunidad({id, imagen, nombre, precio, sucursal}) {

  const {addToCart} = useContext(CartContext)
    return (
        <div className="col-sm-12 col-md-12 py-3">
       
        <button onClick={()=> addToCart({id, nombre, imagen, precio})}>
          <i className="fas fa-cart-plus like-3"></i>
        </button>
        <img className="imagenes-2" src={imagen} alt=""/>
        <div className="row">
            <div className="col-md-6 col-sm-12">
             <div className="text3-img text3-bg-1">
                <p className="titulo px-3"><b>{sucursal}</b></p>
                 <p className="px-3">{nombre}</p>
             </div>
         </div>

         <div className="col-md-6 col-sm-12d-flex">
            <div className="text3-bg-2">
                <div className="text3-img d-flex justify-content-center">
                    <button type="button" className="btn btn-primary boton-2 ml-1">20%OFF</button>
                     <p className="text3-img-2 px-3 text-3" style={{margin:'auto'}}>$ {precio}</p>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}


export default Oportunidad
