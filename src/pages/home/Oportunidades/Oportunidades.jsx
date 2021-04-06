import React, { Fragment, useContext } from 'react'
import Slider from "react-slick";
import { ContextProducts } from '../../../context/ProductContext';
import { twoItemsSettings } from '../../../settings/CarouselSettings';
import Subtitulo from '../Subtitulo/Subtitulo';
import Oportunidad from './Oportunidad';


function Oportunidades({oportunidades}) {
    return (
        <Fragment>
            <Subtitulo text="Oportunidades"
                       vermas='/oportunidades'/>

            <div className="container py-4 multiple-items3" data-aos="fade-up" data-aos-delay="150">
   
      <Slider {...twoItemsSettings}>


       {oportunidades && oportunidades.map(item => {
           const {Id, Imagen, NombreProducto, NombreSucursal, Precio} = item
           return <Oportunidad id={Id}
                               key={Id} 
                               imagen={Imagen} 
                               nombre={NombreProducto} 
                               sucursal={NombreSucursal}
                               precio={Precio}
                               />
       })}
        
   </Slider>
</div>


    </Fragment>
    )
}

export default Oportunidades
