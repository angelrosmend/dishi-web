import React,{ useContext} from 'react'
import { Fragment } from 'react'
import {  Modal} from 'reactstrap';
import { CartContext } from '../../../context/CarritoContext';


function ModalRemover(props) {
   const {classText} =props
  
   const {modalRemover, setModalRemover,  removeFromCartEnCarrito, itemToRemove, setItemRemove} = useContext(CartContext)

   const toggle = () => setModalRemover(!modalRemover);
   
   
  function handleRemover (product) {

      removeFromCartEnCarrito(product)
      toggle()
      setItemRemove({})
  }

  function handleCancelar(){
        toggle()
    }

   
    return (
        <Fragment> 
            <a    href='#'
                  role="button"
                  className={classText}
                  onClick={toggle}>
                  {props.children}
            </a>
    <Modal isOpen={modalRemover} toggle={toggle} className=" col-sm px-0" onClick={handleCancelar}>
     <div className="modal-dialog modal-dialog-centered ">
     <div className="modal-content p-5 text-center" style={{border: 'none', padding: 0}}>
        <i className="fas fa-exclamation-triangle alerta-comercio-casa"></i>
        <h3 className="text-center pt-3 pb-3">ATENCIÓN</h3>

        <p className="text-secondary text-center pt-2 pb-5 px-md-5">¿Estas seguro que deseas remover {itemToRemove.nombre} de tu carrito de compras?</p>
        <div className="flex-row">
        <span onClick={toggle} className="text-center w-50 m-auto "><button  onClick={handleCancelar} type="button" className="btn btn-lg btn-primary rounded-pill text-white mx-2"><b>Cancelar</b></button></span>
        <span onClick={toggle} className="text-center w-50 m-auto"><button  onClick={()=> handleRemover(itemToRemove)} type="button" className="btn btn-lg btn-primary rounded-pill text-white mx-2"><b>Remover</b></button></span>
        </div>
     </div>
   </div>
  </Modal>
</Fragment>
    )
}

export default ModalRemover
