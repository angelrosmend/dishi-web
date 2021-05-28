import React, { useContext } from 'react'
import { CartContext } from '../../../../context/CarritoContext'

function CartSideInfo({nombre}) {
    const {CART_VALUES} = useContext(CartContext)
    const {numeroDeItems, totalFinal} = CART_VALUES

    return (
        <div className="sidemenu-content-account-wrapper">
                <h5 className="text-white">{nombre}</h5>
                  <div className="cart-info-mobile-container">
                      <div className="cart-info-wrapper">
                          <h5>Carrito de Compras</h5>
                          <p>{numeroDeItems} Productos</p>
                          <p>$ {totalFinal}</p>
                          <p>Pesos argentinos</p>
                      </div>
                      <div className="cart-wrapper-mobile">
                      <i className="fa fa-shopping-cart nav-icon-2 rounded-circle p-relative"/>
                      </div>
                  </div>
            </div>
    )
}

export default CartSideInfo
