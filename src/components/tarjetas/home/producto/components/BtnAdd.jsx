import React, { useContext, useRef, useState } from 'react'
import { Fragment } from 'react'
import { CartContext } from '../../../../../context/CarritoContext'
import CustomTooltip from '../../../../tooltip/CustomTooltip'

function BtnAdd(props) {
    const {stock, inCart, showBtnQty, hideBtnQty, prodInfo,destacado} = props
    const {CART_METHODS} = useContext(CartContext)
    const {removeFromCart, addToCart} = CART_METHODS
    console.log(inCart)

    const [showTooltip, setShowShowTooltip] = useState(false);
    const [showTooltipAdd, setShowShowTooltipAdd] = useState(false);
    const toggleTooltip = () => setShowShowTooltip(!showTooltip)
    const toggleTooltipAdd = () => setShowShowTooltipAdd(!showTooltipAdd)

    const targetAdd = useRef(null);
    const targetRemove  = useRef(null)
    
    if(destacado) return null
    return (
        <Fragment>
             {//stock &&
              inCart ? 
              <Fragment>
                <i onClick={()=> removeFromCart({...prodInfo})}
                   className="fas fa-cart-plus btn-cart-prod cart-active"
                   onMouseEnter={()=> {showBtnQty(); toggleTooltip(); }}
                   onMouseLeave={toggleTooltip}
                   ref={targetRemove}
                   />
                  
              <CustomTooltip target={targetRemove}
                             show={showTooltip}
                             placement="left">
                      Remover del<br /> carrito
              </CustomTooltip>
              </Fragment>
                     :
              <Fragment>
                <i onClick={()=> {addToCart({...prodInfo}); showBtnQty()}}
                   onMouseEnter={()=> {showBtnQty(); toggleTooltipAdd(); }}
                   onMouseLeave={toggleTooltipAdd}
                   className="fas fa-cart-plus btn-cart-prod"
                   ref={targetAdd}
                   />
                <CustomTooltip target={targetAdd}
                               show={showTooltipAdd}
                               placement="left">
                      Agregar al<br /> carrito
                </CustomTooltip>
              </Fragment>
             }
        </Fragment>
    )
}

export default BtnAdd
