import React, { useState } from 'react'
import TiendaImg from './components/TiendaImg'
import TiendaDescription from './components/TiendaDescription'
import './cardtienda.css'


function CardTienda({id, logo, nombre, direccion, rubro}) {

    const [showAddress, setShowAddress] = useState(false)
    const toggleAddress = () => setShowAddress(!showAddress)

    return (
    <div className="col-sm-12 col-md-12 card-container-tienda  pt-4 "
         onMouseEnter={toggleAddress}
         onMouseLeave={toggleAddress}>
       <div className="mx-auto card-container-tienda-wrapper px-0">
           <TiendaImg imagen={logo}
                      linkId={id}/>
           <TiendaDescription nombre={nombre}
                              direccion={direccion}
                              rubro={rubro}
                              showAddress={showAddress}/>
         
      </div>
    </div>
    )
}

export default CardTienda
