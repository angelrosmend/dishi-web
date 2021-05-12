import React from 'react'
import { fechaNotificaciones, getFechaLeida } from '../../../helpers/fechas'

function TarjetaNotificaciones({notificacion}) {
    const {Text, Titulo, FechaAlta, FechaLectura, Leida} = notificacion
    return (
        <div className='tarjeta-notificacion px-5 py-3'>
            <div className="fecha-estado">
                <div className="row px-3">
                    <p className="text-dark flex-grow-1">
                      <b> {fechaNotificaciones(FechaAlta)}</b>
                    </p>
                   {Leida &&
                     <p className='text-secondary flex-grow-1 text-right'>
                         {getFechaLeida(FechaLectura)}
                     </p>
                    }
                </div>
                <p className="text-primary m-0"><b>{Titulo}</b></p>
                <p className="text-secondary pb-2">
                    {Text}
                </p>
            </div>
        </div>
    )
}
export default TarjetaNotificaciones
