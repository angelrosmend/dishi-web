import React from 'react'
import { Link } from 'react-router-dom'


function CardDestacado(props) {
    const {id, imagen, nombre, precio, sucursal } = props //en Carrito, Stock
 
//   const {addToCart, removeFromCart} = useContext(CartContext)

    return (
        <div className="col-sm-12 col-md-12 pb-4 d-flex " /* style={{width: '215px', margin: '0'}} */>
            <div className="mx-auto">
            <Link to={`/detalle/${id}`}> <img className="imagenes" src={imagen} alt="logo"/> </Link>
        <div className="text-img d-flex py-2">
            <div>
                <p className="text-white">$ {precio} </p>
            </div>
            <ul className="navbar-nav ml-auto">
                <li>
{/* 
                {Stock ?
                    enCarrito ? <i onClick={()=> removeFromCart({...props})}
                     className="fas fa-cart-plus fix-btn-cart-dest cart-active"></i>
                     :
                    <i onClick={()=> addToCart({...props})}
                     className="fas fa-cart-plus fix-btn-cart-dest "></i>
                    :
                    <p className="sin-stock">Sin Stock</p>} */}
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

export default CardDestacado
