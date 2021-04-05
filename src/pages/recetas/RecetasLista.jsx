import React, { useContext } from 'react'
import { Fragment } from 'react'
import { ContextProducts } from '../../context/ProductContext'
import Banner from './Banner'
import './recetas.css'
import TarjetaReceta from './TarjetaReceta'

function RecetasLista() {

    const {recetas} = useContext(ContextProducts)
    return (
        <Fragment>
            <Banner/>
        <div className="container">
           <div className="row">
            <div className="col-10 m-auto m-sm-auto">
                {recetas && recetas.map(receta => {
                    const {Id, FechaAlta, Subtitulo, Titulo, Imagenes } = receta
                    return <TarjetaReceta id={Id}
                                          key={Id}
                                          imagen={Imagenes[0]}
                                          titulo={Titulo}
                                          subtitulo={Subtitulo}
                                          fecha={FechaAlta}/>
                })}

            </div>
           </div>
         </div>
        </Fragment>
    )
}

export default RecetasLista
