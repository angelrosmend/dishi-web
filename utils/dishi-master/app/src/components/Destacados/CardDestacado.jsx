import React from 'react'

function CardDestacado({imagen, nombre, precio, sucursal}) {
    return (
        <div className="col-sm-12 col-md-12 pb-4">
        <i className="far fa-heart like" data-toggle="popover" data-trigger="hover" data-placement="left" data-content="Agregar a Favoritos"></i>
        <img className="imagenes" src={imagen} alt="logo"/>
        <div className="text-img d-flex py-2">
            <div>
                <p className="text-white">$ {precio} </p>
            </div>
            <ul className="navbar-nav ml-auto">
                <li>
                    <i className="fas fa-wallet" style={{color: "#ffffffb8"}}></i>
                </li>
            </ul>
        </div>
        <div className="text2-img">
        <p className="titulo"><b>{sucursal}</b></p>
         <p className="titulo2">{nombre}</p>
        </div>
  </div>
    )
}

export default CardDestacado
