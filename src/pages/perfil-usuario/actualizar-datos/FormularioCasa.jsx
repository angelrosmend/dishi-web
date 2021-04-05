import React, { useContext } from 'react'
import { Fragment } from 'react'
import { ContextUser } from '../../../context/UserContext'
import Subtitulo from '../../home/Subtitulo/Subtitulo'
import {Formik , Form, Field, ErrorMessage} from 'formik'
import RegistroControl from '../../registro/RegistroControl'
import ErrorText from '../../registro/elements/ErrorText'
import {  dayOptions, monthOptions, yearOptions } from '../../registro/Options'
import * as Yup from 'yup'
import axios from 'axios'
import { urlActualizarDatosUsuarioRegister, urlActualizarDatosUsuarioUpdate } from '../../../settings/requestSettings'
import { getFechaNacimientoObj } from '../../../helpers/fechas'
import ModalUpdateSuccess from '../../../components/modals/success/ModalUpdateUserSuccess'
import ModalUpdateFail from '../../../components/modals/fail/ModalUpdateFail'



function FormularioCasa (){

    const {user, setModalUpdateSuccess,
      setModalUpdateFail,
      setUpdateErrorMessage} = useContext(ContextUser)

    const User = user && user
    const Nombre = User.Nombre
    const Apellido = User.Apellido
    const DNI = User.DNI
    const Email = User.Email
    const Telf = User.Celular
    const Nacimiento = getFechaNacimientoObj(User.FechaNacimiento)
    const {day, month, year} =  Nacimiento
    const CondicionIva = User.Usuario.IdCondicionIva
    const Cuit = User.Usuario.Cuit
    const RazonSocial = User.Usuario.RazonSocial
    const changePWD = User.CambiarPwd
    const url =  changePWD ? urlActualizarDatosUsuarioUpdate : urlActualizarDatosUsuarioRegister 
 

    const initialValues = {
        usuario: {
          nombre: Nombre,
          apellido: Apellido
        },
        email: Email,
        password: '',
        dni: DNI,
        nacimiento: {
          dia: day,
          mes: month,
          año: year
        },
        phone: Telf,
        cuit: Cuit,
        razonSocial: RazonSocial,
        condicionIva: CondicionIva}

        const onSubmit =( values )=> {
           
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

            
            
              axios.post(url, registroConfig)
                                                      .then(response => {
                                                        console.log('registro',response, response.config, registroConfig)
                                                          if(response.data.isSuccess === true){
                                                            setModalUpdateSuccess(true)
                                                            user.Nombre = values.usuario.nombre
                                                            user.Apellido = values.usuario.apellido
                                                            user.Usuario.NombreCompleto = `${values.usuario.nombre} ${values.usuario.apellido}`
                                                            user.Celular = values.phone
                                                            user.FechaNacimiento = new Date(values.nacimiento.año, values.nacimiento.mes, values.nacimiento.dia).toISOString()
                                                            console.log(response)


                                                          }
                                                          else {
                                                            setUpdateErrorMessage(response.data.message)
                                                            setModalUpdateFail(true)
                                                            console.log(response)
                                                          }
                                                      })
                                                       .catch(error => {
                                                        console.log('error-registro',error)
                                                        setModalUpdateFail(true)
                                                        
                                                       }) 
                     
                }
    

    const validationSchema = Yup.object().shape({
        usuario: Yup.object().shape({nombre: Yup.string('').min(2,'Nombre debe tener al menos dos letras' ), apellido: Yup.string().min(2,'Apellido debe tener al menos dos letras').typeError('al menos dos letrs')}), 
        dni: Yup.number().min(5, 'La cantidad de digitos debe ser mayor').typeError('Ha ingresado un caracter invalido').positive().integer(),
        email: Yup.string().email('Ingrese un email valido'),
        phone: Yup.number().typeError('Ha ingresado un carácter incorrecto').positive().integer(),
        password: Yup.string().min(6, 'Contraseña debe tener al menos 6 caracteres').typeError('Al menos 6 caracteres'),
        passwordConfirm: Yup.string().oneOf([Yup.ref('password'),''],'Las contraseñas no coinciden'),
        nacimiento: Yup.object({dia: Yup.number(),
                                mes: Yup.number(),
                                año:Yup.number()}).required('Debe ingresar fecha de nacimiento'),
    })
    return(
        <Fragment>
            <Subtitulo text='Actualizar datos'/>
            <div className='container-info-inner'>
            <Formik initialValues={initialValues}
                onSubmit={((values) => {
                    onSubmit(values)
                }
                )}
                validationSchema={validationSchema}>
        {({errors,
         touched})=> (

        
        <div className="container py-5">
            <div className="row justify-content-md-center aos-init aos-animate" 
                 data-aos="zoom-in" 
                 data-aos-dela="150">
             <div className="col-md-10 px-3">

            <Form className="registro needs-validation" noValidate >
                <div className="bg-white p-3 mb-3 rounded">
                    
                    {/*  <!-- NOMBRE - APELLIDO - DNI --> */}
                    <div className="form-row px-3">
                        <RegistroControl control='input' 
                                         type='text'
                                         label='Nombre'
                                         name='usuario.nombre'
                                         classContainer='col-md-4 mb-5 mt-3 mr-2'
                                         classInput='form-control'
                                         placeholder='Tu nombre...'/>

                        <RegistroControl control='input' 
                                         type='text'
                                         label='Apellido'
                                         name='usuario.apellido'
                                         classContainer='col-md-4 mb-5 mt-3 mr-2'
                                         classInput='form-control'
                                         placeholder='Tu apellido...'/>

                        <RegistroControl control='input' 
                                         type='text'
                                         label='DNI'
                                         name='dni'
                                         classContainer='col-md mb-5 mt-3'
                                         classInput='form-control'
                                         placeholder='Tu dni...'
                                         isvalid={touched.dni && !errors.dni}
                                         readOnly={changePWD ? false : true}/>
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
                               isvalid={touched.phone && !errors.phone}
                               required/>
                    </div>
                    <ErrorMessage name='phone' component={ErrorText}/>

                </div>
  
                    </div>
                </div>
                <div className="form-row px-3 mt-3">
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
                                         readOnly={changePWD ? false : true}
                                         
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
                  {/* <div className="row">
                    
                  </div>
                    <Field className="form-check-input" type="checkbox" id="terminos" name="terminos" required/>
                    <ModalTerminos>
                     <label className="form-check-label " htmlFor="terminos">Acepto los <a className="text-link text-primary font-weight-bold" >Términos y condiciones</a></label>
                     </ModalTerminos> */}
                </div>
                <div className="col-6 text-right">
                <button  
                        className="btn btn-primary rounded-pill  px-4 py-2" 
                        type="submit"  
                        id="ingresar"
                     
                      >ACTUALIZAR
                    <i className="fas fa-arrow-right ml-3"></i> 
               </button>
                </div>
            </div>
            </Form >
            <ModalUpdateSuccess/>
            <ModalUpdateFail/>
            </div>
          </div>
        </div>
        )}
        </Formik>

            
            </div>
        </Fragment>
    )

}
export default FormularioCasa