import React,{useContext} from 'react'
import { Fragment } from 'react';
import {  Modal, ModalBody} from 'reactstrap';
import { ContextUser } from '../../../context/UserContext';


function RegistroSuccess() {
    const {modalRegistroSuccess, setModalRegistroSuccess, setModalLogin} = useContext(ContextUser)
    const toggle = () => setModalRegistroSuccess(!modalRegistroSuccess);
    const handleClick =  () => {
      setModalRegistroSuccess(false)
      setModalLogin(true)
    }

    return (
    <Fragment>
              
    <Modal isOpen={modalRegistroSuccess} toggle={toggle} className="col-sm px-0">
     <ModalBody style={{padding: "0", margin: "0"}}>
      <div className="modal-dialog modal-login modal-dialog-centered p-5 " style={{border: "none"}}>
        <div className="modal-content " style={{border:"none"}}>
             <i className="fas fa-check-circle text-center icon-success"></i>
            <h1 className="text-primary text-center pt-3 pb-3">Felicitaciones!</h1>
            <h2 className="text-secondary text-center pt-2 pb-5">Tu cuenta ya está activa</h2>
            <button type="button" onClick={handleClick} className="btn btn-primary rounded-pill mx-5">
              INGRESAR
              </button>
        </div>
    </div>
    </ModalBody>
  </Modal>
  </Fragment>
    )
}

export default RegistroSuccess
