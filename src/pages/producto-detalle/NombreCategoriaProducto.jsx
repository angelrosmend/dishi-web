import React from 'react'
import { useHistory } from 'react-router-dom'
import { useFetchCategorias } from '../../hooks/useFetchCategorias'
import { urlCategorias } from '../../settings/requestSettings'

function NombreCategoriaProducto({categoria}) {
   
    const {Id} = categoria
    const {categorias} = useFetchCategorias(urlCategorias, Id)
    const {Nombre, Imagen} = categorias
    const history = useHistory()
    return (
    <div className="col-12 m-auto m-sm-auto" >
        <div className="row mt-5 mb-5">
            <div className="col-lg-1 col-sm-auto m-auto m-sm-auto text-center">
                <img src={Imagen} 
                className="rounded-circle title-thumb-img" 
                alt="..."/></div>
            <div className="col-lg-8 col-sm-auto m-auto m-sm-auto pl-0 pl-sm-0 text-lg-left text-center titulo-categorias">
                <h4>{Nombre}</h4>
            </div>
            <div className="col-lg-3 col-sm-auto m-auto m-sm-auto text-lg-right">
                <a href='#categoriasPage' onClick={()=> history.push('/')}><p className='text-primary'> Ver otras categorías </p></a>
            </div>
        </div>
    </div>
    )
}

export default NombreCategoriaProducto
