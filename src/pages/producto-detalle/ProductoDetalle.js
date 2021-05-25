import React,{ useContext} from 'react'
import NombreCategoriaProducto from './NombreCategoriaProducto'
import '../../assets/css/productos.css'
import FichaProducto from './FichaProducto'
import SlideFotoProducto from './SlideFotoProducto'
import TarjetaProducto from './TarjetaProducto'
import OtrosProductosCategoria from './OtrosProductosCategoria'
import { Fragment } from 'react'
import { Spinner } from 'reactstrap'
import {useFetchDetail} from '../../hooks/useFetchDetail'
import { CartContext } from '../../context/CarritoContext'
import { ContextUser } from '../../context/UserContext'
import { useQuantity } from '../../hooks/productos/useQuantity'
import CustomSpinner from '../../components/spinner/Spinner'
import ProductoDescripcion from './ProductoDescripcion'
import { useParams } from 'react-router'



function ProductoDetalle() {
   
    const {id }= useParams()
    const {cartItems} = useContext(CartContext)
    const {user, MobileUser} = useContext(ContextUser)
    const {details, loading} = useFetchDetail(id, user, MobileUser)
    const { Id, Imagen, NombreProducto,IdCategoria, NombreSucursal, Precio, Sucursal, DescripcionProducto, ProductoCategorias, ValorParaCajaDelivery, Stock} = details
    const [inCart, quantity] = useQuantity(cartItems, Id)
    console.log(details)
   
    if(loading) return <CustomSpinner/>
    return (

           <Fragment>
            <div key={Id} className='detalle-wrapper'>
                 <NombreCategoriaProducto categoria={IdCategoria}/>
                <FichaProducto key={id}>
                    <SlideFotoProducto imagen={Imagen}/>
                     <TarjetaProducto id={Id}
                                      key={Id}
                                      nombre={NombreProducto}
                                      direccion={Sucursal.Direccion}
                                      descripcion={DescripcionProducto}
                                      precio={Precio}
                                      imagen={Imagen}
                                      sucursal={NombreSucursal}
                                      enCarrito={inCart}
                                      ValorParaCajaDelivery={ValorParaCajaDelivery}
                                      Stock={Stock}
                                      itemQuantity={quantity}
                                  /> 
                </FichaProducto>
                <ProductoDescripcion descripcion={DescripcionProducto} logoTienda={Sucursal.Logo} sucursal={NombreSucursal}/>

                </div>
                   <OtrosProductosCategoria categoria={IdCategoria} /> 
                 </Fragment>
    )
}

export default ProductoDetalle
