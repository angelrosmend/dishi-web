import React, { useContext } from 'react'
import Slider from "react-slick";
import { ContextData } from '../../context/DataContext';
import { fiveItemsSettings } from '../../settings/carouselsSettings';
import Subtitulo from '../Subtitulo/Subtitulo';
import Tienda from './Tienda';


function Tiendas() {
      /* CONTEXT API CALL */

     const {data} = useContext(ContextData)
     const {tiendas} = data;
     console.log(data);
 
  return (
    <div className="espaciado">

        <Subtitulo text="Tiendas"/>

    <div className="cards-2" 
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
