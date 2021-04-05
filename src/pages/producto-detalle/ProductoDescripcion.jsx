import React from 'react'


function ProductoDescripcion(props) {
    const {descripcion, logoTienda, sucursal} = props
    return (
        <div className="col-12 mb-5" data-aos="fade-up" data-aos-delay="170">
        <div className="row d-flex">
            <div className="col col-lg-8 p-0">
                <div className="bg-white mr-lg-3 p-4 h-100">
                    <p className="titulo-descripcion">Descripción del producto</p>
                    <p className="texto-descripcion">{descripcion}</p>
                </div>
            </div>
{/*             <div className="col col-lg-4 p-0  ">
                <div className=" bg-white ml-lg-3 p-4 h-100">
                    <p className="text-left mb-3 titulo-descripcion">Tienda</p>
                    <div className="card-tienda">
                        <img className="imagenes" src={logoTienda} alt=""/>
                        <div className="card-tienda-titulo p-2">{sucursal}</div>
                        <div className="p-2"><p className="text-tiendas">Descripcion Tienda</p></div>
                    
                    </div>
                </div>
            </div> */}
        </div>
    </div>
    )
}

export default ProductoDescripcion
