import React, { useContext, useState } from 'react'
import { Fragment } from 'react'
import { Spinner } from 'reactstrap'
import { ContextUser } from '../../../context/UserContext'
import { useGetMisCompras } from '../../../hooks/usuario/useGetMisCompras'
import Subtitulo from '../../home/Subtitulo/Subtitulo'
import TarjetaFavorito from './TarjetaFavorito'

function MisFavoritos() {
    const {user, FAVORITOS_VALUES} = useContext(ContextUser)
    const {favItems} = FAVORITOS_VALUES
    const [countVisible, setCountVisible] = useState(5)

    const loadMore = () => setCountVisible((prevState) => prevState + 5)
    return (
        <Fragment>
            <Subtitulo text='Mis Favoritos'/>
            <div className='container-info-inner '>
                <div className="container-compras ">
                    {favItems.length < 1 ? 
                      <h3 className='text-primary text-center'>
                        No tienes favoritos
                      </h3>
                      :
                       favItems.slice(0, countVisible).map(item => {
                       const {id, nombre, imagen, sucural, stock} = item
                        return <TarjetaFavorito key={id} id={id} prodInfo={item}/>
                    })}
                </div>
                <div className="col-10 mx-auto row"  id='mis-compras' >
                { countVisible <= favItems.length ? <button className='mx-auto mt-4 btn btn-light rounded-pill px-4 py-2 text-primary' onClick={loadMore}>VER MÁS</button> : null}
                </div>
            </div>
        </Fragment>
    )
}

export default MisFavoritos
