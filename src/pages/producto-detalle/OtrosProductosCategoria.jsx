import React, { useContext, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { CartContext } from '../../context/CarritoContext'
import { useFetchProductos } from '../../hooks/useFetchProductos'
import { fiveItemsSettings, threeItemsSettings} from '../../settings/CarouselSettings'
import { urlProductos } from '../../settings/requestSettings'
import Subtitulo from '../home/Subtitulo/Subtitulo'
import { Link } from 'react-router-dom';
import { ContextUser } from '../../context/UserContext';
import '../home/Home.css'
import SliderDishi from '../../components/slider/SliderDishi';



function OtrosProductosCategoria( {categoria} ) {
    const {user} = useContext(ContextUser)

     const {Id: id} = categoria

    
    const {cartItems} = useContext(CartContext)
    const [state] = useFetchProductos(urlProductos, id, user)
    const {productos} = state
    const  sliderconfig = productos.length >= 5 ? fiveItemsSettings : threeItemsSettings 

    const CardOtrosProductos = (props) => {
        const {addToCart, removeFromCart, decrease, changeQuantity, increase} = useContext(CartContext)
        const {id, imagen, nombre, precio, sucursal, enCarrito, Stock, quantity} = props
        const qty = quantity && quantity.quantity

         const [showBtn, setShowBtn] = useState(false)
        const showBtnQty = () => setShowBtn(true)
        const hideBtnQty = () => setShowBtn(false) 
        
        return(
                <div className="col-sm-12 col-md-12 pb-4 d-flex">
                    <div className="mx-auto">
                    <div className="img-prod-container">
                       <Link to={`/detalle/${id}`}>
                       <img className="imagenes" src={imagen} alt=""/>
                       </Link>
                       {enCarrito &&  <div className={`btn-quantity-home-show`}>

                <i className="fas fa-minus btn-quantity-home-btn"
                  onClick={()=>decrease({...props}, qty)}></i>

                <input className="quantity-home my-auto"
                        min="0" 
                        name="quantity" 
                        value={qty}
                        onChange={(e) =>changeQuantity({...props}, parseInt(e.target.value))}
                        type="number"></input>
                    
                <i  onClick={()=> increase({...props})} className="fas fa-plus btn-quantity-home-btn "></i>
                 </div>}
                       </div>
                        <div className="text-img d-flex py-2">
                            <div>
                                <p className="text-white">$ {precio} </p>
                            </div>
                            <ul className="navbar-nav ml-auto">
                                <li>
                                    {Stock ?
                                    enCarrito ?
                                     <i onClick={()=> removeFromCart({...props})}
                                     className="fas fa-cart-plus fix-btn-cart-dest cart-active"
                                       onMouseEnter={showBtnQty}
                                     onMouseLeave={hideBtnQty} 
                                     
                                     ></i>
                                      :
                                      <i onClick={()=> {addToCart({...props});  showBtnQty() }}
                                       className="fas fa-cart-plus fix-btn-cart-dest"></i>
                                      :
                                      <p className="sin-stock">Sin Stock</p>}
                                </li>
                            </ul>
                        </div>
                        <div className="text2-img pl-2">
                            <p className="titulo"><b>{sucursal}</b></p>
                            <p className="titulo2">{nombre}</p>
                        </div>
                        
                    </div>
                        </div>
        )
    } 
     if(productos.length < 3 )return null 
    return (
    <div className='margen-sm'>
       <Subtitulo text='Otros productos de esta categoria'
                       vermas={`/categorias/${id}`}/>  

{           <SliderDishi items={productos}>
            {productos && productos.map(item => {

                const { Id, Imagen, NombreProducto,NombreSucursal, Precio, ValorParaCajaDelivery, Stock} = item;
                const enCarrito =  cartItems.map(item=> item.id).includes(Id)
                const itemQuantity = cartItems.map(itemCart => itemCart).find(item => item.id === Id)

                return <CardOtrosProductos key={Id}
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