import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import SliderCategorias from '../../../components/slider/categorias/SliderCategorias'
import Titulo from '../../../components/titulo/Titulo'
import ContadorTiendas from './components/ContadorTiendas'
import MapaTiendas from './components/MapaTiendas'
import SliderTiendas from './components/SliderTiendas'

function TiendaListado() {
    return (
        <Container>
            <Titulo>Tiendas</Titulo> 
            <SliderCategorias/>
            <ContadorTiendas/>
            <MapaTiendas/>
            <SliderTiendas/>
        </Container>
    )
}

export default TiendaListado
