import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CarritoContext'
import { useQuantity } from '../../hooks/productos/useQuantity'


function CardGrilla(props) {
    const {id, imagen, nombre, precio, sucursal, Stock } = props
 
    const {cartItems,addToCart, removeFromCart, decrease, changeQuantity, increase} = useContext(CartContext)
    
    const [inCart, quantity] = useQuantity(cartItems, id)

    const [showBtn, setShowBtn] = useState(false)
    const showBtnQty = () => setShowBtn(true)
    const hideBtnQty = () => setShowBtn(false)



    return (
    <div className="col-sm-12 col-md-12 pb-4 d-flex">
      <div className="mx-auto">
      <div className="img-prod-container">
        <Link to={`/detalle/${id}`}> 
         <img className="imagenes" src={imagen} alt="logo"/> 
       </Link>
         {inCart && <div className={showBtn ? `btn-quantity-home-show`:`btn-quantity-home `}>

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
        <div className="text-img d-flex py-2">
            <div>
                <p className="text-white">$ {precio} </p>
            </div>
            <ul className="navbar-nav ml-auto">
                <li>
                    {Stock ?
                     inCart ? <i onClick={()=> removeFromCart({...props})}
                     className="fas fa-cart-plus fix-btn-cart-dest cart-active"
                     onMouseEnter={showBtnQty}
                     onMouseLeave={hideBtnQty}></i>
                     :
                    <i onClick={()=> {addToCart({...props}); showBtnQty()}}
                     className="fas fa-cart-plus fix-btn-cart-dest "></i>
                     :
                     <p className='sin-stock'>Sin Stock</p>}
                </li>
            </ul>
        </div>
        <div className="text2-img pl-2 pb-2">
           <p className="titulo"><b>{sucursal}</b></p>
           <p className="titulo2">{nombre}</p>
        </div>

      </div>
       
  </div>
    )
}

export default CardGrilla
