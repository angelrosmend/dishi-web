import React from 'react'
import CardInfo from './CardInfo'

function CardsInfoTienda() {
    return (
    <div className="row justify-content-center mt-5">
      <div className="col-10">
        <div className="row justify-content-center">
        
            <CardInfo icon="fas fa-wallet"
                      titulo="Acepta Billetera" 
                      subtitulo="Pagá tus productos 100% online."
                    />
            <CardInfo icon="fas fa-credit-card"
                      titulo="Acepta Crédito" 
                      subtitulo="Pagá con tarjeta de crédito!"
                    />
            <CardInfo icon="fas fa-motorcycle"
                      titulo="Envío Gratis" 
                      subtitulo="en pedidos mayores a $2500"
                    />
            <CardInfo icon="fas fa-percent"
                      titulo="Promociones" 
                      subtitulo="Aprovecha los productos off!"
                    />
        </div>
    </div>
</div>
    )
}

export default CardsInfoTienda
