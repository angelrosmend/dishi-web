import React from 'react'
import { useHistory } from 'react-router-dom'



function CategoriaTitulo({nombre, imagen}) {
    
   const history = useHistory()
   const handleClick = () => history.push('/') 
    return (
    
        <div className="row mt-5 mb-5">
            <div className="col-lg-1 col-sm-auto m-auto m-sm-auto text-center">
                <img src={imagen} 
                className="rounded-circle title-thumb-img" 
                alt="..."/></div>
            <div className="col-lg-8 col-sm-auto m-auto m-sm-auto pl-4 pl-sm-4 titulo-categorias text-center text-lg-left">
                <h2>{nombre}</h2>
            </div>
            <div className="col-lg-3 col-sm-auto m-auto m-sm-auto text-lg-right text-center">        
                <a href='#categoriasPage' role='button' onClick={handleClick}>Ver otras categorías</a>
            </div>
        </div>
    )
}

export default CategoriaTitulo
