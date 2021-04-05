import React, { useContext } from 'react'
import Slider from "react-slick";
import { ContextProducts } from '../../../context/ProductContext';
import { fourItemsSettings } from '../../../settings/CarouselSettings';
import Subtitulo from '../Subtitulo/Subtitulo';
import Tienda from './Tienda';


function Tiendas() {

     const {data} = useContext(ContextProducts)
     const {tiendas} = data;

  return (
    <div className="espaciado">
        <Subtitulo text="Tiendas"/>

    <div className="cards-2" 
         data-aos="fade-up" 
         data-aos-delay="150">
        <div className="container-fluid pt-3">
    
        <Slider {...fourItemsSettings}>
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
