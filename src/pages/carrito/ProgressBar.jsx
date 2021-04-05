import React from 'react'
import { useHistory } from 'react-router'




export function ProgressBarPaso1() {
    const history = useHistory()
    const handlePaso1 = () => {
        history.push('/checkout-1-carrito')
    }
  
    return (
        <div className="container pt-5">
        <div className="row text-center aos-init aos-animate justify-content-md-center">
            <div className="col col-sm-8">
                <ul id="progressbar">
                    <li className="active first" 
                        onClick={handlePaso1}
                        id="address">
                    </li>
                    <li className=""  
                       id="payment">
                    </li>
                    <li className="last" 
                        id="confirm"></li>
                </ul>
            </div>
        </div>
    </div>
    )
}


export function ProgressBarPaso2() {
    const history = useHistory()
    const handlePaso1 = () => {
        history.push('/checkout-1-carrito')
    }
    return (
        <div className="container pt-5">
        <div className="row text-center aos-init aos-animate justify-content-md-center" 
             data-aos="zoom-in" 
             data-aos-delay="150">
            <div className="col col-sm-8">
            <ul id="progressbar">
                <li className="active first" 
                    id="address"
                    onClick={handlePaso1}></li>
                    
                <li className="active"  id="payment"></li>
                <li className="last" id="confirm"></li>
            </ul>
        </div>
        </div>
   </div>
    )
}

export function ProgressBarPaso3() {

    const history = useHistory()
    const handlePaso1 = () => {
        history.push('/checkout-1-carrito')
    }
    const handlePaso2 = () => {
        history.push('/checkout-2-direccion')
    }
    
    return(
        <div className="container pt-5">
        <div className="row text-center aos-init aos-animate justify-content-md-center" data-aos="zoom-in" data-aos-delay="150">
            <div className="col col-sm-8">
            <ul id="progressbar">
                <li className="active first" 
                     onClick={handlePaso1}
                     id="address"></li>
                <li className="active"  
                    id="payment"
                    onClick={handlePaso2}></li>
                <li className="active last" id="confirm"></li>
            </ul>
        </div>
        </div>
       </div>
    )
}


