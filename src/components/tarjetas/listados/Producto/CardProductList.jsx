import React, { useCallback, useState } from 'react'
import { useQuantity } from '../../../../hooks/productos/useQuantity'
import "./cardproductlist.css"
import BtnQuantityList from './components/BtnQuantityList'
import CardListBtnsSide from './components/CardListBtnsSide'
import CardListDescription from './components/CardListDescription'
import CardListImg from './components/CardListImg'
import CardListLayout from './components/CardListLayout'

function CardProductList(props) {
    const {id, imagen, nombre, sucursal} = props
    const [inCart, quantity] = useQuantity(id)

    const [showBtn, setShowBtn] = useState(false)
    const showBtnQty = useCallback(() => setShowBtn(true))
    const hideBtnQty = useCallback(() => setShowBtn(false))

    return (
        <CardListLayout onMouseEnter={showBtnQty}
                        onMouseLeave={hideBtnQty}>
            <CardListImg imagen={imagen}>
                {inCart &&
                <BtnQuantityList prodInfo={props}
                                 quantity={quantity}
                                 showBtn={showBtn}/>}
            </CardListImg>
            <CardListDescription prodInfo={props}/>
            <CardListBtnsSide prodInfo={props}
                              id={id}
                              inCart={inCart}
                              showBtnQty={showBtnQty}
                              hideBtnQty={hideBtnQty}
                              />
        </CardListLayout>
    )
}

export default CardProductList
