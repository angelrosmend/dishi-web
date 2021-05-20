import React from 'react'
import Slider from 'react-slick'
import { nineItemsSettingsC } from '../../../settings/CarouselSettings'

function SliderCategorias({categorias}) {
    if(!categorias || categorias.length < 1) return null
    return (
        <div className="container">
        <div className="container-fluid " data-aos="fade-up" data-aos-delay="170">
            <div className="justify-content-center pt-4 slider-categorias">
                <Slider {...nineItemsSettingsC}>
                    {categorias && categorias.map(item => {
                        const {Id: id, Imagen, Nombre} = item
                        return(
                        <div key={id} className="mx-3">
                            <img src={Imagen} 
                             className={ 'thumb-slider'} alt=""/>
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

export default SliderCategorias
