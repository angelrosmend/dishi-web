import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom';
import { ContextUser } from '../../../context/UserContext';
import LoginModal from '../../modals/login/LoginModal';
import ModalLogout from '../../modals/logout/ModalLogout';



function Log() {
    const {logged} = useContext(ContextUser)
    return (
     <Fragment>
                <div className="ml-2 one-line-text log-container">

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
