import React, { Fragment, useContext, useState } from 'react'
import { bell } from '../../../assets/img'
import { ContextUser } from '../../../context/UserContext'
import Burger from './components/Burger'
import "./sidebar.css"

function Sidebar() {
    const [showMenu, setShowMenu] = useState(false)
    const toggle = () => setShowMenu(!showMenu)
    const {USER_VALUES} = useContext(ContextUser)
    const {user, logged, logout} = USER_VALUES
    const nombreCompleto = user && user.Usuario.NombreCompleto
    console.log(user)
    return (
        <Fragment>
            <Burger toggle={toggle}/>
            <nav className={ showMenu ? "sidemenu active" : "sidemenu"}>
            <div className="sidemenu-content-account-wrapper">
                <h5 className="text-white">{nombreCompleto}</h5>
                  <div className="cart-info-mobile-container">
                      <div className="cart-info-wrapper">
                          <h5>Carrito de Compras</h5>
                          <p>0 Productos</p>
                          <p>$ 0.00</p>
                          <p>Pesos argentinos</p>
                      </div>
                      <div className="cart-wrapper-mobile">
                      <i className="fa fa-shopping-cart nav-icon-2 rounded-circle p-relative"/>
                      </div>
                  </div>
            </div>
            <ul className="sidemenu-content-link-wrapper">
                <li className="sidemenu-link ">
                    <p >Inicio</p>
                </li>
                <li className="sidemenu-link">
                    <p>Mis Compras</p>
                </li>
                <li className="sidemenu-link">
                    <p>Notificaciones</p>
                </li>
                <li className="sidemenu-link">
                    <p>Pago de Servicios</p>
                </li>
                <li className="sidemenu-link">
                    <p>Recarga virtual</p>
                </li>
                <li className="sidemenu-link">
                    <p>Pagar con QR</p>
                </li>
                <li className="sidemenu-link">
                    <p>Noticias</p>
                </li>
                <li className="sidemenu-link">
                    <p>contacto</p>
                </li>
                <li className="sidemenu-link">
                    <p>Mis Datos</p>
                </li>
                <li className="sidemenu-link">
                    <p>Cerrar Sesión</p>
                </li>
            </ul>

            </nav>
        </Fragment>
        
    )
}

export default Sidebar