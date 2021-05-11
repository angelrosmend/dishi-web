import React, { useCallback, useContext, useState } from 'react'
import { jabon } from '../../../../assets/img'
import { CartContext } from '../../../../context/CarritoContext'
import { useQuantity } from '../../../../hooks/productos/useQuantity'
import "./cardproducto.css"
import BtnAdd from './components/BtnAdd'
import BtnLike from './components/BtnLike'
import BtnQuantity from './components/BtnQuantity'
import CardProductDescription from './components/CardProductDescription'
import ProductImg from './components/ProductImg'

function CardProduct(props) {
   const {id, imagen, nombre, precio, sucursal, Stock, destacado } = props

   const [inCart, quantity] = useQuantity(id)

   const [showBtn, setShowBtn] = useState(false)
   const showBtnQty = useCallback(() => setShowBtn(true))
   const hideBtnQty = () => setShowBtn(false)


    return (
        <div className="col-sm-12 col-md-12 card-container">
            <div className="mx-auto"
                 style={{position: "relative"}}
                 onMouseEnter={showBtnQty}
                 onMouseLeave={hideBtnQty}>
            {showBtn &&
            <span className="btns-card-wrapper"
                  onMouseEnter={showBtnQty}
                  >
                {!destacado &&
                <BtnAdd stock={Stock}
                        inCart={inCart}
                        showBtnQty={showBtnQty}
                        hideBtnQty={hideBtnQty}
                        prodInfo={props}/>}
                <BtnLike/>
            </span>}
            <ProductImg imagen={imagen} 
                        linkId={id}
                        showBTNS={showBtnQty}
                        hideBTNS={hideBtnQty}>
               {inCart && <BtnQuantity quantity={quantity}
                                       prodInfo={props}/>}
            </ProductImg>
            <CardProductDescription nombre={nombre}
                                    precio={precio}
                                    sucursal={sucursal}
                                    stock={Stock}/>
            </div>
       </div>
    )
}

export default CardProduct
