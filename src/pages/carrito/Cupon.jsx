import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CarritoContext'
import { ContextUser } from '../../context/UserContext'
import { urlCupon } from '../../settings/requestSettings'

function Cupon() {
  const {checked, setChecked, cupon, setCupon, porcentaje,setTipoCupon, setPorcentaje, setCuponValido, descuentoPesos, setDescuentoPesos, tipoDescuento, setTipoDescuento,
     numeroDeItems, setValidMontoEstado} = useContext(CartContext)
  const {user} = useContext(ContextUser)



 

  const [errorCupon, setErrorCupon] = useState({error: false,
                                                message: ''})
  const {error, message} = errorCupon
 
  const clear = () => {
    setChecked(false);
    setCupon('')
    setPorcentaje(null)
    setDescuentoPesos(null)
    setErrorCupon({error: false,  message: ''})
    setTipoDescuento(null)
    setValidMontoEstado(1)
  }

  
  useEffect(() => {

    if(numeroDeItems < 1){
      clear()
    }
  },[numeroDeItems])


  const handleCheckbox = (e) => {
    return checked ? clear() : setChecked(true)
  }
  const handleChange = (event) => {
    setCupon(event.target.value)
  }

  const handleSubmit = (event) =>{
    event.preventDefault();

    if(cupon === ''){
      setErrorCupon({error: true, 
                     message: 'Ha olvidado ingresar su cupon'});
      setTimeout(()=> clear(), 2000)
    }else{
    axios.post(urlCupon,  {
      Codigo: cupon,
      MobileMonoMarca: true,
      MobileUser: {
        Id: user.Id,
        Email: user.Email,
        RolId: 4
      },
      APP_ConfigurationID: "20034",
      Fecha: new Date(),
      AppVersion: "1.0.0,1.0.0",
      IdSucursal: 1,
      IdSucursalCompra: user.IdSucursalCompra,
      Platform: "Browser"
})
       .then(response => {
         console.log(response)
         if(response.data.Valor === 0 || response.data.TipoValidacionMontoMinimo === 0){
          setErrorCupon({error:true, message: 'Su código de cupon es invalido'})
          setPorcentaje(null)
          setDescuentoPesos(null)
          setValidMontoEstado(1)
          setTimeout(()=> clear(), 2000)
          setCuponValido(false)
         }
          if(response.data.Tipo === 1){
          const ammount = response.data.Valor
          setTipoDescuento(response.data.Tipo)
          setDescuentoPesos(ammount)
          setValidMontoEstado(response.data.TipoValidacionMontoMinimo)
          setCuponValido(true)
          setTipoCupon(response.data.Tipo)
          }
         if(response.data.Tipo === 2){
          const porcentaje = response.data.Valor
          setPorcentaje(porcentaje)
          setTipoDescuento(response.data.Tipo)
          setValidMontoEstado(response.data.TipoValidacionMontoMinimo)
          setTipoCupon(response.data.Tipo)
          setCuponValido(true)
         }
       }).catch(error => {
         console.log(error)
        setErrorCupon({error:true, message: 'Algo ha salido mal'})
       });  
      }             
}




    return (
      <div className="row pt-3 cupon bg-white  no-gutters">
      <form className="form-inline col-12 d-flex " onSubmit={handleSubmit}>
       <div className="col-sm-3">
       <div className="form-check mb-2 mr-sm-2 ml-md-5 custom-control custom-checkbox">
         <input className={/*  data.Valor ?  */"custom-control-input"/* : "custon-control-input-invalid" */} 
              type="checkbox" 
              id="checkCupon" 
              name="checkCupon"
              checked={checked}
              readOnly
              onClick={handleCheckbox}
              />
       <label className="custom-control-label" htmlFor="checkCupon">
         Tengo un cupón
       </label>
      </div>
       </div>
       <div className="col-sm-6">
         <div className="row">
         <input type="text" 
       className="form-control col-sm-6 mb-2 mr-sm-2" 
       disabled={!checked} 
       id="cupon" 
       name="cupon"
       onChange={handleChange}
       value={cupon}
       placeholder="Ingrese su código"/>
       {error && <p className='text-danger col-sm-5'>{message}</p>}

         </div>
       </div>
       <div className=" d-flex col-sm-12 col-md m-auto">
       <button type='submit' disabled={!checked} className="boton-aplicar-cupon">Aplicar</button>
       </div>
       <div className="col text-right m-md-auto pl-0 pr-0 text-center">
         {porcentaje ? 
         <h4 className="porcentaje mb-0">{porcentaje}%</h4>
         : 
         tipoDescuento === 1 ?
         <h4 className="discount mb-0">${descuentoPesos}</h4>
         :
          null}
        </div>
   </form>
 </div>
    )
}

export default Cupon
