import { Popover } from 'bootstrap';
import React,{useRef, useState} from 'react'
import { Fragment } from 'react';

function DropdownOptions() {
    const [show, setShow] = useState(false);
    
    const handleFade = () => {setShow(false)}
    const handleShow = () => {setShow(true)}
    const handleToggle = () => setShow(!show)

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <Fragment>
            <div className="dropdown-options-container" >
                    <i className="fas fa-sliders-h dropdown-options-icon"
                       onClick={handleToggle}/>
            </div>

            <div className="dropdown-menu-alt" style={{display: show ? "block" : "none"}}> 
              <div className="container">
              <div className="row">
                    <div className="col-4 checkbox1">
                        <p className="titulo3 pb-3"><b>Entrega:</b></p>
                        <div className="d-flex ">
                            <label className="custom-control custom-radio">
                                <input id="radio1" name="radio" type="radio"
                                    className="custom-control-input"/>
                                <span className="custom-control-indicator checkbox-styles"></span>
                                <span className="custom-control-description dropdown-text">Entrega a domicilio</span>
                            </label>
                            <label className="custom-control custom-radio">
                                <input id="radio2" name="radio" type="radio"
                                    className="custom-control-input"/>
                                <span className="custom-control-indicator checkbox-styles"></span>
                                <span className="custom-control-description dropdown-text">Retiro en tienda</span>
                            </label>
                        </div>
                    </div>
                    <div className="col-4 checkbox1">
                        <p className="titulo3 pb-3"><b>Medio de pago:</b></p>
                        <div className="d-flex">
                            <label className="custom-control custom-radio">
                                <input id="radio1" name="radio" type="radio"
                                    className="custom-control-input"/>
                                <span className="custom-control-indicator checkbox-styles"></span>
                                <span className="custom-control-description dropdown-text">Billetera</span>
                            </label>
                            <label className="custom-control custom-radio">
                                <input id="radio2" name="radio" type="radio"
                                    className="custom-control-input"/>
                                <span className="custom-control-indicator checkbox-styles"></span>
                                <span className="custom-control-description dropdown-text">Tarjetas</span>
                            </label>

                            <label className="custom-control custom-radio">
                                <input id="radio2" name="radio" type="radio"
                                    className="custom-control-input"/>
                                <span className="custom-control-indicator checkbox-styles"></span>
                                <span className="custom-control-description dropdown-text">Efectivo</span>
                            </label>
                        </div>
                    </div>

                    <div className="col-4">
                        <p className="titulo3 pb-3"><b>Horario:</b></p>

                        <div className="row"  >
                            <div className="col-6">
                                <label className="custom-control custom-radio">
                                    <input id="radio1" name="radio" type="radio"
                                        className="custom-control-input"/>
                                    <span className="custom-control-indicator checkbox-styles"></span>
                                    <span className="custom-control-description dropdown-text">Abierto ahora</span>
                                </label>
                            </div>
                            <div className="col-6">
                                <button type="button" 
                                        onClick={toggle}
                                        className="btn btn-primary boton-3 btn-aplicar-width">
                                    APLICAR
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </Fragment>
    )
}

export default DropdownOptions
