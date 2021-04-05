import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { ContextProducts } from '../../context/ProductContext'
import { nineItemsSettings } from '../../settings/CarouselSettings'

function SliderOportunidadesPage() {
    const {data} = useContext(ContextProducts)
    const {categorias} = data
    return (
  <div className="container ">
        <div className="container-fluid " data-aos="fade-up" data-aos-delay="170">
            <div className="justify-content-center pt-4 slider-categorias">
                <Slider {...nineItemsSettings}>
                    {categorias && categorias.map(item => {
                        const {Id: id, Imagen, Nombre} = item
                        return(
                        <div key={id} className="mx-3">
                            <Link to={`/categorias/${id}`}>
                                <img src={Imagen} className="rounded-circle thumb-slider" alt=""/>
                            </Link>
                            <p className="texto-descripcion text-center">{Nombre}</p>
                        </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    </div>
    )
}

export default SliderOportunidadesPage
