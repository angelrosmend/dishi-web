import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { CartContext } from '../../../context/CarritoContext'

function BotonConfirmarDireccion(props) {
    const {back, btnText, linkText} = props
    const {numeroDeItems, zipcode} = useContext(CartContext)
    const history = useHistory()

    const handleClick = () => {
        history.push('/checkout-3-medio-pago')
    }

    return (
    <div className="row buttons pt-5 text-center">
        <div className="col text-sm-center text-md-center back">
            {back ? 
            <Link to={back} className="btn btn-light rounded-pill px-4 py-2 text-left float-lg-left float-sm-none float-md-none mb-3 ">
            <i className="fas fa-arrow-left mr-3"></i>{linkText}</Link> : null}
           {numeroDeItems ?
           <button type="submit" onClick={handleClick}
                 className="btn btn-primary rounded-pill  px-4 py-2 text-right float-lg-right float-sm-none float-md-none mb-3"
                 disabled={!zipcode}>    
             {btnText} 
             <i className="fas fa-arrow-right ml-3"></i>
           </button>
           :null}
        </div>
    </div>
    )
}

export default BotonConfirmarDireccion
