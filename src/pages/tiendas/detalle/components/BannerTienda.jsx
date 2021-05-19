import React from 'react'

function BannerTienda() {
    return (
        <div className="container-fluid">
        <div className="row tienda-header justify-content-md-center">
               <div className="col-md-auto">
               <div className="badge badge-pill badge-primary tienda-open-badge">
                   <span className="align-middle m-3">Abierto Ahora</span>
               </div>
               <div className="tienda-brand mx-auto">
               <div className="tienda-brand-like">
                   <i className="far fa-heart like"   data-toggle="popover" data-trigger="hover" data-placement="left" data-content="Agregar a Favoritos"></i>
               </div>
                   <img className="imagenes img-fluid" src="img/logo-fresco.png" alt=""/></div>
               </div>
           </div>
           <div className="row tienda-header-bottom"></div>
       </div>
    )
}

export default BannerTienda
