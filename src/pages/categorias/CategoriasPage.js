import React, { useContext } from 'react'
import { Spinner } from 'reactstrap'
import FiltrosAlt from '../../components/filtros/FiltroPromo'
import Filtros from '../../components/filtros/Filtros'
import CustomSpinner from '../../components/spinner/Spinner'
import CardProductList from '../../components/tarjetas/listados/Producto/CardProductList'
import { CartContext } from '../../context/CarritoContext'
import { ContextUser } from '../../context/UserContext'
import { useFetchProductos } from '../../hooks/productos/useFetchProductos'
import { useFetchCategorias } from '../../hooks/useFetchCategorias'
import { urlCategorias, urlProductos } from '../../settings/requestSettings'
import CategoriaTitulo from './CategoriaTitulo'
import TarjetaProductoCategoria from './TarjetaProductoCategoria'




function CategoriasPage({match}) {

    

  const id = match.params.id
  const {categorias} = useFetchCategorias(urlCategorias, id)
  const {cartItems} = useContext(CartContext)
  const {user} = useContext(ContextUser)

    const {Id, Nombre, Imagen} = categorias

   
  
    const [state, setOrderby] = useFetchProductos(id, user)

    const {productos,loading} = state
    if(loading)return <CustomSpinner/>
    return (
    <div className="container">
       <div className="row">
         <div className="col-10 m-auto m-sm-auto ">
             <CategoriaTitulo key={Id}
                             nombre={Nombre}
                             imagen={Imagen}/>  
                             
             <FiltrosAlt setOrderby={setOrderby}/> 
            {productos.length < 1 ? 
            <h3 className='text-center'>No se encontraron productos de esta categoria</h3>
             :  
             productos.map(item =>{
                const { Id, Imagen, NombreProducto,Sucursal, Precio, ValorParaCajaDelivery, Stock} = item;
                const enCarrito =  cartItems.map(item=> item.id).includes(Id)
                const itemQuantity = cartItems.find(item => item.id === Id)
                const sucursal = Sucursal && Sucursal.NombreFantasia
                return (
                <CardProductList key={Id}
                                          id={Id}
                                        imagen={Imagen}
                                        nombre={NombreProducto}
                                        sucursal={sucursal}
                                        precio={Precio}
                                        enCarrito={enCarrito}
                                        ValorParaCajaDelivery={ValorParaCajaDelivery}
                                        Tipo={0}
                                        Stock={Stock}
                                        itemQuantity={itemQuantity}/>
                )
            })}
          </div>
         </div>
        </div>
    )
}

export default CategoriasPage
