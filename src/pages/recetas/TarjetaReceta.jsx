import React from 'react'
import { Link } from 'react-router-dom'
import { fechaRecetas, getHora} from '../../helpers/fechas'

function TarjetaReceta(props) {
    const {fecha} = props
    return (
        <div className="row mb-4 bg-white no-gutters aos-init aos-animate" 
             data-aos="fade-up" 
             data-aos-delay="170">
                
        <div className="col-lg-8 col-sm-auto col-md-6 px-4 pt-3">
            <div className="row mb-2">
                <div className="col">
                <p className="fecha-recetas"><span className="font-weight-bold">{fechaRecetas(fecha)}</span> <span>{getHora(fecha)}</span></p>
            </div>    
            </div>
            <div className="row">
                <div className="col">
                <h3 className="titulo-recetas">{props.titulo}</h3>
            </div>
            </div>
            <div className="row">
            <div className="col">
                <p className="texto-descripcion">{props.subtitulo}<br/><Link to={`/recetas/${props.id}`}>Seguir leyendo</Link></p>   
            </div>
            </div>
        </div>
        <div className="col-lg-4 text-right"><img src={props.imagen} alt="" className="img-product-list-recetas img-responsive"/></div>
    </div>
    )
}

export default TarjetaReceta
