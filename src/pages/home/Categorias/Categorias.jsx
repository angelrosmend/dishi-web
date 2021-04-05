import React, { useContext } from 'react'
import { Fragment } from 'react'
import Subtitulo from '../Subtitulo/Subtitulo'
import Slider from "react-slick";
import Categoria from './Categoria';
import { ContextProducts } from '../../../context/ProductContext';
import { Element } from 'react-scroll'
import { sixItemsSettings, sixItemsSettingsC } from '../../../settings/CarouselSettings';


function Categorias() {
   const {data}= useContext(ContextProducts)
   const {categorias} = data
    return (
 <Fragment>
    
    <Subtitulo text="Categorias"/>
    
    <div className="container pt-5" data-aos="fade-up" data-aos-delay="150">
        <Slider {...sixItemsSettingsC}>
            {categorias && categorias.map(categoria => {
                const {Id, Nombre, Imagen} = categoria;
                return <Categoria key={Id} id={Id} nombre={Nombre} imagen={Imagen}/>
            })}
        </Slider>
    </div>
</Fragment>
    )
}

export default Categorias