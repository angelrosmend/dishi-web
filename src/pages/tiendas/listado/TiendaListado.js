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
    const initialState = {id: null, nombreCategoria: null}
    const [tiendasPorCategoria, setTiendasPorCategoria] = useState(initialState)
    const {id, nombreCategoria} = tiendasPorCategoria
    const {tiendas, direcciones} = useGetTiendas(id)
    console.log(tiendas)
    
    return (
        <Container fluid className="pb-5 mb-5">
            <Titulo>Tiendas</Titulo> 
            <SliderCategoriasFilter filter={id} 
                                    setFilter={setTiendasPorCategoria}
                                    initialState={initialState}/>
            <ContadorTiendas count={tiendas.length} 
                             categoria={nombreCategoria}
                             />
            <MapaTiendas direcciones={direcciones}/>
            <SliderTiendas tiendas={tiendas}/>
        </Container>
    )
}

export default TiendaListado
