import React, { Fragment, useContext, useState } from 'react'
import { bell } from '../../../assets/img'
import { ContextUser } from '../../../context/UserContext'
import LoginModal from '../../modals/login/LoginModal'
import ModalLogout from '../../modals/logout/ModalLogout'
import Burger from './components/Burger'
import CartSideInfo from './components/CartSideInfo'
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
                <CartSideInfo nombre={nombreCompleto}/>
            <ul className="sidemenu-content-link-wrapper">
                <NavLinkMobile link="/" toggle={toggle}>Inicio</NavLinkMobile>
                {logged &&<NavLinkMobile link={`/perfil/${nombre}/compras`} toggle={toggle}>Mis Compras</NavLinkMobile>}
                {logged &&<NavLinkMobile link={`/perfil/${nombre}/notificaciones`} toggle={toggle}>Notificaciones</NavLinkMobile>}
                <NavLinkMobile link="/" toggle={toggle}>Pago de Servicios</NavLinkMobile>
                <NavLinkMobile link="/" toggle={toggle}>Recarga virtual</NavLinkMobile>
                <NavLinkMobile link="/" toggle={toggle}>Pagar con QR</NavLinkMobile>
                <NavLinkMobile link="/" toggle={toggle}>Noticias</NavLinkMobile>
                <NavLinkMobile link="/" toggle={toggle}>Contacto</NavLinkMobile>
            {logged &&<NavLinkMobile link={`/perfil/${nombre}/datos`} toggle={toggle}>Mis Datos</NavLinkMobile>}
                {logged ? 
                <ModalLogout>
                <NavLinkMobile link="/" toggle={toggle}>Cerrar Sesión</NavLinkMobile>
                </ModalLogout>
                :
                <Fragment>
                 <LoginModal>
                   <NavLinkMobile link="/" toggle={toggle}>Ingresar</NavLinkMobile>
                 </LoginModal>
                 <NavLinkMobile link="/registro" toggle={toggle}>Registrarse</NavLinkMobile>
              </Fragment>}
             </ul>
            </nav>
        </Fragment>
        
    )
}

export default Sidebar