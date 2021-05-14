import React, { useContext } from 'react'
import FiltrosAlt from '../../components/filtros/FiltroPromo'
import Titulo from '../../components/titulo/Titulo'
import { CartContext } from '../../context/CarritoContext'
import { ContextUser } from '../../context/UserContext'
import { useGrillaHome } from '../../hooks/listados/useGrillaHome'
import { useDestacados } from '../../hooks/useDestacados'
import { urlHome, urlProductos } from '../../settings/requestSettings'

import TarjetaDestacados from './TarjetaDestacados'

function DestacadosPage() {
    const {cartItems} = useContext(CartContext)
    const {user, MobileUser} = useContext(ContextUser)
    /* const [destacados, setOrderBy] = useDestacados(urlHome, user)
    const {data} = destacados */
   
    const [state, setOrderBy] = useGrillaHome(urlProductos, user, MobileUser)
    const {productos} = state

    return (
        <div className="container">
        <div className="row mb-5">
        <div className="col-10 m-auto m-sm-auto ">
            <Titulo text='Destacados'/>
              <FiltrosAlt setOrderby={setOrderBy} />

            { productos && productos.map(item => {
                const { Id, Imagen, NombreProducto,Sucursal, Precio, ValorParaCajaDelivery, Stock} = item;
                const enCarrito =  cartItems.map(item=> item.id).includes(Id)
             return(  <TarjetaDestacados key={Id}
                                        id={Id}
                                        imagen={Imagen}
                                        nombre={NombreProducto}
                                        sucursal={Sucursal.NombreFantasia}
                                        precio={Precio}
                                        enCarrito={enCarrito}
                                        Tipo={0}
                                        ValorParaCajaDelivery={ValorParaCajaDelivery}
                                        Stock={Stock}/>
                    )})}


        </div>
    </div>
  </div>
    )
}

export default DestacadosPage
