import React from 'react'

function SlideFotoProducto({imagen}) {
    return (
        <div className="col-lg-5 px-0">
         <div id="carouselProductos" className="carousel slide " data-ride="true">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block prod-detalle-img "  src={imagen} alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block prod-detalle-img" src={imagen} alt="Second slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block prod-detalle-img" src={imagen} alt="Third slide"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselProductos" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselProductos" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
    )
}

export default SlideFotoProducto
