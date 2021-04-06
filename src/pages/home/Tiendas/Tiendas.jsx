import React, { useContext } from 'react'
import Slider from "react-slick";
import { ContextProducts } from '../../../context/ProductContext';
import { fiveItemsSettings, fourItemsSettings } from '../../../settings/CarouselSettings';
import Subtitulo from '../Subtitulo/Subtitulo';
import Tienda from './Tienda';


function Tiendas({tiendas}) {
  return (
    <div className="espaciado">
        <Subtitulo text="Tiendas"/>

    <div className="px-5" 
         data-aos="fade-up" 
         data-aos-delay="150">
        <div className="container-fluid pt-3">
    
        <Slider {...fiveItemsSettings}>
            {tiendas && tiendas.map(tienda => {

                const {Id, NombreFantasia, Direccion, Logo, Rubro} = tienda;

                return <Tienda key={Id} 
                               nombre={NombreFantasia} 
                               direccion={Direccion}
                               logo={Logo}
                               rubro={Rubro}/>
            })}     
        </Slider>

      </div>
    </div>
    </div> 
    )
}

export default Tiendas
