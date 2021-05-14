import React from 'react'
import SliderDishi from '../../../components/slider/SliderDishi'
import CardPromo from '../../../components/tarjetas/home/promos/CardPromo'
import Subtitulo from '../Subtitulo/Subtitulo'

function PromosHot({promos}) {
    if(promos.length < 1 || !promos) return null
    return (
        <div className="espaciado espaciado-wrapper">
            <Subtitulo text="Promos Hot"
                       vermas="/promociones"/>
            <SliderDishi items={promos} isPromo={true}>
                {promos && promos.map(item => {
              const {Id, Imagen, NombreProducto, Precio, NombreFantasia, ValorParaCajaDelivery, Stock} = item 
              return <CardPromo key={Id}
                                id={Id}
                                imagen={Imagen} 
                                nombre={NombreProducto} 
                                precio={Precio}
                                sucursal={NombreFantasia}
                                ValorParaCajaDelivery={ValorParaCajaDelivery}
                                Stock={Stock}
                                Tipo={1}/>
                })}
            </SliderDishi> 
        </div>
    )
}

export default PromosHot
