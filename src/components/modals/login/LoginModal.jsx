import { Field,  Form, Formik } from 'formik';
import React, { useContext, useState} from 'react';
import { Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {  Modal, ModalBody} from 'reactstrap';
import * as Yup from 'yup'
import { logobimbo } from '../../../assets/img';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'
import axios from 'axios';
import { urlLogin } from '../../../settings/requestSettings';
import { ContextUser } from '../../../context/UserContext';
import { ContextProducts } from '../../../context/ProductContext';
import { CartContext } from '../../../context/CarritoContext';



function LoginModal(props) {

  const { className} = props
 const {modalLogin, setModalLogin} = useContext(ContextUser)
 const [errorMessage, setErrorMessage] = useState(null)
  const toggle = () => setModalLogin(!modalLogin);
   
  const { setStateLog} = useContext(ContextUser)
  const { setUserCarrito} = useContext(CartContext)
  const {setIdSucursalCompra} = useContext(ContextProducts)
  const history = useHistory()

  const onSubmit = values => {

      const configRequest = {
        code: values.email,
        pwd: values.password,
        APP_ConfigurationID: "2033",
        Platform: "browser"
      }
   

      axios.post(urlLogin,configRequest)
                                       .then(response => {
                                       
                                        toggle()
                                        history.push('/')
                                        let IdSucursal = response.data.IdSucursalCompra
                                        let IdMinorista = parseInt(response.data.ParametrosSistema.find(item => item.Id === 60).Valor)
                                        if(IdSucursal === IdMinorista){
                                          setUserCarrito({user: response.data,
                                            logged: true,
                                            casa: false,
                                            comercio: true,
                                            idSucursalCompra: IdSucursal})
                                            setIdSucursalCompra(IdSucursal)
                                         setStateLog({user: response.data,
                                                      logged: true,
                                                      casa: false,
                                                      comercio: true,
                                                      idSucursalCompra: IdSucursal})
                                          setIdSucursalCompra(IdSucursal)
                                          }
                                        else {
                                          setUserCarrito({user: response.data,
                                            logged: true,
                                            casa: true,
                                            comercio: false,
                                            idSucursalCompra: IdSucursal})
                                          setStateLog({user: response.data,
                                            logged: true,
                                            casa: true,
                                            comercio: false,
                                            idSucursalCompra: IdSucursal})
                                          setIdSucursalCompra(IdSucursal)
                                        }
                                         })
                                       .catch(error =>{console.log(error); setErrorMessage(true)})
                                         
    
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
                  onClick={toggle}>
                  {props.children}
                            
            </a>
        <Modal isOpen={modalLogin} toggle={toggle}  className={className}>
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
				<img src={logobimbo} className="img-fluid mx-auto d-block " alt="..."/>
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
            <Field type="password" name='password' className="form-control" id="password" placeholder="Ingresà tu contaseña" required/>
            <div className="col text-right px-0 mt-1 pass-recovery">  
              <a href="#">Olvidé mi contraseña</a>
          </div>
          {errorMessage && <p className='text-danger'>Usuario o contraseña invalidos. Intente de nuevo</p>}
          </div>
          <div className="col text-center">
          <button  disabled={!isvalid} type="submit" className="btn btn-primary rounded-pill px-5 py-2 mt-3">INGRESAR</button>
      </div>
      </Form>
      
				
                <div className="col mt-4 mb-2">
                      <p className="text-center">No tengo una cuenta 
                      <Link to='/registro' 
                            type='submit' 
                            className='text-primary font-weight-bold'
                            onClick={toggle}>  Registrarme</Link>
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

export default LoginModal