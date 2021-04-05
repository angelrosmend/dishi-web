import React,{Fragment, useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import { Collapse, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import { ContextUser } from '../../context/UserContext';
import ModalLogout from '../modals/logout/ModalLogout';
import SearchToggle from './SearchToggle';

function Toggle() {
    const {user, logout, logged} = useContext(ContextUser)
    console.log('toggle', user, logged)
   
    const Nombre = user && user.Nombre
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    const handleLogOut = () => {
        toggleNavbar()
        logout()
    }
   
    return (
        <Fragment>
            <NavbarToggler onClick={toggleNavbar} className="show-sm-screen custom-toggler burger-nav" />
                <div className="show-sm-screen">
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar className="text-center">
                         <NavItem>
                             <SearchToggle/>
                        </NavItem>
                       

                      {logged ? <NavItem>
                           <Link 
                                  onClick={toggleNavbar}
                                 className="nav-link" 
                                 to={`/perfil/${Nombre}/datos`}>Mi cuenta
                          </Link>
                        </NavItem>
                        : 
                        null
                        }
                        <NavItem>
                          <Link    
                                   to='/checkout-1-carrito'
                                   onClick={toggleNavbar}
                                   className="nav-link"
                                   >Carrito</Link>
                         </NavItem>
                      { logged ?
                       <NavItem>
                        <Link 
                            to={`/perfil/${Nombre}/compras`}
                            onClick={toggleNavbar}
                            className="nav-link">
                            Mis compras
                        </Link>
                      </NavItem>
                        : 
                        null}
                      {logged && <NavItem>
                          <ModalLogout classText='nav-link'>
                              Cerrar sesión
                          </ModalLogout>
                        </NavItem>}
                    </Nav>
                </Collapse>
              </div>
        </Fragment>
    )
}

export default Toggle
