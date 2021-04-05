import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CarritoContext'

function TarjetaOportunidades(props) {
    const {addToCart} = useContext(CartContext)
    const {id, imagen, nombre, precio, sucursal} = props
    return (
    <div className="row mb-4 bg-white no-gutters aos-init aos-animate" data-aos="fade-up" data-aos-delay="170">
        <div className="col-sm-auto">
            <div className="row no-gutters">
                <div className="col-1 col-lg-auto promo-20off"></div>
                <div className="col col-lg-auto"> <img src={imagen} alt="" className="img-product-list img-responsive img-fluid"/></div>
            </div> 
        </div>
        <div className="col-lg-7 col-sm-auto col-md-5 px-4 pt-3">
            <div className="row">
                <div className="col">
                <p className="titulo font-weight-bold">{sucursal}</p>
            </div>    
            </div>
            <div className="row">
                <div className="col">
                <h3 className="titulo-productos">{nombre}</h3>
            </div>
            </div>
            <div className="row">
                <div className="col">
                <p className="texto-descripcion">{nombre} <br/><Link to={`/detalle/${id}`}>Ver más</Link></p> 
            </div>
            </div>
            <div className="row envio m-auto no-gutters" id="precio">
                <div className="col-lg-5 col-sm-12  m-auto"><p className="texto-precio mb-lg-0">${precio}</p></div>
                <div className="col  m-auto"><p className="texto-envio mb-lg-0 text-lg-right"><i className="fas fa-wallet mr-2"></i>Acepta Billetera</p></div>
                <div className="col  m-auto "><p className="texto-envio mb-lg-0 text-lg-right"><i className="fas fa-motorcycle mr-2"></i>Envío a domicilio</p></div>
            </div>
        </div>
        <div className="col bg-card-3 columna-3">
            <div className="d-flex flex-lg-column justify-content-center">
                <div className="text-lg-center text-center m-3 ">

                </div>
                <div className="text-lg-center text-center m-3 ">
                    <a role='button'
                       onClick={()=>addToCart({id, imagen, nombre, precio, sucursal})} >
                        <i className="fas fa-cart-plus like-list-3" 
                           style={{color:"#056ae0!important" }}
                           data-toggle="popover" 
                           data-trigger="hover" 
                           data-placement="left"
                           data-content="Agregar al carrito" 
                           aria-hidden="true" 
                           data-original-title="" 
                           title="">
                        </i>
                    </a>
                </div>
            </div>        
        </div>
    </div>
    )
}

export default TarjetaOportunidades
