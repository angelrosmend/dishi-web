import React,{useContext, useState} from 'react'
import { Fragment } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {  Modal} from 'reactstrap';
import { CartContext } from '../../../context/CarritoContext';


function ModalCompraSuccess() {

    const {modalSuccess, setModalSuccess} = useContext(CartContext)
    const toggle = () => setModalSuccess(!modalSuccess);
    let history = useHistory()
    const {clearCart} = useContext(CartContext)
    
    function handleClick () {
      clearCart()
      history.push('/')
      toggle()
    }

   
    return (
        <Fragment> 
    <Modal isOpen={modalSuccess} toggle={toggle} className=" col-sm px-0" onClick={handleClick}>
     <div className="modal-dialog modal-dialog-centered ">
     <div className="modal-content p-5 text-center" style={{border: 'none', padding: 0}}>
        <i className="fas fa-check-circle text-center icon-success"></i>
        <h1 className="text-center pt-3 pb-3">Pedido Realizado</h1>
        <p className="text-secondary text-center pt-2 pb-5 px-md-5">Recibirás un e-mail con el resumen de tu compra</p>
        <span onClick={toggle} className="text-center w-50 m-auto"><a onClick={handleClick} type="button" className="btn btn-lg btn-primary rounded-pill text-white"><b>OK</b></a></span>
     </div>
   </div>
  </Modal>
</Fragment>
    )
}

export default ModalCompraSuccess
