import React from 'react'
import { Row } from 'react-bootstrap'

function Navwallet() {
    return (
    <div className="col-2 dropdown-hover">
        <a className=" dropdown-toggle" id="menu4" type="button" data-toggle="dropdown" href="#">
            <i className="fas fa-wallet nav-icon-4 rounded-circle"></i>
        </a>
        <div className="dropdown-menu desplegable3" role="menu" aria-labelledby="menu4">
          <div className="triangle"></div>
            <div className="container desplegable3-3">
                <div className="container justify-content-center">
                    <div className="row text-center">
                        <div className="col-12 d-flex">
                            <i className="fas fa-wallet wallet-icon p-1"></i> 
                            <p className="wallet-text">MI BILLETERA</p>
                        </div>
                    </div>
                </div>
                <div className="container justify-content-center">
                    <div className="row text-center">
                        <div className="col-12">
                            <p className="wallet-text2">Disponible $14.730,44</p>
                        </div>
                    </div>
                </div>
                <div className="container justify-content-center">
                    <div className="row text-center">
                        <div className="col d-flex">
                            <p style={{fontSize: "12px"}}>Operar con </p>
                            <p className="wallet-text3"> MI BILLETERA <i className="fas fa-external-link-alt wallet-icon3"></i></p>
                        </div>
                    </div>
                </div>
                  
                <hr className="linea3"/>
                <div className="row text-center">
                    <Row className="p-2">
                    <div className="col">
                        <a href="">
                            <i className="fas fa-file-invoice-dollar wallet-icon2"></i>
                        </a>
                        <p>Pago de Servicios</p>
                    </div>
                    <div className="col">
                        <a href="">
                            <i className="fa fa-qrcode wallet-icon2"></i>
                        </a>
                        <p>Qr</p>
                    </div>
                    <div className="col">
                        <a href ="">
                            <i className="fas fa-mobile-alt wallet-icon2"></i>
                        </a>
                        <p>Recarga Virtual</p>
                    </div>
                    </Row>
                </div>                      
            </div>
        </div>
    </div>
    )
}

export default Navwallet

/* 
const [show, setShow] = useState(false);
const showDropdown = (e)=>{
    setShow(!show);
}
const hideDropdown = e => {
    setShow(false);
}

  <NavDropdown title="Dropdown" 
   id="collasible-nav-dropdown" 
   show={show}
   onMouseEnter={showDropdown} 
   onMouseLeave={hideDropdown}
   >
 */
