 import React, { useContext } from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Spinner } from 'reactstrap'
import { CartContext } from '../../context/CarritoContext'
import { ContextUser } from '../../context/UserContext'
import { fechaPromo } from '../../helpers/fechas'
import { useFetchPromo } from '../../hooks/useFetchPromocion'
import { urlHome } from '../../settings/requestSettings'
import BannerPromociones from './BannerPromociones'
import ProductosPromo from './ProductosPromo'
import './promos.css'

function PromocionesDetalle({match}) {
    const idMatch = match.params.id
    const {user} = useContext(ContextUser)
    const { promocion, productos, loading} = useFetchPromo(urlHome, idMatch, user)
    const {Id: id, Nombre: nombre, Imagen: imagen, Precio: precio, Sucursal, ValorParaCajaDelivery, FechaDesde, FechaHasta} = promocion

    const{ cartItems} = useContext(CartContext)
    const enCarrito =  cartItems.map(item=> item.id).includes(id)
    const itemQuantity = cartItems.find(item => item.id === id)

    

    if(loading)return <Spinner style={{ position: 'absolute', width: '3rem', height: '3rem', top: '50%', left: '50%' }} color='primary'/>
    return (
        <Fragment>
            <BannerPromociones/>
        <div className="container">
          <div className="row">
            <div className="col-10 m-auto m-sm-auto " >
            <div className="row  mb-4">               
                <div className="col-lg-8 col-sm-auto m-auto m-sm-auto pl-0 pl-sm-0 text-lg-left text-center titulo-categorias"><p>Bimbo / promociones / combos</p></div>
                <div className="col-lg-3 col-sm-auto m-auto m-sm-auto text-lg-right text-center"> <Link to='/promociones'> Ver otras promociones</Link></div>
            </div>
         </div>
         </div>
        <CardPromocion id={id}
                       key={id}
                       imagen={imagen}
                       nombre={nombre}
                       precio={precio}
                       sucursal={Sucursal.NombreFantasia}
                       enCarrito={enCarrito}
                       Tipo={1}
                       desde={FechaDesde}
                       hasta={FechaHasta}
                       ValorParaCajaDelivery={ValorParaCajaDelivery}
                       itemQuantity={itemQuantity}/>
    
   <div className="row my-4">
        <div className="col"><p className="texto-azul">El combo incluye</p></div>
    </div>
    <div className="row no-gutters mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="170">
        <div className="productos-incluidos-wrapper">
        {productos && productos.map( item =>{
               const { Id, Imagen, NombreProducto, Precio, CantidadPedida, Sucursal} = item;
               
               return(
           <ProductosPromo
                   key={Id}
                   id={Id}
                   imagen={Imagen}
                   nombre={NombreProducto}
                   precio={Precio}
                   producto={item}
                   cantidad={CantidadPedida}
                   sucursal={Sucursal.NombreFantasia}/>
               )
               })} 
        </div>
    </div>
    </div>
</Fragment>
    )
}


function CardPromocion({id, imagen, nombre,precio, sucursal, enCarrito, ValorParaCajaDelivery, Tipo, desde, hasta, itemQuantity}) {
    const{addToCart, removeFromCart, increase, decrease, changeQuantity} = useContext(CartContext)
    const qty = itemQuantity && itemQuantity.quantity

    return(
        <div className="row">
          <div className="col-12 m-auto m-sm-auto ">
            <div className="row mb-4 bg-white no-gutters aos-init aos-animate" data-aos="fade-up" data-aos-delay="170">

            <div className="col-lg-4">
                 <img className="img-product-list img-responsive img-fluid w-100" src={imagen} alt=''/>
            </div>
                <div className="col-lg-8 col-sm-auto col-md-6 px-lg-4 pt-lg-3 ml">
                    <div className="row mb-3 mt-2 mt-xl-0">
                    <div className="col pl-3 pl-xl-0 ml-xl-3">
                        <p className="fecha-promos font-weight-bold mt-xl-0 mt-2 pl-3 pl-xl-0 mb-2">{sucursal}</p>
                        <h3 className="titulo-promos mb-0 mb-xl-2 ">{nombre}</h3>
                        <p className=" texto-validez mt-xl-0 mt-2 pl-3 pl-xl-0">{fechaPromo(desde, hasta)}</p>
                    </div>                  
                    </div>                   
                    <div className="row  no-gutters ">
                        <div className="col botones-promos  px-3 px-lg-4 py-2 ">
                            <div className="row ">
                            <div className="col col-lg-2  my-2 py-0 ">
                                <p className="precio-promo-single mb-0">$ {precio}</p>
                            </div>
                           {/*  <div className="col m-auto"><div className="beneficio-single rounded-pill"><p className="px-3 py-2 mb-0">15% OFF</p></div></div> */}

                    <div className="col-sm-8 col-lg-4 detalle-qty py-md-3 col-md-4">
            {enCarrito && 
            <div className={ `btn-quantity-home-show-detalle`}>
            <i className="fas fa-minus btn-quantity-home-btn"
               onClick={()=>decrease({id, nombre, imagen, precio, ValorParaCajaDelivery, Tipo}, qty)}></i>

               <input className="quantity-home my-auto"
                    min="0" 
                    name="quantity" 
                    value={qty}
                    onChange={(e) =>changeQuantity({id, nombre, imagen, precio, ValorParaCajaDelivery, Tipo}, parseInt(e.target.value))}
                    type="number"></input>
    
               <i  onClick={()=> increase({id, nombre, imagen, precio, ValorParaCajaDelivery, Tipo})} className="fas fa-plus btn-quantity-home-btn"></i>
               </div>}
            </div>
            <div className="detalle-btn botones-producto col-sm-12 col-md-12 col-lg-6 py-2 my-2">
            {enCarrito ? <button  onClick={()=> removeFromCart({ id, nombre, imagen, precio, ValorParaCajaDelivery, sucursal,Tipo})} className="btn rounded-pill btn-primary p-0">
                    <span className="ml-3 mr-3">REMOVER DEL CARRITO</span> 
                    <i className="fas fa-cart-plus cart-active"  data-toggle="popover" data-trigger="hover" data-placement="left" data-content="Agregar a Favoritos" aria-hidden="true" data-original-title="" title=""></i>
                </button>
                :
                <button onClick={()=> addToCart({id, nombre, imagen, precio, ValorParaCajaDelivery, sucursal, Tipo})} className="btn rounded-pill btn-primary p-0">
                    <span className="ml-3 mr-3">AGREGAR AL CARRITO</span> 
                    <i className="fas fa-cart-plus"  data-toggle="popover" data-trigger="hover" data-placement="left" data-content="Agregar a Favoritos" aria-hidden="true" data-original-title="" title=""></i>
                </button>}
            </div>
               
                       </div>                           
                        </div>        
                    </div>
                </div>
            </div>
          </div>
        </div>
       
    )
}
export default PromocionesDetalle
