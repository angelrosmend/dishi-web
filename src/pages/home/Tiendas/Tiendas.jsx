import React, { useContext } from 'react'
import SliderDishi from '../../../components/slider/SliderDishi';
import CardProduct from '../../../components/tarjetas/home/producto/CardProduct';
import CardTienda from '../../../components/tarjetas/home/tiendas/CardTienda';
import Subtitulo from '../Subtitulo/Subtitulo';
import Tienda from './Tienda';


function Tiendas({tiendas}) {
  return (
    <div className="espaciado">
      <Subtitulo text="Tiendas"/>
          <SliderDishi items={tiendas}>   
            {tiendas && tiendas.map(tienda => {

                const {Id, NombreFantasia, Direccion, Logo, Rubro} = tienda;

                return <CardTienda key={Id} 
                               nombre={NombreFantasia} 
                               direccion={Direccion}
                               imagen={Logo}
                               rubro={Rubro}
                               />
            })}     
         </SliderDishi> 
    </div> 
    )
}

export default Tiendas
