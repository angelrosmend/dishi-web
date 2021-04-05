import React from 'react'
import { Fragment } from 'react'
import { useFetchRecetaDet } from '../../hooks/useFetchRectaDet'
import { urlRecetaDetalle} from '../../settings/requestSettings'
import Banner from './Banner'
import  Carousel  from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'


function RecetasDetalle({match}) {
    const id = match.params.id
    const {receta} = useFetchRecetaDet(urlRecetaDetalle, id)
    const {Imagenes} = receta
    return (
        <Fragment>
            <Banner/>
           <div className="container">
                <div className="row">
                <div className="col-12 mb-4 d-flex justify-content-end">               
                   <div className="col-lg-3 col-sm-auto  text-right"> <Link to='/recetas'> Ver otras recetas</Link></div>
               </div>
                    
                <div className="col-10 m-auto" data-aos="fade-up" data-aos-delay="170">
            <div className="row">
                <div className="col-auto col-lg-4 mr-4 p-0">
                    <div className="col p-0 m-0">

                <Carousel>
                   {Imagenes && Imagenes.map((imagen, idx) => {
                       return (
                           <Carousel.Item key={idx}>
                               <img src={imagen} className='w-100 img-receta' alt=""/>
                           </Carousel.Item>
                       )
                   })
            
                   }
                </Carousel>
                   
                   </div>
                   </div>
               
                
                <div className="col col-lg-6">
                    <div className="row bg-white p-3"> 
                        <p className="fecha-recetas mb-3"><span className="font-weight-bold">04/10/2020</span> <span>9:30AM</span></p>
                        
                        <h3 className="titulo-recetas mb-3">{receta.Titulo}</h3>
                        <p>{receta.Subtitulo}</p>
                    </div>
                 { receta.producto ? <div className="row bg-white mt-3">
                        <div className="col col-lg-3">
                            <img src='' className="img-fluid w-100 img-responsive" alt=""/>
                        </div>
                         <div className="col col-lg-9 mt-3">
                            <p className="mb-1 texto-azul">Producto</p>
                            <h5 className="titulo-recetas">Pan artesano original 500gr.</h5>
                        </div>
                    </div>:null}
                    <div className="row bg-white my-3 p-4 pr-3">
                       <div className="row">
                        <div className="col-auto mr-5">
                            <p className="texto-azul">Preparación</p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col pr-5"  dangerouslySetInnerHTML={{ __html: receta.HTML}}>
                       </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </Fragment>
    )
}

export default RecetasDetalle
