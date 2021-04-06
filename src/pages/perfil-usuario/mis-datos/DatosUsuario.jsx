import React, { useContext } from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { ContextUser } from '../../../context/UserContext'
import { getCondicionIVA } from '../../../helpers/condicionIVA'
import { fechaNacimiento } from '../../../helpers/fechas'
import Subtitulo from '../../home/Subtitulo/Subtitulo'

function DatosUsuario() {

    const {user, comercio} = useContext(ContextUser)
    const User = user && user
    const Nombre = User.Nombre
    const Apellido = User.Apellido
    const DNI = User.DNI
    const Email = User.Email
    const Telf = User.Celular
    const Nacimiento = User.FechaNacimiento
    const CondicionIva = User.Usuario.IdCondicionIva
    const Cuit = User.Usuario.Cuit
    const RazonSocial = User.Usuario.RazonSocial

    return (

        <Fragment>
            <Subtitulo text='Mis datos'/>
            <div className="container-info-inner">
                <div className="container-mis-datos">
                    <div className="datos-user-consumidor">
                        <div className="datos-sm-column-lg-row">
                            <div className="icon-marker ">
                               <i className="fas fa-address-card"></i>
                            </div>
                            <div className="form-row info-content p-3">
                                <span className='col-sm-12 col-md-6 col-lg-4 '><label htmlFor="name">Nombre</label> <p className='cap-user'>{Nombre}</p> </span>
                                <span  className='col-sm-12 col-md-6 col-lg-4 '> <label htmlFor="lastname">Apellido</label> <p  className='cap-user'>{Apellido}</p> </span>
                                <span  className='col-sm-12 col-md-6 col-lg-4 '> <label htmlFor="dni">DNI</label> <p>{DNI}</p> </span>
                            </div>

                        </div>
                        <div className="datos-sm-column-lg-row">
                            <div className="icon-marker">
                              <i className="fas fa-address-book"></i>
                            </div>
                            <div className="form-row info-content p-3">
                                <span  className='col-sm-12 col-md-6 col-lg-4 '> <label htmlFor="lastname">Fecha de nacimiento</label> <p>{fechaNacimiento(Nacimiento)}</p> </span>
                                <span  className='col-sm-12 col-md-6 col-lg-4 '> <label htmlFor="email">Email</label> <p>{Email}</p> </span>
                                <span  className='col-sm-12 col-md-6 col-lg-4 '> <label htmlFor="phone">Telefono</label> <p>{Telf}</p> </span>
                            </div>

                        </div>
                       
                    </div>
                  { comercio && <div className="datos-user-comercio">
                      <div className="datos-sm-column-lg-row">
                          <div className="icon-marker">
                          <i className="fas fa-briefcase"></i>
                          </div>
                          <div className="form-row info-content p-3">
                            <span  className='col-sm-12 col-md-6 col-lg-4'> <label htmlFor="cuit">Cuit</label> <p>{Cuit}</p> </span>
                            <span  className='col-sm-12 col-md-6 col-lg-4 '> <label htmlFor="razonsocial">Razon Social</label> <p>{RazonSocial}</p> </span>
                            <span  className='col-sm-12 col-md-6 col-lg-4'> <label htmlFor="email">Condicion IVA</label> <p>{getCondicionIVA(CondicionIva)}</p> </span>
                          </div>
                      </div>
                    </div>}
                </div>
                <div className="edit-user" id='mis-datos'>
                       <Link to={`/perfil/${Nombre}/actualizar-datos`}>
                          <p className='text-primary'>Editar datos <i className="fas fa-edit"></i></p>
                       </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default DatosUsuario
