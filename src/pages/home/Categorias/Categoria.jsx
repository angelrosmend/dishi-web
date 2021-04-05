import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

function Categoria({id, nombre, imagen}) {
    return (
       <Fragment>
        <div className="d-flex flex-column mx-auto text-center img-cat-container">
           <Link to={`/categorias/${id}`}><img className="categoria-img-circulo" 
            src={imagen}
            alt="" 
            style={{margin: "auto"}}/> </Link>
            <p className="lead py-2"><b>{nombre}</b></p>
        </div>
        </Fragment>
    )
}

export default Categoria
