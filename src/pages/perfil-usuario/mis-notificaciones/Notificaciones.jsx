import React, { useContext } from 'react'
import { Fragment } from 'react'
import { Spinner } from 'reactstrap'
import { ContextUser } from '../../../context/UserContext'
import Subtitulo from '../../home/Subtitulo/Subtitulo'
import TarjetaNotificaciones from './TarjetaNotificaciones'

function Notificaciones() {
    const { notificaciones, loading, countNotificaciones} =  useContext(ContextUser)
    const [notificacionesVisibles, setNotificacionesVisibles] = countNotificaciones
    const loadMore = () => setNotificacionesVisibles((prevState) => prevState + 4)
    return (
        <Fragment>
            <Subtitulo text='Notificaciones'/>
            <div className='container-info-inner mt-5'>
                <div className="container-notificaciones">
                {notificaciones.length < 1 ?
                <h3 className='text-primary text-center'>
                    No tienes notificaciones
                </h3>
                    :
                notificaciones.slice(0, notificacionesVisibles).map(item => {
                    const {Id} = item;
                    if(loading) return <Spinner style={{ position: 'absolute', width: '3rem', height: '3rem', top: '50%', left: '50%' }} color='primary'/>
                    else return <TarjetaNotificaciones key={Id} notificacion={item}/>
                })}
                  </div>
                  <div className="col-10 mx-auto row"  id='mis-notificaciones' >
                   {notificacionesVisibles <= notificaciones.length ?
                    <button className='mx-auto mt-4 btn btn-light rounded-pill px-4 py-2 text-primary' onClick={loadMore}>VER MÁS</button>
                     :
                     null}
                </div>
            </div>
        </Fragment>
    )
}

export default Notificaciones
