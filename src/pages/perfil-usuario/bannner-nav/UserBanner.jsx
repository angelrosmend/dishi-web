import React, { useContext } from 'react'
import { useHistory, useLocation} from 'react-router-dom'
import { ContextUser } from '../../../context/UserContext'

function UserBanner({user}) {
    const name = user && user.Nombre 
    const nombreCompleto = user && user.Usuario.NombreCompleto
    const history = useHistory()
    const handleLink = (path) => history.push(path) 

     const location = useLocation()
     const pathLocation = location.pathname
     const pathUserPage = (path) => `/perfil/${name}/${path}`

     const {idCompra} = useContext(ContextUser)

     

     console.log('route hooks', idCompra, pathLocation)
    return (
        <div className="container-nav-page mb-5 ">
        <div className="container-user">
            <h3 className='text-center user-full-name mt-4'>{nombreCompleto}</h3>
            <hr/>
  
        <div className="icons-media">
             <a href='#mis-datos'
                onClick={() => handleLink(pathUserPage('datos'))}
                className='icon-user-page'>
                    <i className={`fas fa-user-edit ${pathLocation === pathUserPage('datos') || pathLocation === pathUserPage('actualizar-datos')  ? 'location-active' : ''}`}></i>
                    <p className="unidades"> Mis datos</p>
            </a>
        <a  href='#mis-compras'
            onClick={() => handleLink(pathUserPage('compras'))}
            className='icon-user-page'>
                <i className={`fas fa-shopping-bag ${pathLocation === pathUserPage('compras') || pathLocation === pathUserPage(`compras/${idCompra}`) ? 'location-active' : ''}`}></i>
                <p className="unidades">Mis compras</p>
        </a>
        <a href='#mis-notificaciones'
           onClick={() => handleLink(pathUserPage('notificaciones'))}
           className={`icon-user-page`}>
              <i className={`fas fa-bell ${pathLocation === pathUserPage('notificaciones') ? 'location-active' : ''}`} aria-hidden="true"></i>
              <p className="unidades"> Notificaciones</p>
      </a>
  </div>
  
  </div>
        </div>
    )
}

export default UserBanner
