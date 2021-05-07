import React, { useContext } from 'react'
import SliderDishi from '../../../components/slider/SliderDishi';
import Subtitulo from '../Subtitulo/Subtitulo';
import Tienda from './Tienda';


function Tiendas({tiendas}) {
  return (
    <div className="espaciado">
      <Subtitulo text="Tiendas"/>
          <SliderDishi items={tiendas}>   
            {tiendas && tiendas.map(tienda => {

                const {Id, NombreFantasia, Direccion, Logo, Rubro} = tienda;

                return <Tienda key={Id} 
                               nombre={NombreFantasia} 
                               direccion={Direccion}
                               logo={Logo}
                               rubro={Rubro}/>
            })}     
         </SliderDishi> 
    </div> 
    )
}

export default Tiendas
