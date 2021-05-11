import React, { useContext } from 'react'
import { Fragment } from 'react'
import { CartContext } from '../../../../../context/CarritoContext'

function BtnAdd(props) {
    const {stock, inCart, showBtnQty, hideBtnQty, prodInfo} = props
    const {CART_METHODS} = useContext(CartContext)
    const {removeFromCart, addToCart} = CART_METHODS
    return (
        <Fragment>
             {//stock &&
              inCart ? 
                <i onClick={()=> removeFromCart({...prodInfo})}
                   className="fas fa-cart-plus btn-cart-prod cart-active"
                   onMouseEnter={showBtnQty}
                   onMouseOver={showBtnQty}
                   />
                     :
                <i onClick={()=> {addToCart({...prodInfo}); showBtnQty()}}
                   className="fas fa-cart-plus btn-cart-prod"
                   
                   />  
             }
        </Fragment>
    )
}

export default BtnAdd
