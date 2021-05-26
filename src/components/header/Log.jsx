import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom';
import { ContextUser } from '../../context/UserContext';
import LoginModal from '../modals/login/LoginModal';
import ModalLogout from '../modals/logout/ModalLogout';
import NavCart from './NavCart';
import NavMisCompras from './NavMisCompras';
import NavNotificaciones from './NavNotificaciones';
import NavUser from './NavUser';



function Log() {
    const {logged} = useContext(ContextUser)
    return (
     <Fragment>
                <div className="ml-2 one-line-text row to">

               {logged ?
                   <ModalLogout classText='my-auto'>
                   <p className="text-log trigger-btn my-auto"> Cerrar sesión</p>
                   </ModalLogout>
                 :
                 <div className="row my-auto">
                     <LoginModal><p className="text-log trigger-btn mx-1 my-auto">Ingresar</p></LoginModal>
                     <br/>
                       <Link to='/registro'><p className="text-log trigger-btn mx-1 my-auto"> Registrase</p></Link>
                 </div>}
                </div>
     </Fragment>

    )
}

export default Log
