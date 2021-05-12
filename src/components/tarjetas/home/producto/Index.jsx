import React, { useCallback, useContext, useState } from 'react'
import { jabon } from '../../../../assets/img'
import { CartContext } from '../../../../context/CarritoContext'
import { useQuantity } from '../../../../hooks/productos/useQuantity'
import "./cardproducto.css"
import BtnAdd from './components/BtnAdd'
import BtnFav from './components/BtnFav'
import BtnQuantity from './components/BtnQuantity'
import CardProductDescription from './components/CardProductDescription'
import ProductImg from './components/ProductImg'

function CardProduct(props) {
   const {id, imagen, nombre, precio, sucursal, Stock, destacado, tienda,
          rubro, direccion} = props

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
                
                
                <BtnAdd stock={Stock}
                        inCart={inCart}
                        showBtnQty={showBtnQty}
                        hideBtnQty={hideBtnQty}
                        prodInfo={props}
                        destacado={destacado}
                        tienda={tienda}/>
                <BtnFav id={id}
                        prodInfo={props}
                        tienda={tienda}/>
            </span>}
            <ProductImg imagen={imagen} 
                        linkId={id}
                        showBTNS={showBtnQty}
                        hideBTNS={hideBtnQty}>
               {inCart && <BtnQuantity quantity={quantity}
                                       prodInfo={props}
                                       tienda={tienda}/>}
            </ProductImg>
            <CardProductDescription nombre={nombre}
                                    precio={precio}
                                    sucursal={sucursal}
                                    stock={Stock}
                                    rubro={rubro}
                                    direccion={direccion}
                                    tienda={tienda}/>
            </div>
       </div>
    )
}

export default CardProduct
