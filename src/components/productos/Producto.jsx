import React, { useContext } from 'react'
import { CartContext } from '../../context/CarritoContext'


function Producto(props) {
const {id, nombre, imagen, precio, sucursal, producto} = props
   const {addToCart} = useContext(CartContext)
    return (
        <div className="col-sm-12 col-md-12 pb-4">
         
        <img className="imagenes" src={imagen} alt="logo"/>
        <div className="text-img d-flex py-2">
            <div>
                <p className="text-white">$ {precio} </p>
            </div>
            <ul className="navbar-nav ml-auto">
                <li>
                    <button  onClick={()=> addToCart({id, nombre, imagen, precio, sucursal})}  style={{border:"none", background: 'transparent', margin: '0' }}><i className="fas fa-wallet" style={{color: "#ffffffb8"}}></i></button>
                </li>
            </ul>
        </div>
        <div className="text2-img">
        <p className="titulo"><b>{nombre}</b></p>
         <p className="titulo2">{sucursal}</p>
        </div>
  </div>
    )
}

export default Producto
