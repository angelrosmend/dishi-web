import React, { useContext } from 'react'
import { ContextUser } from '../../context/UserContext'

function Log() {
    const {loggedIn, loggedOut, login, logout} = useContext(ContextUser)

    return (
        <div className="col-2 log-container">
            <div onClick={logout} className={loggedIn}><p className="log-link">Cerrar</p></div>
            <div onClick={login} className={loggedOut}><p className="log-link">Inicio</p></div>
            <div className={loggedOut}><p className="log-link">Registrarse</p></div>
        </div>
    )
}

export default Log
