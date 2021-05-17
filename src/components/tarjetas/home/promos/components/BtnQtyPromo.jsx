import React, { useContext } from 'react'
import { Fragment } from 'react'
import { CartContext } from '../../../../../context/CarritoContext'

function BtnQtyPromo(props) {
    const {inCart, prodInfo, quantity, showBtn} = props

    const {CART_METHODS} =useContext(CartContext)
    const {decrease, changeQuantity, increase} = CART_METHODS

    return (
        <Fragment>
        {inCart && 
        <div className={showBtn ? `btn-quantity-home-show-promos`:`btn-quantity-home-promos`}>
                <i className="fas fa-minus btn-quantity-home-btn"
                  onClick={()=> decrease({...prodInfo}, quantity)}/>

                <input className="quantity-home my-auto"
                        min="0" 
                        name="quantity" 
                        value={quantity}
                        onChange={(e) =>changeQuantity({...prodInfo}, parseInt(e.target.value))}
                        type="number"/>
                <i  onClick={()=> increase({...prodInfo})} className="fas fa-plus btn-quantity-home-btn"/>
           </div>}
        </Fragment>
    )
}

export default BtnQtyPromo
