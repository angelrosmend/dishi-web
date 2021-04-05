
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CarritoContext'
import { useQuantity } from '../../hooks/productos/useQuantity'

function TarjetaProductoCategoria(props) {
    const {cartItems, addToCart, removeFromCart, decrease, increase, changeQuantity} = useContext(CartContext)

    const {id, imagen, nombre, precio, sucursal, Stock, ValorParaCajaDelivery, Tipo, } = props

    const [inCart, quantity] = useQuantity(cartItems, id)
    
    return (
        <div className="row mb-4 bg-white no-gutters aos-init aos-animate mt-5 " 
             data-aos="fade-up" 
             data-aos-delay="170">
            <div className="col-sm-auto">
                <img src={imagen} alt="" className="img-product-list img-responsive img-fluid"/>
            </div>

        <div className="col-lg-8 col-sm-auto col-md-6 px-4 pt-3 no-gutters">
            <div className="row">
                <div className="col">
                        <p className="titulo font-weight-bold">{sucursal}</p>
                </div>    
            </div>
            <div className="row">
                <div className="col">
                   <h3 className="titulo-productos">{nombre}</h3>
               </div>
            </div>
            <div className="row">
                <div className="col">
                <p className="texto-descripcion">{nombre}<br/><Link to={`/detalle/${id}`}>Ver más</Link></p>   
               </div>
            </div>
            <div className="row envio m-auto no-gutters " id="precio">
                <div className="col-lg-5 col-sm-12  m-auto "><p className="texto-precio mb-lg-0"></p></div>
                <div className="col  m-auto">
                   
                </div>
                <div className="col m-auto ">
                    <p className="texto-envio mb-lg-0 text-lg-right">
                        <i className="fas fa-motorcycle mr-2"></i>Envío a domicilio</p>
                </div>
            </div>
        <div className="row  ">
        <div className="col botones-promos px-3 px-lg-4 py-2 ">
        <div className="row no-gutters ">

        <div className="col-3  mt-3 px-0">
                    <p className="precio-promo-single mb-0 no-gutters  px-0">$ {precio}</p>
        </div>
        <div className=" detalle-qty mx-3 pt-3 mr-3 pr-3 pb-0">
            {inCart && 
            <div className={ `btn-quantity-show-categorias`}>
            <i className="fas fa-minus btn-quantity-home-btn"
               onClick={()=> decrease({...props}, quantity)}></i>

               <input className="quantity-home my-auto"
                    min="0" 
                    name="quantity" 
                    value={quantity}
                    onChange={(e) =>changeQuantity({...props}, parseInt(e.target.value))}
                    type="number"></input>
    
               <i  onClick={()=> increase({...props})} className="fas fa-plus btn-quantity-home-btn"></i>
               </div>}
            </div>

            {/*  <div className="col m-auto"><div className="beneficio-single rounded-pill"><p className="px-3 py-2 mb-0">15% OFF</p></div></div> */}
                <div className="col-lg-5 text-lg-right text-right botones-producto mt-3 ">

            { Stock ?
            inCart ? 
            <button  onClick={()=> removeFromCart({ id, nombre, imagen, precio, ValorParaCajaDelivery, sucursal,Tipo})} className="btn rounded-pill btn-primary p-0">
            <span className="ml-3 mr-3">REMOVER DEL CARRITO</span> 
            <i className="fas fa-cart-plus cart-active" aria-hidden="true" data-toggle="popover" data-trigger="hover" data-placement="left" data-content="Agregar a Favoritos" aria-hidden="true" data-original-title="" title=""></i>
            </button>
            :
            <button onClick={()=> addToCart({id, nombre, imagen, precio, ValorParaCajaDelivery, Tipo})} className="btn rounded-pill btn-primary p-0">
            <span className="ml-3 mr-3">AGREGAR AL CARRITO</span> 
            <i className="fas fa-cart-plus" aria-hidden="true" data-toggle="popover" data-trigger="hover" data-placement="left" data-content="Agregar a Favoritos" aria-hidden="true" data-original-title="" title=""></i>
            </button>
            :
            <p className='sin-stock'>Sin Stock</p>
            }
                </div>
            </div>                           
            </div>        
</div>

        </div>
     
    </div>
    )
}


export default TarjetaProductoCategoria

