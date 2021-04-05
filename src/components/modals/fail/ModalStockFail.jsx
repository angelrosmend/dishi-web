import React,{useContext} from 'react'
import { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { Modal} from 'reactstrap';
import { CartContext } from '../../../context/CarritoContext';
import '../Modals.css'

function ModalStockFail() {
    const {modalFailStock, setModalFailStock} = useContext(CartContext)
    const {show, message} = modalFailStock

    const toggle = () => setModalFailStock(!show);

    const history = useHistory()

    function handleClick () {
      toggle()
      history.push('/checkout-1-carrito')
    }

   
    return (
        <Fragment> 
    <Modal isOpen={show} toggle={toggle} className=" col-sm px-0" onClick={handleClick}>
     <div className="modal-dialog modal-dialog-centered ">
     <div className="modal-content p-5 text-center" style={{border: 'none', padding: 0}}>
         <i className="fas fa-times-circle compra-fail"></i>
        <h1 className="text-center pt-3 pb-3">No hay stock</h1>
        <p className="text-secondary text-center pt-2 pb-5 px-md-5">{message}</p>
        <span onClick={toggle} className="text-center w-50 m-auto"><a onClick={handleClick} type="button" className="btn btn-lg btn-primary rounded-pill text-white">OK</a></span>
     </div>
   </div>
  </Modal>
</Fragment>
    )
}

export default ModalStockFail
