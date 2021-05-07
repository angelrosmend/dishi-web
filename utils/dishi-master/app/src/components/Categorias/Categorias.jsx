import React, { useContext } from 'react'
import { Fragment } from 'react'
import Subtitulo from '../Subtitulo/Subtitulo'
import Slider from "react-slick";
import { sixItemsSettings } from '../../settings/carouselsSettings';
import { ContextData } from '../../context/DataContext';
import Categoria from './Categoria';


function Categorias() {
   const {data}= useContext(ContextData)
   const {categorias} = data
    return (
 <Fragment>
    <Subtitulo text="Categorias"/>
    <div className="container pt-5" data-aos="fade-up" data-aos-delay="150">
        <Slider {...sixItemsSettings}>
            {categorias && categorias.map(categoria => {
                const {Id, Nombre, Imagen} = categoria;
                return <Categoria key={Id} nombre={Nombre} imagen={Imagen}/>
            })}
        </Slider>
    </div>
</Fragment>
    )
}

export default Categorias
