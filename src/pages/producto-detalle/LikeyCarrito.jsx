import React, { useContext } from 'react'
import { Fragment } from 'react'
import { CartContext } from '../../context/CarritoContext'

function LikeyCarrito(props) {
    const { precio, enCarrito, Stock, quantity } = props
    const {addToCart, removeFromCart, increase, decrease, changeQuantity} = useContext(CartContext)
    
    return (
        <Fragment>
        <div className="col footer-card-producto ">
           <div className="row m-auto  mb-5 py-4 px-1 mr-3 no-gutters ">
                <div className="col-5 pl-2 m-auto "><p className="texto-precio-grande mb-lg-0">${precio}</p></div>
                <div className="col-5  m-auto pr-5 "><p className="texto-envio mb-lg-0 text-lg-right"><i className="fas fa-motorcycle mr-2"></i>Envío a domicilio</p></div>
           </div> 
            <div className=" botones-producto-det  py-2 px-2 ">

            <div className=" detalle-qty d-flex justify-content-center">
            {enCarrito && 
            <div className={ `btn-quantity-home-show-detalle `}>
            <i className="fas fa-minus btn-quantity-home-btn"
               onClick={()=>decrease({...props}, quantity)}></i>

               <input className="quantity-home my-auto"
                    min="0" 
                    name="quantity" 
                    value={quantity}
                    onChange={(e) =>changeQuantity({...props}, parseInt(e.target.value))}
                    type="number"></input>
    
               <i  onClick={()=> increase({...props})} className="fas fa-plus btn-quantity-home-btn"></i>
               </div>}
            </div>
            <div className="detalle-btn  d-flex justify-content-center col-lg-6">
            {Stock ?
                enCarrito ? 
                <button onClick={()=>removeFromCart({...props})} className="btn rounded-pill btn-primary p-0">
                    <span className="ml-3 mr-3">REMOVER DEL CARRITO</span> 
                    <i className="fas fa-cart-plus cart-active" aria-hidden="true" data-toggle="popover" data-trigger="hover" data-placement="left" data-content="Agregar a Favoritos" data-original-title="" title=""></i>
                </button>
                :
                <button onClick={()=>addToCart({...props})} className="btn rounded-pill btn-primary p-0">
                    <span className="ml-3 mr-3">AGREGAR AL CARRITO</span> 
                    <i className="fas fa-cart-plus" aria-hidden="true" data-toggle="popover" data-trigger="hover" data-placement="left" data-content="Agregar a Favoritos"  data-original-title="" title=""></i>
                </button>
                :
                <p className='sin-stock'>Sin Stock</p>}

            </div>
               
            </div>
        </div>        
    </Fragment>
    )
}

export default LikeyCarrito
