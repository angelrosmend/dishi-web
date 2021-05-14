import React from 'react'
import { Fragment } from 'react'


function TiendaDescription(props) {
    const {nombre, rubro, direccion, showAddress} = props
    
    return (
       <Fragment>
           <div className="nombre-tienda-card">
              <p>{nombre}</p>
            </div>
         <div className="direccion-tienda-card">
               <p className="text-tiendas p-2">{rubro}</p>
            {showAddress&&
            <div className="row p-2">
              {direccion&& <Fragment>
                <div className="col-1">
                    <i className="fas fa-map-marker marcador"></i>
                </div>
                <div className="col-10 text-marcador">
                     <p>{direccion}</p>
                </div>
                </Fragment>}
            </div> }
            </div>
       </Fragment>
    )
}

export default TiendaDescription
