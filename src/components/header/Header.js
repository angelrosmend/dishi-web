import React from 'react'
import BrandLogo from './BrandLogo'
import './Header.css'
import '../../assets/css/addons.css'
import Search from './Search'
import Log from './Log'
import NavUser from './NavUser'
import NavMisCompras from './NavMisCompras'
import NavNotificaciones from './NavNotificaciones'
import NavCart from './NavCart'



function Header() {
    return (
      <div className="header-container px-3">
          <nav className="header-wrapper">
           <BrandLogo/>
            <Search/>
            <NavUser/>
            <div className="nav-btn-link-wrapper tg">
             <NavMisCompras/>
             <NavNotificaciones/>
             <NavCart/>
            </div>
            <Log/>
         </nav>
       </div>
)
}

export default Header
