import { Field,  Form, Formik } from 'formik';
import React, { useContext, useEffect, useState} from 'react';
import { Fragment } from 'react';
import {  Modal, ModalBody} from 'reactstrap';
import * as Yup from 'yup'
import { logobimbo } from '../../../assets/img';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { urlChangePWD } from '../../../settings/requestSettings';
import RegistroControl from '../../../pages/registro/RegistroControl';
import { dayOptions, monthOptions, yearOptions } from '../../../pages/registro/Options';
import { ContextUser } from '../../../context/UserContext';



function ModalForgottenPassword(props) {

  const { className, toggleLogin} = props
 const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal);
  const {showModalPWDSuccess} = useContext(ContextUser)
    

  const [errorMessage, setErrorMessage] = useState({err: false, message: ''})
  const {err, message} = errorMessage

  const onSubmit = values => {
   
      const configRequest = {
        email: values.email,
        dob: new Date(values.nacimiento.año,values.nacimiento.mes,values.nacimiento.dia).toISOString(),
        dob_d: values.nacimiento.dia,
        dob_m: values.nacimiento.mes,
        dob_y: values.nacimiento.año,
        APP_ConfigurationID: "2033",
        Platform: "browser"
      }

       axios.post(urlChangePWD,configRequest)
                                        .then(response => {
                    
                                            setErrorMessage({err: false, message: ''})
                                            toggle()
                                            toggleLogin()
                                            let message = response.data.message
                                            showModalPWDSuccess(message)
                                        })
                                        .catch(error => {
                                          let errorMessage = 'Ooops algo salio mal';
                                          if (error.response !== undefined && error.response.data !== undefined ){
                                            if (error.response.data.Message !== undefined){
                                             errorMessage = error.response.data.Message;
                                             
                                            }
                                          }
                                         setErrorMessage({err: true, message: errorMessage})
                                        })
  }
  useEffect(() => {
    if(err){
      setTimeout(()=> {
        setErrorMessage({err: false, message: ''})
      }, 3000)
    }
  }, [err])


  const initialValues = {
    email: '',
     nacimiento: {
      dia: '',
      mes: '',
      año: ''
    },
    
  }
  const validationSchema = Yup.object({
    email: Yup.string().email('Ingrese un email valido').required('Campo requerido'),
    nacimiento: Yup.object({dia: Yup.number().required('Campo requerido'),
    mes: Yup.number().required('Campo requerido'),
    año:Yup.number().required('Campo requerido')}).required('Debe ingresar fecha de nacimiento'),  
  })

    return (
        <Fragment>
            <a    className={props.class}
                  role="button"
                  onClick={toggle}>
                  {props.children}
                            
            </a>
        <Modal isOpen={modal} toggle={toggle}  className={className}>
		    	<ModalBody>

          <Formik initialValues={initialValues}
                  onSubmit={onSubmit}
                  validationSchema={validationSchema}>
                {({errors,
                 touched,
                  })=> (
   
    <div className=" modal-dialog  modal-login modal-dialog-centered" style={{}}>
		<div className="modal-content no-border">
			<div className="modal-header align-content-center">				
				<img src={logobimbo} className="img-fluid mx-auto d-block " alt="..."/>
				{/* <!-- <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button> --> */}
			</div>
			<div className="modal-body mx-4 no-border">
        <h3 className="text-center pt-3 pb-3">Recuperar contraseña</h3>

         <Form className="needs-validation no-border" noValidate>
          <div className="form-group">

            <label htmlFor="email">Email</label>
            <Field type="email" className="form-control" name='email' id="password" aria-describedby="emailHelp" placeholder="Ingresá tu Email" required/>
          </div>
          <div className="form-group">
                      
          <label htmlFor="nacimiento">Fecha de nacimiento</label>
                        {/* <div className="form-row"> */}
                <div className="row">
                <RegistroControl control='select'
                                         name='nacimiento.dia'
                                         classContainer='col-md-4 mb-3'
                                         classSelect='form-control custom-select'
                                         options={dayOptions}/>

                        <RegistroControl control='select'
                                         name='nacimiento.mes'
                                         classContainer='col-md-4 mb-3'
                                         classSelect='form-control custom-select'
                                         options={monthOptions}/>

                        <RegistroControl control='select'
                                         name='nacimiento.año'
                                         classContainer='col-md-4 mb-3'
                                         classSelect='form-control custom-select'
                                         options={yearOptions}/>
                </div>
                       
          </div>
          {err && <p className='text-danger'>{message}</p>}
        
          <div className="col text-center">
          <button  type="submit" className="btn btn-primary rounded-pill px-5 py-2 mt-3">RECUPERAR CONTRASEÑA</button>
      </div>
      </Form>
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

export default ModalForgottenPassword
