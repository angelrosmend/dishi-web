import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { CartContext } from '../../context/CarritoContext'
import {toast} from 'react-toastify'


toast.configure()
const notifyLogin = () => toast.info('Inicia sesión para poder completar la compra!', {autoClose: '2000', position: toast.POSITION.BOTTOM_LEFT} )

function Botones(props) {
    const {back, btnText, linkText, logged, validMonto, checked, cupon} = props
    const {numeroDeItems,  validMontoEstado, totalFinal, setCompraGratis} = useContext(CartContext)
    const history = useHistory()
    const handleClick = () => {
        if(validMontoEstado === 3 && totalFinal === 0 ){

            setCompraGratis(true)
        }
        history.push('/checkout-2-direccion')
    }
    const handleClickNotLogged = () => notifyLogin()
    
    return (
    <div className="row buttons pt-5 text-center">
        <div className="col text-sm-center text-md-center back">
            {back ? <Link to={back} className="btn btn-light rounded-pill px-4 py-2 text-left float-lg-left float-sm-none float-md-none mb-3 "><i className="fas fa-arrow-left mr-3"></i>{linkText}</Link> : null}
           {numeroDeItems ?
           
           logged?
           <button disabled={!logged ||!validMonto || checked && !cupon}
                   onClick={handleClick}
                   className="btn btn-primary rounded-pill  px-4 py-2 text-right float-lg-right float-sm-none float-md-none mb-3" >
                     {btnText}
           <i className="fas fa-arrow-right ml-3"></i>
           </button>
           :
            <button disabled={!validMonto}
                   onClick={handleClickNotLogged}
                   className="btn btn-primary rounded-pill  px-4 py-2 text-right float-lg-right float-sm-none float-md-none mb-3" >
                     {btnText}
           <i className="fas fa-arrow-right ml-3"></i>
           </button>
           :null}
        </div>
    </div>
    )
}

export default Botones
