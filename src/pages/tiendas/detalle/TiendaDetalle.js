import React from 'react'
import { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router'
import { useGetTienda } from '../../../hooks/tiendas/useGetTienda'
import BannerTienda from './components/BannerTienda'
import CardsInfoTienda from './components/CardsInfoTienda'
import DescripcionTienda from './components/DescripcionTienda'
import MapaTienda from './components/MapaTienda'
import "./tiendaDetalle.css"

function TiendaDetalle() {
   const {id} = useParams()
   const {tienda} = useGetTienda(id)
   const {data, latitud, longitud,logo} = tienda
    return (
       <Fragment>
          <BannerTienda logoTienda={logo}/>
          <Container>
            <DescripcionTienda datos={tienda}/>
            <MapaTienda id={id} latitud={latitud} longitud={longitud}/>
            <CardsInfoTienda/>
          </Container>
       </Fragment>
    )
}

export default TiendaDetalle
