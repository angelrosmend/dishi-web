import React from 'react'
import Slider from 'react-slick'
import { nineItemsSettingsC } from '../../../settings/CarouselSettings'
import  {useGetCategorias} from '../../../hooks/categorias/useGetCategorias'
import './sliderCategorias.css'

function SliderCategoriasFilter({filter, setFilter, initialState}) {

    const {categorias} = useGetCategorias()

    if(!categorias || categorias.length < 1) return null

    return (
     <div className="container my-4">
        <div className="container-fluid " data-aos="fade-up" data-aos-delay="170">
            <div className="justify-content-center pt-4 slider-categorias">
                <Slider {...nineItemsSettingsC}>
                    {categorias && categorias.map(item => {
                        const {Id: id, Imagen, Nombre} = item
                        return(
                        <div key={id} className="m-3" >
                            <img onClick={()=> setFilter((prevFilter) => prevFilter.id == id ? initialState : {id: id, nombreCategoria: Nombre})}
                                src={Imagen} 
                                className={filter == id ? 'thumb-categoria-selected' : 'thumb-categoria'} 
                                alt=""/>
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

export default SliderCategoriasFilter
