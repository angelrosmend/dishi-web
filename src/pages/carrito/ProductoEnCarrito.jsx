import React,{useContext} from 'react'
import { Fragment } from 'react'
import { CartContext } from '../../context/CarritoContext'
import { calcularTotalProducto } from '../../helpers/NumberFormatter'

function ProductoEnCarrito(props) {
    const {increase, decreaseEnCarrito,changeQuantity} = useContext(CartContext)
    const { imagen, precio, nombre, sucursal, quantity,product} = props

    return (
    <Fragment>
        <div className="row bg-white no-gutters items-carrito text-center">
        <div className="col-sm-1 m-md-auto">
            <img src={imagen} alt="" className="img-fluid " style={{height: '100%', width: '100%'}}/>
        </div>      
        <div className="col-sm-8 px-4  m-md-auto text-sm-left text-md-left text-left">
            <div className="row">
                <p className="mb-0 seller-name">{sucursal}</p>
            </div>
            <div className="row">
                <p className="mb-0 product-name">{nombre}</p>
            </div>
       </div>
        <div className="col m-auto ">
            <div className="mb-0 w-100 ">
                <button onClick={()=>decreaseEnCarrito(product, quantity)}
                        className="btn-quantity p-0">
                            -
                </button>
                <input className="quantity" 
                        min="0" 
                        name="quantity" 
                        value={quantity}
                        onChange={(e) =>changeQuantity(product, parseInt(e.target.value))}
                        type="number"/>
                    
                <button onClick={()=> increase(product)}
                        className="btn-quantity p-0 m-0">
                            +
                </button>
            </div>
        </div>
    <div className="col text-right m-md-auto pr-4"><h4 className="price mb-0">${calcularTotalProducto(precio,quantity)}</h4> </div>
    </div>
    </Fragment>
    )
}

export default ProductoEnCarrito
