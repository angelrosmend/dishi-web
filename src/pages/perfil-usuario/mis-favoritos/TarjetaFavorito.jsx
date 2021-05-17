import React from 'react'
import BtnAdd from '../../../components/botones/btn-add/BtnAdd'
import BtnFav from '../../../components/botones/btn-fav/BtnFav'
import { useQuantity } from '../../../hooks/productos/useQuantity'

function TarjetaFavorito({prodInfo}) {
    const {id,imagen, nombre, sucursal, stock } = prodInfo
    const [inCart, quantity] = useQuantity(id)
    return (
        <div className="tarjeta-favorito">
            <div className="img-favoritos">
                <img src={imagen} alt=""/>
            </div>
            <div className="description-favoritos ">
                <div className="m-auto">
                <p className="seller-name mb-0">{sucursal}</p>
                <p className="product-name mb-0">{nombre}</p>
            </div>
            </div>
            <div className="btns-favoritos ">
                <div className="wrapper">
                  <BtnFav id={id}
                          prodInfo={prodInfo}/>

                  <BtnAdd prodInfo={prodInfo}
                          stock={stock}
                          inCart={inCart}
                          />
                </div>
            </div>
        </div>
    )
}

export default TarjetaFavorito
