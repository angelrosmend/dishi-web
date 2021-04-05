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



function ProductoDetalle({match}) {
    const baseUrl = process.env.REACT_APP_BASE_URL
    const urlDetalle = `${baseUrl}api/V2SucursalProductos/GetSucursalProducto`
    const id = match.params.id
    const {cartItems} = useContext(CartContext)
    const {user} = useContext(ContextUser)
    const {details, loading} = useFetchDetail(id, urlDetalle, user)
    

    if(loading) return <Spinner style={{ position: 'absolute', width: '3rem', height: '3rem', top: '50%', left: '50%' }} color='primary'/>
    return (
        <div className=''>
           
            {details && details.map(item => {
            const { Id, Imagen, NombreProducto, NombreSucursal, Precio, Sucursal, DescripcionProducto, ProductoCategorias, ValorParaCajaDelivery, Stock} = item
            const enCarrito =  cartItems.map(item => item.id).includes(Id)
            const itemQuantity = cartItems.find(item => item.id === Id)
       
            return( 
                <Fragment>
            <div key={Id} className='detalle-wrapper'>
                <NombreCategoriaProducto categoria={ProductoCategorias[0].Categoria}/> 
                <FichaProducto key={id}>
                    <SlideFotoProducto imagen={Imagen}/>
                     <TarjetaProducto id={Id}
                                      key={Id}
                                      nombre={NombreProducto}
                                      descripcion={DescripcionProducto}
                                      precio={Precio}
                                      imagen={Imagen}
                                      sucursal={NombreSucursal}
                                      enCarrito={enCarrito}
                                      ValorParaCajaDelivery={ValorParaCajaDelivery}
                                      Stock={Stock}
                                      itemQuantity={itemQuantity}
                                  /> 
                </FichaProducto>
                </div>
                 <OtrosProductosCategoria  categoria={ProductoCategorias[0].Categoria} />
                 </Fragment>
                )})}

              
            </div>
    )
}

export default ProductoDetalle
