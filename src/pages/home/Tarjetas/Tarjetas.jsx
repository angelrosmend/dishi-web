import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ModalAlertComercio from '../../../components/modals/alerts/ModalComercio'
import ModalAlertCasa from '../../../components/modals/alerts/ModalDesdeCasa'
import LoginCasa from '../../../components/modals/login/LoginCasa'
import LoginComercio from '../../../components/modals/login/LoginComercio'
import { ContextUser } from '../../../context/UserContext'
import { Overlay, Popover } from 'react-bootstrap';
import {toast} from 'react-toastify'


toast.configure()
const notify = () => toast.info('Ya has iniciado sesión', {autoClose: '2000', position: toast.POSITION.BOTTOM_LEFT} )

function Tarjetas() {
    /* HANDING CASA HOVER*/
    const [showCasa, setShowCasa] = useState(false)
    const [targetCasa, setTargetCasa] = useState(null);
    const refCasa = useRef(null);
    const handleShowCasa = (event) => {setShowCasa(true); setTargetCasa(event.target) }
    const handleFadeCasa = () => {setShowCasa(false);  }
    const handleShowCasa2 = () => {setShowCasa(true);  }
    /* HANDING COMERCIO HOVER*/
    const [showComercio, setShowComercio] = useState(false)
    const [targetComercio, setTargetComercio] = useState(null);
    const refComercio = useRef(null);
    const handleShowComercio = (event) => {setShowComercio(true); setTargetComercio(event.target)}
    const handleFadeComercio = () => {setShowComercio(false);  }
    const handleShowComercio2 = () => {setShowComercio(true);  }
     const {logged, casa, comercio} = useContext(ContextUser)
    return (
    
    <div className="cards mt-5 px-md-5 mx-auto  col-lg-12">
    <div className="row justify-content-center " data-aos="fade-up" data-aos-delay="100">
    <div className="col-sm-12 col-md-6 col-lg-4 py-2 ">
      { logged ? 
       comercio ?
       <div className="card carta tarjeta"
            onClick={notify}>
                <div className="card-horizontal card-fondo-comercio">
                <div className='my-auto ml-3'>
                   <p className="text-white" style={{fontSize: "27px"}}><b>SOY COMERCIO</b><br/></p>
                </div>
            </div>
        </div>
        :
        <ModalAlertComercio>
          <div className="card carta tarjeta">
                <div className="card-horizontal card-fondo-comercio">
                <div className='my-auto ml-3'>
                   <p className="text-white" style={{fontSize: "27px"}}><b>SOY COMERCIO</b><br/></p>
                </div>
            </div>
            </div>
      </ModalAlertComercio>
     
      :
      <div ref={refComercio}>
     <LoginComercio>
        <div className="card carta tarjeta"
              onMouseEnter={handleShowComercio}
              onMouseLeave={handleFadeComercio}>
                <div className="card-horizontal card-fondo-comercio">
                <div className='my-auto ml-3'>
                   <p className="text-white" style={{fontSize: "27px"}}><b>SOY COMERCIO</b><br/></p>
                </div>
            </div>
        </div>
      </LoginComercio>
      <Overlay
          show={showComercio}
          target={targetComercio}
          placement="bottom"
          container={refComercio.current}
          containerPadding={0}
        >
          <Popover id="popover-contained">
            <Popover.Content onMouseEnter={handleShowComercio2}  onMouseLeave={handleFadeComercio}>
              <div className="d-flex flex-column p-3">
               <h5 className="text-primary" style={{fontSize: '0.9rem'}}><b>Ingresar / Registrarse</b></h5>
              </div>
            </Popover.Content>
          </Popover>
        </Overlay>
      </div>}
    </div>
    
    <div className="col-sm-12 col-md-6 col-lg-4 py-2">
   { logged ?
     casa ?
   <div className="card carta tarjeta"
        onClick={notify}>
   <div className="card-horizontal card-fondo-casa">
   <div className='my-auto ml-3'>
      <p className="text-white" style={{fontSize: "27px"}}><b>DESDE CASA</b><br/></p>
   </div>
  </div>
  </div>
   :
   <ModalAlertCasa>
        <div className="card carta tarjeta">
                <div className="card-horizontal card-fondo-casa">
                <div className='my-auto ml-3'>
                   <p className="text-white" style={{fontSize: "27px"}}><b>DESDE CASA</b><br/></p>
                </div>
            </div>
        </div>
   </ModalAlertCasa>
   :
   <div ref={refCasa}>
   <LoginCasa>
        <div className="card carta tarjeta"
             onMouseEnter={handleShowCasa}
             onMouseLeave={handleFadeCasa}>
                <div className="card-horizontal card-fondo-casa">
                <div className='my-auto ml-3'>
                   <p className="text-white" style={{fontSize: "27px"}}><b>DESDE CASA</b><br/></p>
                </div>
            </div>
        </div>
    </LoginCasa>
    <Overlay
          show={showCasa}
          target={targetCasa}
          placement="bottom"
          container={refCasa.current}
          containerPadding={0}
        >
          <Popover id="popover-contained">
            <Popover.Content onMouseEnter={handleShowCasa2}  onMouseLeave={handleFadeCasa}>
              <div className="d-flex flex-column p-3">
               <h5 className="text-primary" style={{fontSize: '0.9rem'}}><b>Ingresar / Registrarse</b></h5>
     
             
              </div>
            </Popover.Content>
          </Popover>
        </Overlay>
    </div>}
    </div>

    <div className="col-sm-12 col-md-6 col-lg-4 py-2">
        <Link to='/recetas'>
        <div className="card carta tarjeta">
                <div className="card-horizontal card-fondo-recetas">
                <div className='my-auto ml-3'>
                   <p className="text-white" style={{fontSize: "27px"}}><b>RECETAS</b><br/></p>
                </div>
            </div>
        </div>
        </Link>
    </div>
       
</div>
</div>
    )
}

export default Tarjetas
