import React, { Fragment, useContext } from 'react'
import Slider from "react-slick";
import { ContextData } from '../../context/DataContext';
import '../../css/addons.css'
import { twoItemsSettings } from '../../settings/carouselsSettings';
import Subtitulo from '../Subtitulo/Subtitulo';
import Oportunidad from './Oportunidad';


function Oportunidades() {

    const {data} =  useContext(ContextData)
    const {oportunidades} = data;
    console.log(oportunidades);


    return (
        <Fragment>
            <Subtitulo text="Oportunidades"/>

            <div className="container py-4 multiple-items3" data-aos="fade-up" data-aos-delay="150">
   
   <Slider {...twoItemsSettings}>


       {oportunidades && oportunidades.map(oportunidad => {
           const {Id, Imagen, NombreProducto, NombreSucursal, Precio} = oportunidad
           return <Oportunidad key={Id} 
                               logo={Imagen} 
                               producto={NombreProducto} 
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
