import React from 'react'

function Tienda({logo, nombre, direccion, rubro}) {
    return (
    <div className="col-sm-12 col-md-12 pb-4">
             
            <img className="imagenes" src={logo} alt=""/>
        <div className="text-img-2 d-flex py-2">
            <div>
       <p className="text-white">{nombre}</p>
            </div>
        </div>
        <div className="text2-img text2-img-bg py-2 px-2">
           <p className="text-tiendas">{rubro}</p>
            <div className="row pt-2">
                <div className="col-1">
                    <i className="fas fa-map-marker marcador"></i>
                </div>
                <div className="col-10 text-marcador">
                     <p>{direccion}</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Tienda
