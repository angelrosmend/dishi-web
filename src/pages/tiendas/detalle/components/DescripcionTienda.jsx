import React from 'react'

function DescripcionTienda() {
    return (
        <div className="row">
         <div className="col-12" data-aos="fade-up" data-aos-delay="170">
             <h1 className="text-center tienda-brand-h1">FRES.CO</h1>
             <h4 className="text-center tienda-brand-h4">Tienda de productos orgánicos gourmet</h4>
             <div className="row justify-content-md-center px-4 mt-5">
                 <div className="col-md-auto col-sm-auto"><p className="tienda-texto-general text-center"><i className="fas fa-phone-alt tienda-icon-detail"></i>+54 0220 - 465-1570</p></div>
                 <div className="col-md-auto col-sm-auto"><p className="tienda-texto-general text-center"><i className="fab fa-whatsapp tienda-icon-detail"></i>+54 9220 65-1570</p></div>
                 <div className="col-md-3 col-sm-auto"><p className="tienda-texto-general text-center"><i className="fas fa-clock tienda-icon-detail"></i>Lunes a viernes 11 a 21hs.</p></div>
                 <div className="col-md-auto col-sm-auto"><p className="tienda-texto-general text-center"><i className="fas fa-link tienda-icon-detail"></i>www.fresco.com.ar</p></div>
                 <div className="col-md-auto col-sm-auto"><p className="tienda-texto-general text-center"><i className="fas fa-envelope tienda-icon-detail"></i>hola@fresco.com.ar</p></div>
             </div>
             <div className="row justify-content-center mt-3 mb-3">
                 <div className="col-auto"><p className="tienda-texto-general text-center"><i className="fas fa-map-marker tienda-icon-detail"></i>Av. de la Independencia 2133, Pehuajó</p></div>
             </div>
         </div>
 </div>
    )
}

export default DescripcionTienda
