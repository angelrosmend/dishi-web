import React from 'react'


function Titulos({areaCobertura, message, zipcode}) {

    return (
    <div className="row no-gutters">
        <div className="col my-5">
            <h3>Dirección de entrega</h3>
            <p className="tiempo-estimado font-weight-bold">Tiempo estimado de entrega: 48 horas</p>
            {zipcode ? 
            <p className={`${ areaCobertura ? 'mensaje-cobertura-ok' : 'text-danger'} font-weight-bold`}>{message}</p>
            :
            null}
        </div>
    </div>
    )
}

export default Titulos
