import React, { Fragment, useContext } from 'react'
import { ContextUser } from '../../context/UserContext';
import ModalLogout from '../modals/logout/ModalLogout';
import NavCart from './NavCart';
import NavMisCompras from './NavMisCompras';
import NavNotificaciones from './NavNotificaciones';
import NavUser from './NavUser';



function Log() {
    const {logged} = useContext(ContextUser)
    return (
    <div className="col-10">
        <div className=" d-flex justify-content-end row text-log align-middle one-line-text align-content-center ">
               
                <NavUser/>
                <NavMisCompras/>
                <NavNotificaciones/>
                <NavCart/>
                <div className="ml-2 one-line-text row">

               {logged ?
                   <ModalLogout classText='my-auto'>
                   <p className="text-log trigger-btn my-auto"> Cerrar sesión</p>
                   </ModalLogout>
                 :
                 <Fragment>
                </Fragment>}
                </div>

            </div>
                
    </div>
    )
}

export default Log
