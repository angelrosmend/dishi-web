import React from 'react'
import { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import SliderDishi from '../../../components/slider/SliderDishi'
import BannerTienda from './components/BannerTienda'
import CardsInfoTienda from './components/CardsInfoTienda'
import DescripcionTienda from './components/DescripcionTienda'
import MapaTienda from './components/MapaTienda'
import "./tiendaDetalle.css"

function TiendaDetalle() {
    return (
       <Fragment>
          <BannerTienda/>
          <Container>
            <DescripcionTienda/>
            <MapaTienda/>
            <CardsInfoTienda/>
          </Container>
       </Fragment>
    )
}

export default TiendaDetalle
