import React from 'react'
import { jabon } from '../../../../assets/img'

function TarjetaProducto() {
    return (
        <div className="col-sm-12 col-md-12 pb-4 tr">
           <i className="far fa-heart like tr" 
              data-toggle="popover" 
              data-trigger="hover" 
              data-placement="left" 
              data-content="Agregar a Favoritos">
            </i>
            <img className="imagenes" src={jabon} alt="logo"/>
            <div className="text-img d-flex py-2">
                <div>
                    <p className="text-white">$ 65768</p>
                </div>
                <ul className="navbar-nav ml-auto">
                    <li>
                        <i className="fas fa-wallet" style={{color: "#ffffffb8"}}></i>
                    </li>
                </ul>
            </div>
        <div className="text2-img">
            <p className="titulo"><b>sucursal</b></p>
            <p className="titulo2">nombre</p>
        </div>
       </div>
    )
}

export default TarjetaProducto
