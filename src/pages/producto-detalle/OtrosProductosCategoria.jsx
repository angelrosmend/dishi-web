import React, { useContext, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { CartContext } from '../../context/CarritoContext'
import { useFetchProductos } from '../../hooks/productos/useFetchProductos'
import { urlProductos } from '../../settings/requestSettings'
import Subtitulo from '../home/Subtitulo/Subtitulo'
import { Link } from 'react-router-dom';
import { ContextUser } from '../../context/UserContext';
import '../home/Home.css'
import SliderDishi from '../../components/slider/SliderDishi';
import CardProduct from '../../components/tarjetas/home/producto/CardProduct';
import CustomSpinner from '../../components/spinner/Spinner';



function OtrosProductosCategoria( {categoria} ) {
    const {user} = useContext(ContextUser)

    
    const {cartItems} = useContext(CartContext)
    const [state] = useFetchProductos(urlProductos, categoria, user)
    const {productos, loading} = state
   
    if(!loading && productos.length < 1 )return null 
    return (
    <div className='margen-sm slider-otros-height'>

      <Subtitulo text='Otros productos de esta categoria'
                       vermas={`/categorias/${categoria}`}/>  

      {loading ?
      
      <CustomSpinner></CustomSpinner> :

           <SliderDishi items={productos}>
            {productos && productos.map(item => {

                const { Id, Imagen, NombreProducto,NombreSucursal, Precio, ValorParaCajaDelivery, Stock} = item;
                const enCarrito =  cartItems.map(item=> item.id).includes(Id)
                const itemQuantity = cartItems.map(itemCart => itemCart).find(item => item.id === Id)

            return <CardProduct key={Id}
                            id={Id}
                            imagen={Imagen}
                            nombre={NombreProducto}
                            sucursal={NombreSucursal}
                            precio={Precio}
                            enCarrito={enCarrito}
                            ValorParaCajaDelivery={ValorParaCajaDelivery}
                            Tipo={0}
                            Stock={Stock}
                            quantity={itemQuantity}
                                           />
            })}
          </SliderDishi>}
      
       </div>
    )
}

  


export default OtrosProductosCategoria