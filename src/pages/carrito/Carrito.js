import React, { useContext} from 'react'
import { Fragment } from 'react'
import ModalRemover from '../../components/modals/alerts/ModalRemover'
import Titulo from '../../components/titulo/Titulo'
import { CartContext } from '../../context/CarritoContext'
import { ContextUser } from '../../context/UserContext'
import { useMontoMinimo } from '../../hooks/pago/useMontoMinimo'
import Botones from './Botones'
import './carrito.css'
import Cupon from './Cupon'
import NumeroItems from './NumeroItems'
import ProductoEnCarrito from './ProductoEnCarrito'
import { ProgressBarPaso1 } from './ProgressBar'
import SubtotalItems from './SubtotalItems'
import Total from './Total'

function Carrito() {
    const {cartItems, numeroDeItems, descuentoPesos, validMontoEstado, validMontoTipo, checked, cuponValido, CART_VALUES} = useContext(CartContext)
    const {setCartItems} = CART_VALUES
    const {user, logged} = useContext(ContextUser)
    const [montoMinimo, setMontoMinimo] = useMontoMinimo(user,logged, validMontoEstado,descuentoPesos)

    const validMonto = validMontoTipo >= montoMinimo

    const CarritoLista = () =>{
      return(
        <Fragment>
       { cartItems.map(item =>{
          const {id,nombre, imagen,precio,sucursal, quantity} = item;
             return(
          <ProductoEnCarrito id={id}
            key={id}
            imagen={imagen}
            sucursal={sucursal}
            nombre={nombre}
            precio={precio}
            quantity={quantity}
            product={item}
            />
            )
        }
      )}
      <SubtotalItems/>
      </Fragment>
      )
    }
    return (
    <Fragment>
        <Titulo text='Carrito'/>
        <div className="container cart">
          <div className="row aos-init aos-animate justify-content-md-center">
            <div className="col-sm-10 no-gutters">
               { logged ? <ProgressBarPaso1/> : 
                numeroDeItems? <h4 className='text-primary text-center'>Debe iniciar sesión para poder completar la compra</h4>:null
               }
                <NumeroItems />
                {numeroDeItems > 0 ? 
                <Fragment> 
                  <CarritoLista/>
                  {logged && <Cupon setMontoMinimo={setMontoMinimo}/>}
                  <Total descuento={descuentoPesos}/>
                  {/* <button onClick={()=> setCartItems([])}>Reset</button> */}
                 {validMonto ? null : <p className='text-primary'>*Monto minimo de compra ${montoMinimo}</p>}
                </Fragment>
                : 
             <h1 className='text-center'>Tu carrito está vacío. Agregale productos!</h1>}
                {logged ? <Botones  back='/'
                                    next='/checkout-2-direccion'
                                    linkText='SEGUIR COMPRANDO'
                                    btnText='CONFIRMAR COMPRA'
                                    logged={logged}
                                    validMonto={validMonto}
                                    checked={checked}
                                    cupon={cuponValido}
                         />
                        :
                        <Fragment>
                          <Botones 
                                    back='/'
                                    next='/checkout-2-direccion'
                                    linkText='SEGUIR COMPRANDO'
                                    btnText='CONFIRMAR COMPRA'
                                    logged={logged}
                                    validMonto={validMonto}/>
                         </Fragment>
                       }
        </div>
    </div>
</div>
  <ModalRemover/>
    </Fragment>
    )
}

export default Carrito
