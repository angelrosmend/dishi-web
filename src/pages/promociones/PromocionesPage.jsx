import React,{useContext} from 'react'
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import FiltrosAlt from '../../components/filtros/FiltroPromo';
import { CartContext } from '../../context/CarritoContext';
import { ContextUser } from '../../context/UserContext';
import { fechaPromo } from '../../helpers/fechas';
import { usePromociones } from '../../hooks/usePromociones';
import { urlHome} from '../../settings/requestSettings';
import BannerPromociones from './BannerPromociones';

function PromocionesPage() {
  const {user} = useContext(ContextUser)
   const [promos, setOrderBy] = usePromociones(urlHome, user)
    const {data: promociones, loading} =  promos
        
    const {cartItems} = useContext(CartContext)
    if(loading)return <Spinner style={{ position: 'absolute', width: '3rem', height: '3rem', top: '50%', left: '50%' }} color='primary'/>
    return (
        <Fragment>
            <BannerPromociones/>
              <FiltrosAlt setOrderby={setOrderBy}/>  
            <div className="container">
             <div className="row">
              <div className="col-10 m-auto m-sm-auto ">
              {promociones && promociones.map(item => {

           const {Id:id} = item
           const enCarrito =  cartItems.map(item=> item.id).includes(id)
           const itemQuantity = cartItems.find(item => item.id === id)

           return(
               <CardPromocion key={id}
                              promocion={item}
                              enCarrito={enCarrito}
                              Tipo={1}
                              itemQuantity={itemQuantity}
                            />
           )
            })}

               </div>
             </div>

           </div>
           
            </Fragment>
  
    )
}


 function CardPromocion({promocion,enCarrito, itemQuantity}){
    const {addToCart, removeFromCart, decrease, increase, changeQuantity} = useContext(CartContext)
    const qty = itemQuantity && itemQuantity.quantity
      
     const {Id: id, Imagen:imagen, Precio:precio, Sucursal, Nombre: nombre, ValorParaCajaDelivery, FechaDesde:desde, FechaHasta:hasta, Tipo} = promocion
     const sucursal = Sucursal && Sucursal.NombreFantasia
    

     return(
        <div className="row mt-5">
          <div className="col-12 m-auto m-sm-auto">
            <div className="row mb-4 bg-white no-gutters aos-init aos-animate" data-aos="fade-up" data-aos-delay="170">

            <div className="col-lg-5">
                <Link to={`/promociones/${id}`}>
                <img className="img-product-list  img-responsive img-fluid w-100" src={imagen} alt=''/>
                </Link>
            </div>
                <div className="col-lg-7 col-sm-auto col-md-6 px-lg-4 pt-lg-3 ml">
                    <div className="row mb-3 mt-2 mt-xl-0">
                    <div className="col pl-3 pl-xl-0 ml-xl-3">
                        <p className="fecha-promos font-weight-bold mt-xl-0 mt-2 pl-3 pl-xl-0 mb-2">{Sucursal.NombreFantasia}</p>
                        <h3 className="titulo-promos mb-0 mb-xl-2 ">{nombre}</h3>
                        <p className=" texto-validez mt-xl-0 mt-2 pl-3 pl-xl-0">{fechaPromo(desde, hasta)}</p>
                    </div>                  
                    </div>                   
                    <div className="row  no-gutters ">
                        <div className="col botones-promos px-lg-4 py-2 no-gutters  ">
                            <div className="row no-gutters">
                            <div className="col px-0 m-auto">
                              <p className="precio-promo-single mb-0 px-0 ">$ {precio}</p>
                            </div>
                            <div className=" detalle-qty  px-3 pt-2  ">
                            {enCarrito && 
                            <div className={ `btn-quantity-show-categorias `}>
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
                           {/*  <div className="col m-auto"><div className="beneficio-single rounded-pill"><p className="px-3 py-2 mb-0">15% OFF</p></div></div> */}
                            <div className=" col-sm-8 col-lg-6 text-lg-right text-right botones-producto px-0 px-sm-0 mt-2">

                    {enCarrito ? 
                    <button  onClick={()=> removeFromCart({ id, nombre, imagen, precio, ValorParaCajaDelivery, Tipo})} className="btn rounded-pill btn-primary p-0">
                    <span className="mx-3">REMOVER DEL CARRITO</span> 
                    <i className="fas fa-cart-plus cart-active" aria-hidden="true" data-toggle="popover" data-trigger="hover" data-placement="left" data-content="Agregar a Favoritos" data-original-title="" title=""></i>
                   </button>
                :
                   <button onClick={()=> addToCart({id, nombre, imagen, precio, ValorParaCajaDelivery, sucursal,Tipo})} className="btn rounded-pill btn-primary p-0">
                     <span className="ml-3 mr-3">AGREGAR AL CARRITO</span> 
                    <i className="fas fa-cart-plus" aria-hidden="true" data-toggle="popover" data-trigger="hover" data-placement="left" data-content="Agregar a Favoritos" data-original-title="" title=""></i>
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

export default PromocionesPage

