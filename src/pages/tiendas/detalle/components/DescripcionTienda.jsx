import React from 'react'
import ItemDescripcion from './ItemDescripcion'

function DescripcionTienda({datos}) {
   const {nombre, email, telefono, whatsapp,direccion, descripcion, sitioWeb} = datos
    return (
        <div className="row">
         <div className="col-12" data-aos="fade-up" data-aos-delay="170">
             <h1 className="text-center tienda-brand-h1">{nombre}</h1>
             <h4 className="text-center tienda-brand-h4">{descripcion}</h4>
             <div className="row justify-content-md-center px-4 mt-5">
                 <ItemDescripcion icon="fas fa-phone-alt">{telefono}</ItemDescripcion>
                 <ItemDescripcion icon="fab fa-whatsapp">{whatsapp}</ItemDescripcion>
                 {/* <ItemDescripcion icon="fas fa-clock">Lunes a viernes 11 a 21hs.</ItemDescripcion> */}
                 <ItemDescripcion icon="fas fa-link">{sitioWeb}</ItemDescripcion>
                 <ItemDescripcion icon="fas fa-envelope">{email}</ItemDescripcion>
             </div>
             <div className="row justify-content-center mt-3 mb-3">
                <ItemDescripcion icon="fas fa-map-marker">{direccion}</ItemDescripcion>
             </div>
         </div>
 </div>
    )
}

export default DescripcionTienda
