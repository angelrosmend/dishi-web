import React from 'react'
import { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router'
import { useProductosTienda } from '../../../hooks/tiendas/useGetProductosTienda'
import { useGetTienda } from '../../../hooks/tiendas/useGetTienda'
import BannerTienda from './components/BannerTienda'
import CardsInfoTienda from './components/CardsInfoTienda'
import DescripcionTienda from './components/DescripcionTienda'
import MapaTienda from './components/MapaTienda'
import ProductosTienda from './components/ProductosTienda'
import "./tiendaDetalle.css"

function TiendaDetalle() {
   const {id} = useParams()
   const {tienda} = useGetTienda(id)
   const {data, latitud, longitud,logo, nombre} = tienda 
   const {productos} = useProductosTienda(id)
   console.log(data)
   
    return (
       <Fragment>
          <BannerTienda logoTienda={logo}/>
          <Container fluid>
            <DescripcionTienda datos={tienda}/>
            <MapaTienda id={id} latitud={latitud} longitud={longitud}/>
            <CardsInfoTienda/>
            <ProductosTienda products={productos} NombreFantasia={nombre}/>
          </Container>
       </Fragment>
    )
}

export default TiendaDetalle
