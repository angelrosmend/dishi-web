import React from 'react'
import { Fragment } from 'react'
import Categoria from '../home/Categorias/Categoria';
import Subtitulo from '../home/Subtitulo/Subtitulo';


function CategoriasGrilla({categorias, titulo}) {
    if(categorias.length < 1) return null
    return (
 <Fragment>
    <div className="mt-5">
    <Subtitulo text={titulo}/>
    </div>
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