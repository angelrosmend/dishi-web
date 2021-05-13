import React, { useContext } from "react";
import Slider from "react-slick";
import CardDestacado from "./CardDestacado";
import { fiveItemsSettings, fourItemsSettings } from "../../../settings/CarouselSettings";
import Subtitulo from "../Subtitulo/Subtitulo";
import { CartContext } from "../../../context/CarritoContext";
import SliderDishi from "../../../components/slider/SliderDishi";
import CardProduct from "../../../components/tarjetas/home/producto/Index";


function Destacados({destacados}) {

   if(!destacados || destacados.length < 2) return null
   return (
  <div className="espaciado espaciado-wrapper">
    <Subtitulo text='Super Ofertas'
               vermas='/destacados'/>
        <SliderDishi items={destacados} background="bg-white">
               {destacados && destacados.map(item => {
                  const { Id, Imagen, NombreProducto, Precio, Sucursal, ValorParaCajaDelivery, Stock} = item;
                  const {NombreFantasia} = Sucursal
                  return <CardProduct key={Id}
                                      id={Id}
                                      key={Id} 
                                      imagen={Imagen} 
                                      nombre={NombreProducto} 
                                      precio={Precio}
                                      sucursal={NombreFantasia}
                                      ValorParaCajaDelivery={ValorParaCajaDelivery}
                                      Stock={Stock}
                                      Tipo={0}
                                      destacado={true}/>
              })}
      </SliderDishi>   
      </div>
    );
}


export default Destacados