import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../../css/addons.css';

function DropdownAplicar() {
    return (
        <div className="col-2 float-left p-0 dropdown">
               <a className="nav-link dropdown-toggle py-1 p-0" 
                  id="navbarDropdownMenuLink" 
                  data-toggle="dropdown" 
                  aria-haspopup="true" 
                  aria-expanded="false"
                  style={{marginLeft: "10px", cursor: "pointer"}}>

                  <i className="fas fa-sliders-h" 
                     style={{fontSize: "28px", color: "white"}}/>
              </a>
   
           <div className="dropdown-menu dropdown-menu2" aria-labelledby="navbarDropdownMenuLink">
                <div className="container">
                   <div className="row">
                       <div className="col-5 checkbox1">
                           <p className="titulo3 pb-3"><b>Entrega:</b></p>
                           <div className="d-flex ">
                               <label className="custom-control custom-radio">
                                   <input id="radio1" name="radio" type="radio" className="custom-control-input"/>
                                   <span className="custom-control-indicator checkbox-styles"></span>
                                   <span className="custom-control-description">Entrega a domicilio</span>
                               </label>
                               <label className="custom-control custom-radio">
                                   <input id="radio2" name="radio" type="radio" className="custom-control-input"/>
                                   <span className="custom-control-indicator checkbox-styles"></span>
                                   <span className="custom-control-description">Retiro en tienda</span>
                               </label>
                           </div>
                       </div>
                       <div className="col-4 checkbox1" >
                           <p className="titulo3 pb-3"><b>Medio de pago:</b></p>
                           <div className="d-flex">
                               <label className="custom-control custom-radio">
                                   <input id="radio1" name="radio" type="radio" className="custom-control-input"/>
                                   <span className="custom-control-indicator checkbox-styles"></span>
                                   <span className="custom-control-description">Billetera</span>
                               </label>
                               <label className="custom-control custom-radio">
                                   <input id="radio2" name="radio" type="radio" className="custom-control-input"/>
                                   <span className="custom-control-indicator checkbox-styles"></span>
                                   <span className="custom-control-description">Tarjetas</span>
                               </label>
                               <label className="custom-control custom-radio">
                                   <input id="radio2" name="radio" type="radio" className="custom-control-input"/>
                                   <span className="custom-control-indicator checkbox-styles"></span>
                                   <span className="custom-control-description">Efectivo</span>
                               </label>
                           </div>
                       </div>
                       <div className="col-3">
                           <p className="titulo3 pb-3"><b>Horario:</b></p>
                           <div className="row">
                               <div className="col-10">
                                   <label className="custom-control custom-radio">
                                       <input id="radio1" name="radio" type="radio" className="custom-control-input"/>
                                       <span className="custom-control-indicator checkbox-styles"></span>
                                       <span className="custom-control-description">Abierto ahora</span>
                                   </label>
                               </div>
                              <div className="col-2">
                               <button type="button" 
                                       className="btn btn-primary boton-3">
                                   APLICAR
                               </button>
                           </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    )
}

export default DropdownAplicar
