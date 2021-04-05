import React,{useState} from 'react'
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

function DropdownOptions() {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} 
                  toggle={toggle}
                  className="col-1  p-0 "
                  style={{position: "relative"}}>
            <DropdownToggle tag="span"
                            data-toggle="dropdown"
                            aria-expanded={dropdownOpen}>
                <i className="fas fa-sliders-h" 
                   style={{fontSize: "28px", 
                   color:"#056ae0", 
                   cursor: "pointer",
                   position: 'absolute',
                   top:'12.5%'}}/>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu dropdown-menu-alt"> 
              <div className="container">
              <div className="row">
                    <div className="col-5 checkbox1">
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

                    <div className="col-3">
                        <p className="titulo3 pb-3"><b>Horario:</b></p>

                        <div className="row"  >
                            <div className="col-10">
                                <label className="custom-control custom-radio">
                                    <input id="radio1" name="radio" type="radio"
                                        className="custom-control-input"/>
                                    <span className="custom-control-indicator checkbox-styles"></span>
                                    <span className="custom-control-description dropdown-text">Abierto ahora</span>
                                </label>
                            </div>
                            <div className="col-2">
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
            </DropdownMenu>
        </Dropdown>
    )
}

export default DropdownOptions
