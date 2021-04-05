import React,{useContext} from 'react'
import { Fragment } from 'react'
import { Modal} from 'reactstrap';
import { ContextUser } from '../../../context/UserContext';
import '../Modals.css'

function ModalRegistroFail() {
    const {  modalUpdateFail, setModalUpdateFail,
      updateErrorMessage} = useContext(ContextUser)
    const toggle = () => setModalUpdateFail(!modalUpdateFail);

    function handleClick () {
      toggle()
    }

    return (
        <Fragment> 
    <Modal isOpen={modalUpdateFail} toggle={toggle} className=" col-sm px-0" onClick={handleClick}>
     <div className="modal-dialog modal-dialog-centered ">
     <div className="modal-content p-5 text-center" style={{border: 'none', padding: 0}}>
         <i className="fas fa-times-circle compra-fail"></i>
        <h3 className="text-center pt-3 pb-3">{updateErrorMessage}</h3>
        <span onClick={toggle} className="text-center w-50 m-auto"><a onClick={handleClick} type="button" className="btn btn-lg btn-primary rounded-pill text-white">OK</a></span>
     </div>
   </div>
  </Modal>
</Fragment>
    )
}

export default ModalRegistroFail
