import React, { Fragment, useContext } from 'react'
import ModalUpdateFail from '../../../components/modals/fail/ModalUpdateFail'
import ModalUpdateSuccess from '../../../components/modals/success/ModalUpdateUserSuccess'
import { ContextUser } from '../../../context/UserContext'
import FormularioCasa from './FormularioCasa'
import FormularioComercio from './FormularioComercio'



function FormularioActualizar() {

const {comercio, casa} = useContext(ContextUser)
    if(comercio)
    return (
        <Fragment>
            <FormularioComercio/>
            <ModalUpdateSuccess/>
            <ModalUpdateFail/>
        </Fragment>
    )
   if(casa)
   return (
       <Fragment>
            <FormularioCasa/>
            <ModalUpdateSuccess/>
            <ModalUpdateFail/>
       </Fragment>
   )
   else
   return <h3>Algo ha salido mal</h3>
}






export default FormularioActualizar
