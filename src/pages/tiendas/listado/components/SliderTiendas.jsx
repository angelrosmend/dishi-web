import React from 'react'
import SliderDishi from '../../../../components/slider/SliderDishi'
import CardTienda from '../../../../components/tarjetas/home/tiendas/CardTienda'

function SliderTiendas({tiendas}) {
    if(!tiendas || tiendas.length < 1) return null
    return (
        <SliderDishi items={tiendas}>
            {tiendas && tiendas.map(item => {
                 const {Id, NombreFantasia, Direccion, Logo, Rubro} = item;
                 return <CardTienda id={Id} 
                                    key={Id} 
                                    nombre={NombreFantasia} 
                                    direccion={Direccion}
                                    imagen={Logo}
                                    rubro={Rubro}/>
            })
            }
        </SliderDishi>
    )
}

export default SliderTiendas
