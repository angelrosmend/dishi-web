import React, { useContext } from "react";
import Slider from "react-slick";
import Subtitulo from "../Subtitulo/Subtitulo";
import SliderDishi from "../../../components/slider/SliderDishi";
import CardProduct from "../../../components/tarjetas/home/producto/CardProduct";


function Destacados({destacados}) {

  console.log('prod',destacados)

   if(!destacados || destacados.length < 2) return null
   return (
  <div className="espaciado espaciado-wrapper">
    <Subtitulo text='Super Ofertas'
               vermas='/destacados'/>
        <SliderDishi items={destacados} background="bg-white">
               {destacados && destacados.map(item => {
                  const { Id, Imagen, NombreProducto, Precio, Sucursal, ValorParaCajaDelivery, Stock, SucursalMediosPago} = item;
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
                                      destacado={true}
                                      MediosPago={SucursalMediosPago}/>
              })}
      </SliderDishi>   
      </div>
    );
}


export default Destacados