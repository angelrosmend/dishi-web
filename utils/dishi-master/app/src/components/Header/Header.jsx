import React from 'react'
import Navlogo from './Navlogo'
import { Container, Row } from 'react-bootstrap'
import $ from 'jquery';
import DropdownAplicar from './DropdownAplicar'
import Search from './Search'
import NavUser from './NavUser'
import Navnotificaciones from './Navnotificaciones'
import Navcart from './Navcart'
import Navwallet from './Navwallet'
import Log from './Log'
import '../../css/addons.css'
import './Header.css'

function HeaderTest() {

    $(function () {$('[data-toggle="popover"]').popover()})
    $(function(){$(".dropdown-toggle").dropdown();})



    return (

<nav className="container-fluid navbar-inverse header-container">
    <Navlogo/>
    <div className="navbar navbar-toggleable-sm">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div className="row nav-dishi escritorio" >

               <Search/>
               <DropdownAplicar/>    

            {/***** NAV BUTTONS*****/ }
            <div className="col-4">
            <Container>
                <Row>
                    <NavUser/>
                    <Navcart/>
                    <Navnotificaciones/>
                    <Navwallet/>
                    <Log/>
                </Row>
            </Container>
            </div>
            </div>
           </div>
        </div>
    </div>
</nav>
    )
}

export default HeaderTest


