import React,{ useContext, useState} from 'react'
import { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import {  Modal} from 'reactstrap';
import { CartContext } from '../../../context/CarritoContext';
import { ContextProducts } from '../../../context/ProductContext';
import { ContextUser } from '../../../context/UserContext';


function ModalLogout(props) {
const {classText} =props
   const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal);
    let history = useHistory()

    const {logout} = useContext(ContextUser)
    const {clearCart, logoutCarrito} = useContext(CartContext)
    const {setIdSucursalCompra} = useContext(ContextProducts)

   
    
    function handleAceptar () {
      logout()
      logoutCarrito()
      clearCart()
      setIdSucursalCompra(0)
      history.push('/')
      toggle()
    }

    function handleQuedarse(){
        toggle()
    }

   
    return (
        <Fragment> 
            <a    href='#home-start'
                  role="button"
                  className={classText}
                  onClick={toggle}>
                  {props.children}
            </a>
    <Modal isOpen={modal} toggle={toggle} className=" col-sm px-0" onClick={handleQuedarse}>
     <div className="modal-dialog modal-dialog-centered ">
     <div className="modal-content p-5 text-center" style={{border: 'none', padding: 0}}>
        <i className="fas fa-exclamation-triangle alerta-comercio-casa"></i>
        <h3 className="text-center pt-3 pb-3">ATENCIÓN</h3>

        <p className="text-secondary text-center pt-2 pb-5 px-md-5">¿Desea cerrar la sesión?</p>
        <div className="flex-row">
        <span onClick={toggle} className="text-center w-50 m-auto "><button  onClick={handleQuedarse} type="button" className="btn btn-lg btn-primary rounded-pill text-white mx-2"><b>Quedarse</b></button></span>
        <span onClick={toggle} className="text-center w-50 m-auto"><button  onClick={handleAceptar} type="button" className="btn btn-lg btn-primary rounded-pill text-white mx-2"><b>Cerrar</b></button></span>
        </div>
     </div>
   </div>
  </Modal>
</Fragment>
    )
}

export default ModalLogout
