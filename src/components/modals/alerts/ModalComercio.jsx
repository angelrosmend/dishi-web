import React,{ useState} from 'react'
import { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import {  Modal} from 'reactstrap';


function ModalAlertComercio(props) {

   const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal);
    let history = useHistory()
   
    
    function handleClick () {
      history.push('/')
      toggle()
    }

   
    return (
        <Fragment> 
            <a
                  role="button"
                  onClick={toggle}>
                  {props.children}
            </a>
    <Modal isOpen={modal} toggle={toggle} className=" col-sm px-0" onClick={handleClick}>
     <div className="modal-dialog modal-dialog-centered ">
     <div className="modal-content p-5 text-center" style={{border: 'none', padding: 0}}>
        <i className="fas fa-exclamation-triangle alerta-comercio-casa"></i>
        <h3 className="text-center pt-3 pb-3">Acceso exclusivo para comerciantes</h3>
        <p className="text-secondary text-center pt-2 pb-5 px-md-5"></p>
        <span onClick={toggle} className="text-center w-50 m-auto"><button  onClick={handleClick} type="button" className="btn btn-lg btn-primary rounded-pill text-white"><b>OK</b></button></span>
     </div>
   </div>
  </Modal>
</Fragment>
    )
}

export default ModalAlertComercio
