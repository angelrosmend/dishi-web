import React, { Fragment, useState } from 'react'
import { Container } from 'react-bootstrap'
import Titulo from '../../../components/titulo/Titulo'
import ContadorTiendas from './components/ContadorTiendas'
import MapaTiendas from './components/MapaTiendas'
import SliderTiendas from './components/SliderTiendas'
import {useGetTiendas} from '../../../hooks/tiendas/useGetTiendas'
import "./tiendaListado.css"
import SliderCategoriasFilter from '../../../components/slider/categorias/SliderCategoriasFilter'


function TiendaListado() {
    const [tiendasPorCategoria, setTiendasPorCategoria] = useState(null)
    const {tiendas, direcciones, latLng} = useGetTiendas(tiendasPorCategoria)
    console.log(tiendas)
    
    return (
        <Container fluid className="pb-5 mb-5">
            <Titulo>Tiendas</Titulo> 
            <SliderCategoriasFilter filter={tiendasPorCategoria} setFilter={setTiendasPorCategoria}/>
            <ContadorTiendas/>
            <MapaTiendas direcciones={direcciones}/>
            <SliderTiendas tiendas={tiendas}/>
        </Container>
    )
}

export default TiendaListado
