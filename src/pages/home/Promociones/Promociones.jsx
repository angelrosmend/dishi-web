import React, { Fragment, useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { CartContext } from '../../../context/CarritoContext';
import { twoItemsSettings } from '../../../settings/CarouselSettings';
import Subtitulo from '../Subtitulo/Subtitulo';



function Promociones({promociones}) {
    const {cartItems,addToCart, removeFromCart, decrease, changeQuantity, increase} = useContext(CartContext)
 

    const [showBtn, setShowBtn] = useState(false)
    const showBtnQty = () => setShowBtn(true)
    const hideBtnQty = () => setShowBtn(false)

    if(promociones.length < 1) return  null
    return (
        <Fragment>
            <Subtitulo text="Promociones"
                        vermas='/promociones'/>
            <div className="container col-lg-10 py-4" data-aos="fade-up" data-aos-delay="150">
   
   <Slider {...twoItemsSettings}>
      {promociones && promociones.map(item => {
           const {Promocion} = item
           const {Id: id, Nombre: nombre, Imagen: imagen, Precio:precio, Sucursal, ValorParaCajaDelivery} = Promocion
           const sucursal = Sucursal && Sucursal.NombreFantasia
           const enCarrito =  cartItems.map(item=> item.id).includes(id)
           const itemQuantity = cartItems.map(itemCart => itemCart).find(item => item.id === id)
           const qty = itemQuantity && itemQuantity.quantity
            return (
            <div key={id} className="col-sm-12 col-md-12 py-3" data-aos='fade-up'>
                        
                 
                    <div className="img-prod-container">
                    {enCarrito ? 
                    <i onClick={()=> removeFromCart({ id, nombre, imagen, precio, ValorParaCajaDelivery,Tipo: 1})}
                     className="fas fa-cart-plus like-3 cart-active"></i>
                     :
                    <i onClick={()=> addToCart({id, nombre, imagen, precio ,ValorParaCajaDelivery, sucursal,Tipo:1})}
                     className="fas fa-cart-plus like-3"></i>}
                        <Link to={`/promociones/${id}`}>
                            <img className="imagenes-2" src={imagen} alt=""/>
                        </Link>
                        {enCarrito && <div className={showBtn ? `btn-quantity-home-show-promos`:`btn-quantity-home-promos`}>

                <i className="fas fa-minus btn-quantity-home-btn"
                  onClick={()=>decrease({ id, nombre, imagen, precio, ValorParaCajaDelivery,Tipo: 1}, qty)}></i>

                <input className="quantity-home my-auto"
                        min="0" 
                        name="quantity" 
                        value={qty}
                        onChange={(e) =>changeQuantity({ id, nombre, imagen, precio, ValorParaCajaDelivery,Tipo: 1}, parseInt(e.target.value))}
                        type="number"></input>
                    
                <i  onClick={()=> increase({ id, nombre, imagen, precio, ValorParaCajaDelivery,Tipo: 1})} className="fas fa-plus btn-quantity-home-btn"></i>
         </div>}
                    </div>
            <div className="row no-gutters">
                    <div className="col-md-6 col-sm-12 m-0 p-0">
                        <div className="text3-img text3-bg-1 ">
                            <p className="titulo px-3"><b>{Sucursal.NombreFantasia}</b></p>
                            <p className="px-3" style={{fontSize: '0.82rem'}}>{nombre}</p>
                        </div>
                    </div>
             <div className="col-md-6 col-sm-12 d-flex ">
                <div className="text3-bg-2">
                    <div className="text3-img d-flex justify-content-center">
                       {/*  <button type="button" className="btn btn-primary boton-2 ml-1">20%OFF</button> */}
                         <p className="text3-img-2 px-3 text-3" style={{margin:'auto'}}>$ {precio}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>)
       })} 
        
   </Slider>
</div>
</Fragment>
    )
}



export default Promociones
