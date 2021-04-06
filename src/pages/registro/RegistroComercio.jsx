import React, { useContext } from 'react'
import { Fragment } from 'react'
import {Formik , Form, Field, ErrorMessage} from 'formik'
import Titulo from '../../components/titulo/Titulo'
import RegistroControl from './RegistroControl'
import './registro.css'
import { condicionIva, dayOptions, initialValues, monthOptions, yearOptions } from './Options'
import * as Yup from 'yup'
import ErrorText from './elements/ErrorText'
import { ContextUser } from '../../context/UserContext'
import RegistroSuccess from '../../components/modals/success/RegistroSuccess'
import axios from 'axios'
import { urlRegistro } from '../../settings/requestSettings'
import ModalRegistroFail from '../../components/modals/fail/ModalRegistroFail'
import LoginModal from '../../components/modals/login/LoginModal'
import ModalTerminos from '../../components/modals/terminos/Terminos'
import LoginComercio from '../../components/modals/login/LoginComercio'





function RegistroComercio() {

    const {setModalRegistroSuccess, 
           setModalRegistroFail, 
           setRegistroErrorMessage} = useContext(ContextUser)


    const validationSchema = Yup.object().shape({
        usuario: Yup.object().shape({nombre: Yup.string('').min(2,'Nombre debe tener al menos dos letras' ).required('Campo requerido'), apellido: Yup.string().min(2,'Apellido debe tener al menos dos letras').typeError('al menos dos letrs').required('Campo requerido')}), 
        dni: Yup.number().min(5, 'La cantidad de digitos debe ser mayor').typeError('Ha ingresado un caracter invalido').positive().integer().required('Campo requerido'),
        email: Yup.string().email('Ingrese un email valido').required('Campo requerido'),
        phone: Yup.number().typeError('Ha ingresado un carácter incorrecto').positive().integer().required('Campo requerido'),
        password: Yup.string().min(6, 'Contraseña debe tener al menos 6 caracteres').typeError('Al menos 6 caracteres').required('Campo requerido'),
        passwordConfirm: Yup.string().oneOf([Yup.ref('password'),''],'Las contraseñas no coinciden').required('Campo requerido'),
        nacimiento: Yup.object({dia: Yup.number().required('Campo requerido'),
                                mes: Yup.number().required('Campo requerido'),
                                año:Yup.number().required('Campo requerido')}).required('Debe ingresar fecha de nacimiento'),  

        terminos: Yup.boolean().oneOf([true], 'Debe aceptar los terminos y condiciones').required('Debe aceptar los terminos y condiciones'),
        condicionIva: Yup.number().typeError('Caracter invalido').required('Campo requerido'),
        cuit: Yup.number().typeError('Ha ingresado un caracter invalido').required('Campo requerido'),
        razonSocial: Yup.string().required('Campo requerido'),
        createdOn: Yup.date().default(new Date()) 
    })

const onSubmit =( values, resetForm )=> {

const registroConfig = { 
  email: values.email,
  password: values.password,
  passwordValidation: values.passwordConfirm,
  name: values.usuario.nombre,
  lastname: values.usuario.apellido,
  dni: values.dni,
  dob: new Date(values.nacimiento.año,values.nacimiento.mes,values.nacimiento.dia).toISOString(),
  dob_d: values.nacimiento.dia,
  dob_m: values.nacimiento.mes,
  dob_y: values.nacimiento.año,
  cellphone: values.phone,
  IdSucursalRegistro: 0,
  IdEmpresaRegistro: 0,
  acepta: values.terminos,
  isComercio: true,
  cuit: values.cuit,
  gender: "o",
  razonSocial: values.razonSocial,
  idCondicionIva: values.condicionIva,
  MobileMonomarca: false,
  APP_ConfigurationID: "20033",
  Fecha: new Date().toISOString(),
  AppVersion: "1.0.0,1.0.0",
  IdSucursal: 1,
  Platform: "Browser",
  }

  axios.post(urlRegistro, registroConfig)
                                          .then(response => {
                                            
                                              if(response.data.isSuccess === true){
                                                setModalRegistroSuccess(true)
                                                resetForm()
                                              }
                                              else {
                                                setRegistroErrorMessage(response.data.message)
                                                setModalRegistroFail(true)
                                              }
                                          })
                                           .catch(error => {
                                            console.log('error-registro',error)
                                            setModalRegistroFail(true)
                                            
                                           }) 
    }

   
    return (
    <Fragment>
        <Titulo text="Crear una cuenta"/>

        <Formik initialValues={initialValues}
                onSubmit={((values, {resetForm}) => {
                    onSubmit(values, resetForm)
                   
                }
                )}
                validationSchema={validationSchema}>
        {({errors,
         touched,
        isValid: isvalid,
         values})=> (

        
        <div className="container py-5">
            <div className="row justify-content-md-center aos-init aos-animate" 
                 data-aos="zoom-in" 
                 data-aos-dela="150">
             <div className="col-md-10 px-3">

            <LoginComercio>
              <p className="text-right text-primary text-link font-weight-bold">Ya tengo una cuenta </p>
            </LoginComercio>

            <Form className="registro needs-validation" noValidate >
                <div className="bg-white p-3 mb-3 rounded">
                    
                    {/*  <!-- NOMBRE - APELLIDO - DNI --> */}
                    <div className="form-row px-3">
                        <RegistroControl control='input' 
                                         type='text'
                                         label='Nombre'
                                         name='usuario.nombre'
                                         classContainer='col-md-5 mb-5 mt-3 mr-2'
                                         classInput='form-control'
                                         placeholder='Tu nombre...'/>

                        <RegistroControl control='input' 
                                         type='text'
                                         label='Apellido'
                                         name='usuario.apellido'
                                         classContainer='col-md-5 mb-5 mt-3 mr-2'
                                         classInput='form-control'
                                         placeholder='Tu apellido...'/>

                        <RegistroControl control='input' 
                                         type='text'
                                         label='DNI'
                                         name='dni'
                                         classContainer='col-md mb-5 mt-3'
                                         classInput='form-control'
                                         placeholder='Tu dni...'
                                         isValid={touched.dni && !errors.dni}/>
                    </div>

                    <div className="form-row px-3">
                      <div className="col-md-5 mb-3">
                        <label htmlFor="nacimiento">Fecha de nacimiento</label>
                        <div className="form-row">
                        <RegistroControl control='select'
                                         name='nacimiento.dia'
                                         classContainer='col-md-3 mb-3'
                                         classSelect='form-control custom-select'
                                         options={dayOptions}/>

                        <RegistroControl control='select'
                                         name='nacimiento.mes'
                                         classContainer='col-md-5 mb-3'
                                         classSelect='form-control custom-select'
                                         options={monthOptions}/>

                        <RegistroControl control='select'
                                         name='nacimiento.año'
                                         classContainer='col-md-4 mb-3'
                                         classSelect='form-control custom-select'
                                         options={yearOptions}/>

                        </div>
                       </div>
                       <div className="col-md-5 mb-3 ml-3">
                       <div className="col-md-12 mb-3">
                    <label htmlFor="phone">Celular</label>
                    <div className="input-group-prepend">
                        <span className="input-group-text " id="zona">+54 9</span>
                        <Field type="text" 
                               className="form-control w-100" 
                               id="phone" 
                               name="phone"
                               placeholder='Tu telefono...'
                               isValid={touched.phone && !errors.phone}
                               required/>
                    </div>
                    <ErrorMessage name='phone' component={ErrorText}/>

                </div>
  
                    </div>
                </div>
                <div className="form-row px-3 mt-3">
      
               </div>
             
              <div className="form-row px-3 mt-3 ">
               <RegistroControl control='input' 
                                         type='text'
                                         label='Razón social'
                                         name='razonSocial'
                                         classContainer='col-md mb-5 mt-3'
                                         classInput='form-control'
                                         placeholder=''
                                         isValid={touched.razonSocial && !errors.razonSocial}/>
                 <RegistroControl control='input' 
                                         type='text'
                                         label='Cuit'
                                         name='cuit'
                                         classContainer='col-md mb-5 mt-3'
                                         classInput='form-control'
                                         placeholder=''
                                         isValid={touched.cuit && !errors.cuit}/>
                <div className="col-md-5 mt-3">
                  <label htmlFor="condicionIva">Condición IVA</label>
                 <RegistroControl control='select' 
                                         type='text'
                                         label='Condicion Iva'
                                         name='condicionIva'
                                         classContainer=''
                                         classSelect='form-control custom-select '
                                         options={condicionIva}
                                         placeholder=''
                                         isValid={touched.condicionIva && !errors.condicionIva}/>
                  </div>
               </div>
            </div>
            <div className="form-bottom p-3 mb-5">
                <div className="form-row px-3 mt-3">
                     <RegistroControl  control='input' 
                                         type='email'
                                         label='Email'
                                         name='email'
                                         classContainer='col-md-5'
                                         classInput='form-control'
                                         />

                </div>
                <div className="form-row px-3 mt-3 mb-3">
                <RegistroControl control='input' 
                                         type='password'
                                         label='Contraseña'
                                         name='password'
                                         classContainer='col-md-5 mr-3'
                                         classInput='form-control'
                                         />
                <RegistroControl control='input' 
                                         type='password'
                                         label='Repetir contraseña'
                                         name='passwordConfirm'
                                         classContainer='col-md-5'
                                         classInput='form-control'
                                         />

                </div>

            </div>
            <div className="row">
                <div className="col-6 pt-2">
                  <div className="row">
                    
                  </div>
                    <Field className="form-check-input" type="checkbox" id="terminos" name="terminos" required/>
                    <ModalTerminos>
                     <label className="form-check-label " htmlFor="terminos">Acepto los <a className="text-link text-primary font-weight-bold" >Términos y condiciones</a></label>
                     </ModalTerminos>
                </div>
                <div className="col-6 text-right"> 
                <button disabled={!isvalid} 
                        className="btn btn-primary rounded-pill  px-4 py-2" 
                        type="submit"  
                        id="ingresar"
                     
                      >
                          REGISTRAR
                    <i className="fas fa-arrow-right ml-3"></i> 
               </button>
                </div>
            </div>
            </Form >
            <RegistroSuccess/>
            <ModalRegistroFail/>
            <LoginModal/>
            </div>
          </div>
        </div>
        )}
        </Formik>
    </Fragment>
    )
}

export default RegistroComercio
