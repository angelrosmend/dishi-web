import React, { useContext } from 'react'
import { Fragment } from 'react'
import HeaderLista from '../../components/banners/headers-listados/HeaderLista'
import FiltrosAlt from '../../components/filtros/FiltroPromo'
import ListLayout from '../../components/layouts/listados-layout/ListLayout'
import SliderCategoriasFilter from '../../components/slider/categorias/SliderCategoriasFilter'
import CardProductList from '../../components/tarjetas/listados/Producto/CardProductList'
import Titulo from '../../components/titulo/Titulo'
import { CartContext } from '../../context/CarritoContext'
import { ContextUser } from '../../context/UserContext'
import { productType } from '../../helpers/productTypes'
import { useGrillaHome } from '../../hooks/listados/useGrillaHome'
import { useDestacados } from '../../hooks/useDestacados'
import { urlHome, urlProductos } from '../../settings/requestSettings'


function DestacadosPage() {
    const {cartItems} = useContext(CartContext)
    const {user, MobileUser} = useContext(ContextUser)
    /* const [destacados, setOrderBy] = useDestacados(urlHome, user)
    const {data} = destacados */
   
    const [state, setOrderBy] = useGrillaHome(urlProductos, user, MobileUser)
    const {productos} = state

    return (
      <Fragment>
         <HeaderLista section={productType.ofertas} titulo="Super Ofertas"/>
          <ListLayout>
              <SliderCategoriasFilter/>
              <FiltrosAlt setOrderby={setOrderBy} />

            { productos && productos.map(item => {
                const { Id, Imagen, NombreProducto,Sucursal, Precio, ValorParaCajaDelivery, Stock} = item;
                return(  <CardProductList key={Id}
                                          id={Id}
                                          imagen={Imagen}
                                          nombre={NombreProducto}
                                          sucursal={Sucursal.NombreFantasia}
                                          precio={Precio}
                                          Tipo={0}
                                          ValorParaCajaDelivery={ValorParaCajaDelivery}
                                          Stock={Stock}/>
                                           )})}
              </ListLayout>
              </Fragment>
    )
}

export default DestacadosPage
