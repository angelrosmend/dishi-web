import React from 'react'

function Categoria({nombre, imagen}) {
    return (
    <div className=" col-lg-12 text-center">
        <div className="img-cat-container d-flex">
            <img className="rounded-circle" 
            src={imagen}
            alt="Generic placeholder image" 
            width="140" 
            height="140"
            style={{margin: "auto"}}/>
        </div>
        <p className="lead py-2"><b>{nombre}</b></p>
    </div>
    )
}

export default Categoria
