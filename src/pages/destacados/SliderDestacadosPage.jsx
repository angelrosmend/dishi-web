import React, { useContext, useState } from 'react'
import Slider from 'react-slick'
import { ContextProducts } from '../../context/ProductContext'
import { nineItemsSettings, nineItemsSettingsC } from '../../settings/CarouselSettings'

function SliderDestacadosPage() {
    const {data} = useContext(ContextProducts)
    const {categorias} = data

    const [selectedImg, setSelectedImg] = useState({
        id: '',
        Nombre: '',
        isSelected: false
    })
    const {isSelected} = selectedImg
    return (
  <div className="container">
        <div className="container-fluid " data-aos="fade-up" data-aos-delay="170">
            <div className="justify-content-center pt-4 slider-categorias">
                <Slider {...nineItemsSettingsC}>
                    {categorias && categorias.map(item => {
                        const {Id: id, Imagen, Nombre} = item
                        return(
                        <div key={id} className="mx-3">
                            <img src={Imagen} onClick={()=>{setSelectedImg({ id: id, Nombre: Nombre, isSelected: !isSelected})}} 
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

export default SliderDestacadosPage
