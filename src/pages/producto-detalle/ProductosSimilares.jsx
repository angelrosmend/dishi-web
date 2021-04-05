import React, { useContext } from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { ContextProducts } from '../../context/ProductContext'
import { fiveItemsSettings, fourItemsSettings } from '../../settings/CarouselSettings'



function ProductosSimilares() {

    const {data} = useContext(ContextProducts)
    const {destacados} = data;


    const CardProductosSimilares = (props) => {
        const {id, imagen, nombre, precio, sucursal, producto} = props
        return(
                    <div className="col-sm-12 col-md-12 pb-4">
                       
                        <img className="imagenes" src={imagen} alt=""/>
                        <div className="text-img d-flex py-2">
                            <div>
                                <p className="text-white">$ {precio} </p>
                            </div>
                            <ul className="navbar-nav ml-auto">
                                <li>
                                    <i className="far fa-credit-card" style={{color: '#ffffffb8'}}></i>
                                    <i className="fas fa-wallet" style={{color: '#ffffffb8'}}></i>
                                </li>
                            </ul>
                        </div>
                        <div className="text2-img">
                            <p className="titulo"><b>{sucursal}</b></p>
                            <p className="titulo2">{nombre}</p>
                        </div>
                    </div>
        )
    }
    
    return (
        <Fragment>
            <div className="container pt-5">
                    <div className="row text-center">
                        <div className="col-12 text-center text-lg-right text-md-right text-vermas" >
                            <Link to='/'>
                                <p style={{color:'#056ae0!important'}}>+ Ver más</p>
                            </Link>
                        </div>
                      <div className="col-12 pb-3"><h3><b>Productos Similares</b></h3></div>
                  </div>
               </div>

 <div className="container mb-lg-0 mb-5 sliders">
    <div className="container-fluid pt-3" data-aos="fade-up" data-aos-delay="170">
        <div className=" justify-content-center pt-4 multiple-items">
            <Slider {...fourItemsSettings}>
            {destacados && destacados.map(item => {
                const { Id, Imagen, NombreProducto,NombreSucursal, Precio} = item;
                return <CardProductosSimilares key={Id}
                                           id={Id}
                                           imagen={Imagen}
                                           nombre={NombreProducto}
                                           sucursal={NombreSucursal}
                                           precio={Precio}
                                           producto={item}
                                           />
            })}
            </Slider>
         </div>
        </div>
       </div>
    </Fragment>
    )
}

  


export default ProductosSimilares