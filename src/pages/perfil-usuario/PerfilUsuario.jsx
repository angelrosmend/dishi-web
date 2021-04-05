import React, { useContext } from 'react'
import { ContextUser } from '../../context/UserContext'
import './userpage.css'
import {avatar} from '../../assets/img/index'
import { Route, Switch } from 'react-router'
import DatosUsuario from './mis-datos/DatosUsuario'
import MisCompras from './mis-compras/MisCompras'
import Notificaciones from './mis-notificaciones/Notificaciones'
import FormularioActualizar from './actualizar-datos/FormularioActualizar'
import UserBanner from './bannner-nav/UserBanner'
import DetalleCompra from './mis-compras/DetalleCompra'

function PerfilUsuario(props) {
    const {user} = useContext(ContextUser)
    return (
        <div className="container-user container-fluid">
         <div className="user-profile my-2">
            <img src={avatar} alt=''/>
         </div>
         <UserBanner user={user}/>

      <div className="container-info mt-2 mb-5">
          <Switch>
            <Route path='/perfil/:name/datos' component={DatosUsuario} />
            <Route path='/perfil/:name/compras' exact component={MisCompras} />
            <Route path='/perfil/:name/compras/:id' component={DetalleCompra}/>
            <Route path='/perfil/:name/notificaciones' component={Notificaciones} />
            <Route path='/perfil/:name/actualizar-datos' component={FormularioActualizar} />
          </Switch>
      </div>
        </div>
    )
}

export default PerfilUsuario
