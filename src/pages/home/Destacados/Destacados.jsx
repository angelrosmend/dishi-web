import React, { useContext } from "react";
import Slider from "react-slick";
import CardDestacado from "./CardDestacado";
import { fiveItemsSettings, fourItemsSettings } from "../../../settings/CarouselSettings";
import Subtitulo from "../Subtitulo/Subtitulo";
import { CartContext } from "../../../context/CarritoContext";


function Destacados({destacados}) {

    const {cartItems} = useContext(CartContext)
    const configSliderSettings = destacados && destacados.length >= 5 ? fiveItemsSettings : fourItemsSettings
   

   if(destacados.length < 1) return null
   return (
  <div className="espaciado espaciado-wrapper">
    <Subtitulo text='Destacados'
               vermas='/destacados'/>
      <div className={`container-fluid p-sm-2 pt-3 p-md-5 bg-white ${destacados && destacados.length >=5 ? 'width-5-items' : 'width-4-items pr-0'}`}>
        <div className='mx-auto ' data-aos="fade-up" data-aos-delay="170">
          <Slider { ...configSliderSettings}>
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
          </Slider>
          </div>
        </div>    
      </div>
    );
}


export default Destacados