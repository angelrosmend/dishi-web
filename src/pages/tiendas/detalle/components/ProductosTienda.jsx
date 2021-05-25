import React from 'react'
import { Fragment } from 'react'
import SliderDishi from '../../../../components/slider/SliderDishi'
import CardProduct from '../../../../components/tarjetas/home/producto/CardProduct'

function ProductosTienda(props) {
    const {products, NombreFantasia} = props
    if(!products) return null
    return (
        <Fragment>
            <div className="container mt-5">
                <div className="row text-center">
                    <div className="col-12 pb-3">
                        <h3>Productos <span className="tienda-brand-blue">{NombreFantasia}</span></h3>
                    </div>
                </div>
            </div>
                <SliderDishi items={products}>
                    {
                        products.map(item => {
                            const { Id, Imagen, NombreProducto, Precio, Sucursal, ValorParaCajaDelivery, Stock} = item;
                            const {NombreFantasia} = Sucursal
                            return(<CardProduct key={Id}
                                                id={Id}
                                                imagen={Imagen} 
                                                nombre={NombreProducto} 
                                                precio={Precio}
                                                 sucursal={NombreFantasia} 
                                                ValorParaCajaDelivery={ValorParaCajaDelivery}
                                                Stock={Stock}
                                                Tipo={0}
                                                tienda={true}
                                                />)
                        })
                    }
                </SliderDishi>
        </Fragment>
    )
}

export default ProductosTienda
