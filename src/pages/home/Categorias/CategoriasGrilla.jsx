import React from 'react'
import { Fragment } from 'react'
import Subtitulo from '../Subtitulo/Subtitulo'
import Categoria from './Categoria';
import '../Home.css'

function CategoriasGrilla({categorias}) {
    return (
 <Fragment>
    <Subtitulo text="Categorias"/>
    <div className="container pt-5" data-aos="fade-up" data-aos-delay="150">
        <div className="grid-categorias-wrapper">
          {categorias && categorias.map(categoria => {
                const {Id, Nombre, Imagen} = categoria;
                return <Categoria key={Id} id={Id} nombre={Nombre} imagen={Imagen}/>
            })}
        </div>
    </div>
</Fragment>
    )
}

export default CategoriasGrilla