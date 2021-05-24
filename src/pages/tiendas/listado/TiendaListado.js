import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import SliderCategorias from '../../../components/slider/categorias/SliderCategorias'
import Titulo from '../../../components/titulo/Titulo'
import ContadorTiendas from './components/ContadorTiendas'
import MapaTiendas from './components/MapaTiendas'
import SliderTiendas from './components/SliderTiendas'
import {useGetTiendas} from '../../../hooks/tiendas/useGetTiendas'
import "./tiendaListado.css"


function TiendaListado() {
    const {tiendas, direcciones, latLng} = useGetTiendas()
    console.log(tiendas)
    
    return (
        <Container fluid className="pb-5 mb-5">
            <Titulo>Tiendas</Titulo> 
            <SliderCategorias/>
            <ContadorTiendas/>
            <MapaTiendas direcciones={direcciones}/>
            <SliderTiendas tiendas={tiendas}/>
        </Container>
    )
}

export default TiendaListado
