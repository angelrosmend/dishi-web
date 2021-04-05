import React, { useContext } from 'react'
import { ContextProducts } from '../../context/ProductContext';
import { fiveItemsSettings } from '../../settings/CarouselSettings';
import Producto from './Producto';
import Slider from "react-slick";

function ProductosLista() {

    const{products} = useContext(ContextProducts)

    return (
        <div className="espaciado">
      <div className="container-fluid cards-2">
        <div className="container-fluid pt-3 bg-dest" data-aos="fade-up" data-aos-delay="170">
          <Slider {...fiveItemsSettings}>
              {products && products.map(item => {
                  const {Id,NombreProducto, Imagen,Precio,NombreSucursal} = item;
                return <Producto      id={Id}
                                      key={Id} 
                                      imagen={Imagen} 
                                      nombre={NombreProducto} 
                                      precio={Precio}
                                      sucursal={NombreSucursal}
                                      producto={item}/>
              })}
          </Slider>
          </div>
        </div>    
      </div>
    )
}

export default ProductosLista
