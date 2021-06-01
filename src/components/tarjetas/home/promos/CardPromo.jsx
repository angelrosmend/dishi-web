import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { useQuantity } from '../../../../hooks/productos/useQuantity'
import BtnAdd from '../../../botones/btn-add/BtnAdd'
import BtnFav from '../../../botones/btn-fav/BtnFav'
import BtnQtyPromo from './components/BtnQtyPromo'

function CardPromo(props) {
    const {id,  nombre, imagen, precio, sucursal, ValorParaCajaDelivery, Tipo, Stock} = props
    const [showBtn, setShowBtn] = useState(false)

    const showBtnQty = useCallback(() => setShowBtn(true))
    const hideBtnQty = () => setShowBtn(false)

    const [inCart, quantity] = useQuantity(id)
    return (
        <div className="col-sm-12 col-md-12 py-3" data-aos='fade-up'>
            { showBtn && 
            <span className="btns-card-wrapper-promo"
                  onMouseEnter={showBtnQty}>
                      <BtnAdd stock={Stock}
                              inCart={inCart}
                              showBtnQty={showBtnQty}
                              hideBtnQty={hideBtnQty}
                              prodInfo={props}
                              />
                      <BtnFav id={id}
                              prodInfo={props}
                              /> 
                  </span>}
            <div className="img-prod-container"
                onMouseEnter={showBtnQty}
                onMouseLeave={hideBtnQty}>
                        <Link to={`/detalle/${id}`}>
                            <img className="imagenes-2" 
                                 src={imagen} 
                                 alt=""/>
                        </Link>
            <BtnQtyPromo inCart={inCart}
                         quantity={quantity}
                         prodInfo={props}
                         />
        </div>
            <div className="row no-gutters">
                    <div className="col-md-6 col-sm-12 m-0 p-0">
                        <div className="text3-img text3-bg-1 ">
                            <p className="titulo px-3"><b>{sucursal}</b></p>
                            <p className="px-3" 
                               style={{fontSize: '1rem'}}>
                                   {nombre}
                            </p>
                        </div>
                    </div>
             <div className="col-md-6 col-sm-12 d-flex ">
                <div className="text3-bg-2 ">
                    <div className="text3-img d-flex justify-content-center">
                       {/*  <button type="button" className="btn btn-primary boton-2 ml-1">20%OFF</button> */}
                         <p className="text3-img-2 px-3 text-3" style={{margin:'auto'}}>$ {precio}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CardPromo
