import React, { useContext } from "react";
import Slider from "react-slick";
import CardDestacado from "./CardDestacado";
import { fiveItemsSettings, fourItemsSettings } from "../../../settings/CarouselSettings";
import Subtitulo from "../Subtitulo/Subtitulo";
import { CartContext } from "../../../context/CarritoContext";
import SliderDishi from "../../../components/slider/SliderDishi";


function Destacados({destacados}) {

    const {cartItems} = useContext(CartContext)
    const configSliderSettings = destacados && destacados.length >= 5 ? fiveItemsSettings : fourItemsSettings
   

   if(!destacados || destacados.length < 2) return null
   return (
  <div className="espaciado espaciado-wrapper">
    <Subtitulo text='Destacados'
               vermas='/destacados'/>
        <SliderDishi items={destacados}>
               {destacados && destacados.map(item => {
                  const { Id, Imagen, NombreProducto, Precio, Sucursal, ValorParaCajaDelivery, Stock} = item;
                  const {NombreFantasia} = Sucursal
                  const enCarrito =  cartItems.map(item=> item.id).includes(Id)
                  return <CardDestacado id={Id}
                                        key={Id} 
                                        imagen={Imagen} 
                                        nombre={NombreProducto} 
                                        precio={Precio}
                                        sucursal={NombreFantasia}
                                        enCarrito={enCarrito}
                                        ValorParaCajaDelivery={ValorParaCajaDelivery}
                                        Stock={Stock}
                                        Tipo={0}/> 
              })}
      </SliderDishi>   
      </div>
    );
}


export default Destacados