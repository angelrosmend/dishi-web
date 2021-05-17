import React, { useContext } from 'react'
import FiltrosAlt from '../../components/filtros/FiltroPromo'
import ListLayout from '../../components/layouts/listados-layout/ListLayout'
import CardProductList from '../../components/tarjetas/listados/Producto/CardProductList'
import Titulo from '../../components/titulo/Titulo'
import { ContextUser } from '../../context/UserContext'
import { useGrillaHome } from '../../hooks/listados/useGrillaHome'
import { urlProductos } from '../../settings/requestSettings'

function PromosHotPage() {
    const {user, MobileUser} = useContext(ContextUser)
    const [state, setOrderBy] = useGrillaHome(urlProductos, user, MobileUser)
    const {productos} = state
    return (
       <ListLayout>
           <Titulo text="Promos Hot"/>
           <FiltrosAlt setOrderby={setOrderBy} />

           {productos && productos.map(item => {
               const { Id, Imagen, NombreProducto,Sucursal, Precio, ValorParaCajaDelivery, Stock} = item;
               return <CardProductList key={Id}
                                      id={Id}
                                      imagen={Imagen}
                                      nombre={NombreProducto}
                                      sucursal={Sucursal.NombreFantasia}
                                      precio={Precio}
                                      Tipo={1}
                                      ValorParaCajaDelivery={ValorParaCajaDelivery}
                                      Stock={Stock}/>
           })}
       </ListLayout>
    )
}

export default PromosHotPage
