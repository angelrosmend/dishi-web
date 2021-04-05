import React,{useContext} from 'react'
import { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { Modal} from 'reactstrap';
import { ContextUser } from '../../../context/UserContext';
import '../Modals.css'

function ModalPWDSuccess() {
    const {modalPWDSuccess, setModalPWDSuccess} = useContext(ContextUser)
    const {show, message} = modalPWDSuccess

    const toggle = () => setModalPWDSuccess(!show);

    function handleClick () {
      toggle()
    }

   
    return (
    <Fragment> 
    <Modal isOpen={show} toggle={toggle} className=" col-sm px-0" onClick={handleClick}>
     <div className="modal-dialog modal-dialog-centered ">
     <div className="modal-content p-5 text-center" style={{border: 'none', padding: 0}}>
     <i className="fas fa-check-circle text-center icon-success"></i> 
        <h3 className="text-center pt-3 pb-3">Solicitud de recuperación de clave exitosa!</h3>
        <p className="text-secondary text-center pt-2 pb-5 px-md-5">{message}</p>
        <span onClick={toggle} className="text-center w-50 m-auto"><a onClick={handleClick} type="button" className="btn btn-lg btn-primary rounded-pill text-white">OK</a></span>
     </div>
   </div>
  </Modal>
</Fragment>
    )
}

export default ModalPWDSuccess
