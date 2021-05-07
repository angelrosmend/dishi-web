import React, { useContext } from 'react';
import { perro } from '../../assets/img';
import { ContextUser } from '../../context/UserContext'


function NavUser() {
    const {logged }= useContext(ContextUser)
    return (
        <div className="col-4">
    {logged ? <div className="dropdown dropdown-hover">
            <a className="dropdown-toggle" id="menu1" type="button" data-toggle="dropdown" href="#">
                <div className="row pr-5">
                    <div className="col-4" style={{position: "relative", right: "1.5rem"}}>                    
                        <i className="fa fa-user nav-icon-1 rounded-circle pr"></i>
                    </div>
                    <div className="col-8">
                        <p className="text-nav pl-1 pt-1" style={{position: "relative",top: "0.2rem", right:"1rem"}}> Hola, Flor</p>
                    </div>
                </div>
            </a>
            <div className="dropdown-menu desplegable1" role="menu" aria-labelledby="menu1">
                <div className="triangle"></div>
                <div className="conteiner desplegable1-1">
                    <div className="row text-center py-2">
                        <div className="col-12">
                            <img className="avatar-img" src={perro} alt=""/>
                        </div>
                        <div className="col-12">
                            <p className="text-primary">Florencia Inés Tasso</p>
                        </div>
                        <div className="col-12">
                            <p className=""> <i className="fas fa-map-marker"></i> Garibaldi 2096, Pehuajó - Piso 2 Departamento 24</p>
                        </div>
                    </div>
                    <hr className="linea2"/>
                    <div className="row text-center">
                        <div className="col">
                            <a href="">
                                <i className="fas fa-pencil-alt avatar-icon-2"/>
                            </a>
                        </div>
                    </div>    
                    <div className="col-12 py-2">
                        <div className="container"> 
                            <div className="row text-center">   
                                <div className="col">
                                    <a href="">
                                        <i className="fas fa-shopping-bag avatar-icon"></i>
                                    </a>
                                    <p>Compras</p>
                                </div>
                                <div className="col">
                                    <a href="">
                                        <i className="fa fa-shopping-cart avatar-icon"></i>
                                    </a>
                                    <p>Carrito</p>
                                </div>
                                <div className="col">
                                    <a href ="">
                                        <i className="fas fa-heart avatar-icon"></i>
                                    </a>
                                    <p>Favoritos</p>
                                </div>
                            </div>                      
                        </div>          
                    </div>
                </div>
            </div>
        </div> : null}
    </div>
    )
}

export default NavUser
