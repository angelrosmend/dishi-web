import React from 'react'
import BtnAdd from '../../../../botones/btn-add/BtnAdd'
import BtnFav from '../../../../botones/btn-fav/BtnFav'

function CardListBtnsSide({id,prodInfo, inCart, showBtnQty, hideBtnQty}) {
    return (
        <div class="btns-side-banner-wrapper">
            <div class="btns-wrapper mx-auto">
                <BtnAdd reversed={true}
                        prodInfo={prodInfo}
                        inCart={inCart}
                        showBtnQty={showBtnQty}
                        hideBtnQty={hideBtnQty}/>
                <BtnFav reversed={true}
                        id={id}
                        prodInfo={prodInfo}/>
            </div>        
         </div>
    )
}

export default CardListBtnsSide
