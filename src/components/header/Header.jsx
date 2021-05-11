import React from 'react'
import BrandLogo from './BrandLogo'
import './Header.css'
import '../../assets/css/addons.css'
import Search from './Search'
import Log from './Log'



function Header() {
    return (
      <div className="header-container container-fluid d-flex bordebajo">
        <nav className="navbar navbar-toggleable-sm m-auto col-12">
           <BrandLogo/>
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Search/> 
                    <div className="row nav-dishi" style={{position: "relative"}}>
                        <Log/>
                    </div>
                </div>
            </div>
        </nav>
       </div>
)
}

export default Header
