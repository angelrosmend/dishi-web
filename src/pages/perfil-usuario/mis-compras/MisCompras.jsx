import React, { useContext, useState } from 'react'
import { Fragment } from 'react'
import { Spinner } from 'reactstrap'
import { ContextUser } from '../../../context/UserContext'
import { useGetMisCompras } from '../../../hooks/usuario/useGetMisCompras'
import Subtitulo from '../../home/Subtitulo/Subtitulo'
import TarjetaCompra from './TarjetaCompra'

function MisCompras() {
    const {user} = useContext(ContextUser)
    const [countVisible, setCountVisible] = useState(5)

    const {data, loading} = useGetMisCompras(user, countVisible)
    const loadMore = () => setCountVisible((prevState) => prevState + 5)
    return (
        <Fragment>
            <Subtitulo text='Mis compras'/>
            <div className='container-info-inner'>
                <div className="container-compras">
                    {data.length < 1 ? 
                      <h3 className='text-primary text-center'>
                        No tienes compras
                      </h3>
                      :
                       data.slice(0, countVisible).map(compra => {
                        const {Pedido} = compra;
                        const {Id} = Pedido;
                       if(loading)return <Spinner style={{ position: 'absolute', width: '3rem', height: '3rem', top: '50%', left: '50%' }} color='primary'/>
                       else return <TarjetaCompra key={Id} pedido={Pedido} user={user}/>
                    })}
                </div>
                <div className="col-10 mx-auto row"  id='mis-compras' >
                { countVisible <= data.length ? <button className='mx-auto mt-4 btn btn-light rounded-pill px-4 py-2 text-primary' onClick={loadMore}>VER MÁS</button> : null}
                </div>
            </div>
        </Fragment>
    )
}

export default MisCompras
