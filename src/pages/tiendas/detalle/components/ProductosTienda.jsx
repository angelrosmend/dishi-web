import React from 'react'
import { Fragment } from 'react'
import CardProduct from '../../../../components/tarjetas/home/producto/CardProduct'

function ProductosTienda(props) {
    const {products} = props
    if(!products) return null
    return (
        <Fragment>
            <div className="container mt-5">
                <div className="row text-center">
                    <div className="col-12 pb-3">
                        <h3>Productos <span className="tienda-brand-blue">FRES.CO</span></h3>
                    </div>
                </div>
            </div>
                <SliderDishi items={products}>
                    {
                        products.map(item => {
                            const {id} = item
                            return(<CardProduct key={id}/>)
                        })
                    }
                </SliderDishi>
        </Fragment>
    )
}

export default ProductosTienda
