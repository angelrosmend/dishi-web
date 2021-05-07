import React,{Fragment, useState} from 'react'
import { Collapse, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';

function HeaderToggle() {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <Fragment>
            <NavbarToggler onClick={toggleNavbar} className="show-sm-screen burger-nav" />
                <div className="show-sm-screen">
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar className="text-center">
                         <NavItem>
                         <form className="form-inline my-2 my-lg-0 pt-3 d-flex">
                                <div className="container">
                                <div className="row">
                                    <div className="col-8"> 
                                        <input className="form-control mr-sm-2" type="text" placeholder="Buscar..."/>
                                    </div>
                                    <div className="col-4">
                                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={{position: "relative", top: "-8px"}}>Buscar</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        </NavItem>
                        <NavItem>
                           <NavLink active href="#">Mi cuenta</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="#">Carrito</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="#">Notificaciones</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="#">Billetera</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
              </div>
        </Fragment>
    )
}

export default HeaderToggle
