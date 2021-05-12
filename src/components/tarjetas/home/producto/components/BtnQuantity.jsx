import React, { useContext } from 'react'
import { CartContext } from '../../../../../context/CarritoContext'

function BtnQuantity(props) {
    const {showBtn, quantity, prodInfo, tienda} = props

    const {CART_METHODS} = useContext(CartContext)

    const {decrease, changeQuantity, increase} = CART_METHODS
    if(tienda) return null
    return (
        <div className={showBtn ? `btn-quantity-card-prod-show`:`btn-quantity-card-prod`}>
         
         <i className="fas fa-minus btn-quantity-card-prod-btn"
            onClick={()=> decrease({...prodInfo}, quantity)}/>

         <input className="quantity-card-prod my-auto"
                min="0" 
                name="quantity" 
                value={quantity}
                onChange={(e) =>changeQuantity({...prodInfo}, parseInt(e.target.value))}
                type="number"
                />

         <i className="fas fa-plus btn-quantity-card-prod-btn"
            onClick={()=> increase({...prodInfo})} 
              />
 </div>
    )
}

export default BtnQuantity
