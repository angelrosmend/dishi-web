import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CarritoContext'

function TarjetaDestacados(props) {
    const {addToCart, removeFromCart} = useContext(CartContext)
    const {id, imagen, nombre, precio, sucursal} = props
    return (
        <div className="row mb-4 bg-white no-gutters aos-init aos-animate mt-5" 
        data-aos="fade-up" 
        data-aos-delay="170">
       <div className="col-sm-auto">
           <Link to={`detalle/${id}`}>
            <img src={imagen} alt="" className="img-product-list img-responsive img-fluid"/>
           </Link>
        </div>
   <div className="col-lg-8 col-sm-auto col-md-6 px-4 pt-3">
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
           <p className="texto-descripcion">{nombre}<br/><Link to={`/detalle/${id}`}>Ver más</Link></p>   
          </div>
       </div>
       <div className="row envio m-auto no-gutters" id="precio">
           <div className="col-lg-5 col-sm-12  m-auto"><p className="texto-precio mb-lg-0">${precio}</p></div>
           <div className="col  m-auto">
              
           </div>
           <div className="col m-auto ">
               <p className="texto-envio mb-lg-0 text-lg-right">
                   <i className="fas fa-motorcycle mr-2"></i>Envío a domicilio</p>
           </div>
       </div>
       <div className="row  no-gutters">
     <div className="col botones-promos px-3 px-lg-4 py-2 tb">
           <div className="row">
           <div className="col m-auto"><p className="precio-promo-single mb-0">$ {precio}</p></div>
           <div className="col text-lg-right text-right botones-producto ">
           </div>
       </div>                           
    </div>        
</div>

   </div>

</div>
    )
}

export default TarjetaDestacados
