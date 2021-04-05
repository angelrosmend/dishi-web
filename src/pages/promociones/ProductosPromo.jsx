import React from 'react'

function ProductosPromo({ imagen, nombre,cantidad}) {

    return (
      <div className="row bg-white mb-3 mr-3 no-gutters card-promo">
        <div className="col-auto col-lg-2 text-center text-lg-left m-auto m-lg-0">
            <img src={imagen} className="img-fluid w-75 img-responsive align-content-center" alt=""/>
        </div>
        <div className="col-10 col-lg-8 m-auto py-2 pt-lg-0 py-lg-0">
            <h5 className="titulo-promos mb-0">{nombre}</h5>
        </div>
        <div className="col-2 col-lg-1 m-auto py-2 pt-lg-0 py-lg-0">
            <p className="cantidad-producto mb-0">{cantidad}</p>
        </div>
    </div>

    )
}

export default ProductosPromo
