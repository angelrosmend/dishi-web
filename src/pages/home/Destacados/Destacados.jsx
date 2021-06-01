import React, { useContext } from "react";
import Slider from "react-slick";
import Subtitulo from "../Subtitulo/Subtitulo";
import SliderDishi from "../../../components/slider/SliderDishi";
import CardProduct from "../../../components/tarjetas/home/producto/CardProduct";
import HeaderSectionHome from "../../../components/banners/headers-home/HeaderSectionHome";
import { productType } from "../../../helpers/productTypes";


function Destacados({destacados}) {

   if(!destacados || destacados.length < 1) return null
   return (
  <div className="espaciado espaciado-wrapper">
       <HeaderSectionHome titulo="Super Ofertas" section={productType.ofertas} link="destacados"/> 
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
                                      MediosPago={SucursalMediosPago}
                                      type={productType.ofertas}
                                      />
              })}
      </SliderDishi>   
      </div>
    );
}


export default Destacados