import { Field,  Form, Formik } from 'formik';
import React, { useContext, useState} from 'react';
import { Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {  Modal, ModalBody} from 'reactstrap';
import * as Yup from 'yup'
import {  logoLogin } from '../../../assets/img';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'
import axios from 'axios';
import { urlLogin } from '../../../settings/requestSettings';
import { ContextUser } from '../../../context/UserContext';
import { ContextProducts } from '../../../context/ProductContext';
import { CartContext } from '../../../context/CarritoContext';
import ModalForgottenPassword from '../password/ModalForgottenPassword';



function LoginComercio(props) {

  const { className} = props
  const [modalLoginComercio, setModalLoginComercio] = useState(false)
  const toggleMCR = () => setModalLoginComercio(!modalLoginComercio);
   
  const { setStateLog} = useContext(ContextUser)
 
  const {setIdSucursalCompra} = useContext(ContextProducts)
  const {setUserCarrito, cartItems} = useContext(CartContext)

  const history = useHistory()

  const [errorMessage, setErrorMessage] = useState({err: false, message: ''})
  const {err, message} = errorMessage
  

  const onSubmit = values => {
      const configRequest = {
        code: values.email,
        pwd: values.password,
        APP_ConfigurationID: "2033",
        Platform: "browser"
      }
    
      axios.post(urlLogin,configRequest)
                                       .then(response => {
                                        let userName = response.data.Nombre
                                        let changePWD = response.data.CambiarPwd
                                        let IdSucursal = response.data.IdSucursalCompra
                                        let IdMinorista = parseInt(response.data.ParametrosSistema.find(item => item.Id === 60).Valor)
                                        if(IdSucursal === IdMinorista){
                                          setUserCarrito({user: response.data,
                                            logged: true,
                                            casa: false,
                                            comercio: true,
                                            idSucursalCompra: IdSucursal})
                                            setUserCarrito(response.data)
                                            setStateLog({user: response.data,
                                                      logged: true,
                                                      casa: false,
                                                      comercio: true,
                                                      idSucursalCompra: IdSucursal})
                                          setIdSucursalCompra(IdSucursal)
                                          toggleMCR()
                                          if(changePWD){
                                            history.push(`/perfil/${userName}/actualizar-datos`)
                                          }
                                          if(cartItems.length > 0){
                                            history.push('/checkout-1-carrito')
                                          }
                                          }
                                        else {
                                          setErrorMessage({err: true, message: 'Usuario inválido. Acceso exclusivo para comerciantes'})
                                        }
                                         })
                                       .catch(error => {
                                        setUserCarrito({user: '',
                                          logged: false,
                                          casa: null,
                                          comercio: null,
                                          idSucursalCompra: 835})
                                          console.log(error);
                                          setErrorMessage({err: true, message: 'Usuario o contraseña invalidos. Intente de nuevo'})})
                                         
    
  }


  const initialValues = {
    email: '',
    password: ''
  }
  const validationSchema = Yup.object({
    email: Yup.string().email('').required(''),
    password: Yup.string().required('')
  })

    return (
        <Fragment>
            <a    className={props.class}
                  role="button"
                  onClick={toggleMCR}>
                  {props.children}
                            
            </a>
        <Modal isOpen={modalLoginComercio} toggle={toggleMCR}  className={className}>
		    	<ModalBody>

          <Formik initialValues={initialValues}
                  onSubmit={onSubmit}
                  validationSchema={validationSchema}>
                {({errors,
                 touched,
                  isValid: isvalid})=> (
   
    <div className=" modal-dialog  modal-login modal-dialog-centered" style={{}}>
		<div className="modal-content no-border">
			<div className="modal-header align-content-center">				
				<img src={logoLogin} className="img-fluid mx-auto d-block " alt="..."/>
				{/* <!-- <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button> --> */}
			</div>
			<div className="modal-body mx-4 no-border">

     
         <Form className="needs-validation no-border" noValidate>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field type="email" className="form-control" name='email' id="password" aria-describedby="emailHelp" placeholder="Ingresá tu Email" required/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <Field type="password" name='password' className="form-control" id="password" placeholder="Ingresá tu contaseña" required/>
            <div //onClick={()=> setModalLoginComercio(false)}
                className="col text-right px-0 mt-1 pass-recovery">
              <ModalForgottenPassword toggleLogin={toggleMCR}>
                Olvidé mi contraseña
              </ModalForgottenPassword>
          </div>
         {err && <p className='text-danger'>{message}</p>}
          </div>
          <div className="col text-center">
          <button  disabled={!isvalid} type="submit" className="btn btn-primary rounded-pill px-5 py-2 mt-3">INGRESAR</button>
      </div>
      </Form>
      
				
                <div className="col mt-4 mb-2">
                      <p className="text-center p-2">No tengo una cuenta 
                      <Link to='/registroComercio' 
                            type='submit' 
                            className='text-primary font-weight-bold mx-1 p-2'
                            onClick={toggleMCR}
                            >  Registrarme</Link>
                      </p>
                </div>
              </div>
		      	</div>
	      	</div>
          )}
        </Formik>
       </ModalBody>
      </Modal>
     </Fragment>
  )
}

export default LoginComercio
