import React, { useContext } from "react";
import Slider from "react-slick";
import Subtitulo from "../Subtitulo/Subtitulo";
import { ContextData } from "../../context/DataContext";
import CardDestacado from "./CardDestacado";
import { fiveItemsSettings } from "../../settings/carouselsSettings";

function Destacados() {

    const {data}= useContext(ContextData)
    const {oportunidades} = data;

   return (
  <div className="espaciado">
                <Subtitulo text="Destacados"/>
         {/*Tarjetas*/}
      <div className="container-fluid cards-2">
        <div className="container-fluid pt-3 bg-dest" data-aos="fade-up" data-aos-delay="170">
          <Slider {...fiveItemsSettings}>
              {oportunidades && oportunidades.map(item => {
                  const { Id, Imagen, NombreProducto,NombreSucursal, Precio} = item;
                  return <CardDestacado key={Id} 
                                        imagen={Imagen} 
                                        nombre={NombreProducto} 
                                        precio={Precio}
                                        sucursal={NombreSucursal}/>
              })}
          </Slider>
          </div>
        </div>    
      </div>
    );
}


export default Destacados