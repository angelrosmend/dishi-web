import React, { Fragment, useContext, useState } from 'react'
import { bell } from '../../../assets/img'
import { ContextUser } from '../../../context/UserContext'
import Burger from './components/Burger'
import NavLinkMobile from './components/NavLinkMobile'
import "./sidebar.css"

function Sidebar() {
    const [showMenu, setShowMenu] = useState(false)
    const [showHeader, setShowHeader] = useState(false)
    const toggleMenu = () => setShowMenu(!showMenu)
    const toggleHeader = () => setShowHeader(!showHeader)
    const toggle = () => {
        toggleMenu()
        toggleHeader()
    }
    const {USER_VALUES} = useContext(ContextUser)
    const {user, logged, logout} = USER_VALUES
    const nombre = user && user.Nombre 
    const nombreCompleto = user && user.Usuario.NombreCompleto
    console.log(user)
    return (
        <Fragment>
            <Burger toggle={toggle} clicked={showHeader} setClicked={setShowHeader}/>
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
                <NavLinkMobile link="/" toggle={toggle}>Inicio</NavLinkMobile>
                <NavLinkMobile link={`/perfil/${nombre}/compras`} toggle={toggle}>Mis Compras</NavLinkMobile>
                <NavLinkMobile link={`/perfil/${nombre}/notificaciones`} toggle={toggle}>Notificaciones</NavLinkMobile>
                <NavLinkMobile link="/" toggle={toggle}>Pago de Servicios</NavLinkMobile>
                <NavLinkMobile link="/" toggle={toggle}>Recarga virtual</NavLinkMobile>
                <NavLinkMobile link="/" toggle={toggle}>Pagar con QR</NavLinkMobile>
                <NavLinkMobile link="/" toggle={toggle}>Noticias</NavLinkMobile>
                <NavLinkMobile link="/" toggle={toggle}>Contacto</NavLinkMobile>
                <NavLinkMobile link={`/perfil/${nombre}/datos`} toggle={toggle}>Mis Datos</NavLinkMobile>
                <li className="sidemenu-link">
                    <p>Cerrar Sesión</p>
                </li>
            </ul>

            </nav>
        </Fragment>
        
    )
}

export default Sidebar