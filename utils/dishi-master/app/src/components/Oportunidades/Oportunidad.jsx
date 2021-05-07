import React from 'react'

function Oportunidad({logo, producto, sucursal, precio}) {
    return (
        <div className="col-sm-12 col-md-12 py-3">
        <i className="far fa-heart like-2" data-toggle="popover" data-trigger="hover" data-placement="left" data-content="Agregar a Favoritos"></i>
        <i className="fas fa-cart-plus like-3"></i>
        <img className="imagenes-2" src={logo} alt=""/>
        <div className="row">
            <div className="col-md-6 col-sm-12">
             <div className="text3-img text3-bg-1">
                <p className="titulo px-3"><b>{sucursal}</b></p>
                 <p className="px-3">{producto}</p>
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
