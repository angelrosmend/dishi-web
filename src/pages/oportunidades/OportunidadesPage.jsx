import React, { useContext } from 'react'
import Titulo from '../../components/titulo/Titulo'
import { ContextProducts } from '../../context/ProductContext'
import SliderOportunidadesPage from './SliderCategoriasPage'
import TarjetaOportunidades from './TarjetaOportunidades'

function OportunidadesPage() {
    const {data} = useContext(ContextProducts)
    const {destacados} = data
    return (
     <div className="container">
        <div className="row mb-5">
         <div className="col-10 m-auto m-sm-auto ">
             <Titulo text='Oportunidades'/>
             <SliderOportunidadesPage/>
             {destacados && destacados.map(item => {
                const { Id, Imagen, NombreProducto,Sucursal, Precio} = item;
                 return(
           <TarjetaOportunidades key={Id}
                    id={Id}
                    imagen={Imagen}
                    nombre={NombreProducto}
                    sucursal={Sucursal.NombreFantasia}
                    precio={Precio}/>
                 )
             })}
        </div>
      </div>
    </div>
    )
}

export default OportunidadesPage
