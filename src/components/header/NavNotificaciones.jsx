import React,{useState, useRef, useContext, Fragment} from 'react'
import { Overlay, Popover } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { ContextUser } from '../../context/UserContext';
import { fechaNotificaciones } from '../../helpers/fechas';


function NavNotificaciones() {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleShow = (event) => {setShow(true); setTarget(event.target); }
    const handleFade = () => {setShow(false);  }
    const handleShow2 = () => {setShow(true);  }



    const {logged,user, notificaciones, cantidad} = useContext(ContextUser)
    
    const history = useHistory()
    const name = user && user.Nombre
    const handleVerMas = () => {
        history.push(`/perfil/${name}/notificaciones`)
    }
  
    return (
    <div ref={ref}>
       { logged ? 
        <Link to={`/perfil/${name}/notificaciones`}>
         <i onMouseEnter={handleShow}
          onMouseLeave={handleFade} 
          className="fa fa-bell nav-icon-notificaciones mr-4 p-relative">
             {cantidad ? 
                  <span className='cart-notificaciones'>
                      <h6>{cantidad}</h6>
                  </span>
                    :
                    null}
          </i>
        </Link>
        :
        null}
        <Overlay
          show={show}
          target={target}
          placement="bottom"
          container={ref.current}
          containerPadding={0}
        >
          <Popover id="popover-contained">
            <Popover.Content  onMouseLeave={handleFade}
                              onMouseEnter={handleShow2}>
            <div className="container-fluid p-0">
             <div className=" row text-center m-0" style={{width:'100%'}}>
                   { notificaciones.length < 1 ?
                   <h6 className='mx-auto text-center text-primary p-3' >No tienes notificaciones</h6>
                   :
                    <Fragment>
                    <div className="col-12 text-primary pt-1">
                        <h5>Notificaciones</h5>
                    </div>
                    {notificaciones && notificaciones.slice(0, 4).map(item => {
                        const {Id} = item
                        return <Notificacion key={Id} notificacion={item} name={name}/>
                    })}
                     <div className="col-12 pt-3">
                <a href='#mis-notificaciones'
                   onClick={handleVerMas}>
                <h6 className="text-primary">Ver todas</h6>
                </a>
              </div>
                   </Fragment>
                   }
       
    </div>
    </div>
            </Popover.Content>
          </Popover>
        </Overlay>
      </div>
    )
}


const Notificacion = ({notificacion, name}) => {
    const {FechaAlta, Titulo,Id, Leida} = notificacion
    const history = useHistory()
    const handleClick = () =>{
      history.push(`/perfil/${name}/notificaciones/`)
    }
    return(
      <a href='#mis-notificaciones'
         onClick={handleClick}
         className='tarjeta-compras'
         key={Id}
         style={{borderTop: 'none'}}>
        <div className="col-12 d-flex flex-row  py-3">
        <div className="">
            <i className={`fas fa-bell ${ Leida ? 'notificacion-bell-inactiva' : 'notificacion-bell'}`}></i>
       </div>
       <div className="" style={{padding: "0px", textAlign: "left", width: "14rem" }}>
           <p className="text-marcador text-m0 ts-1">{fechaNotificaciones(FechaAlta)}</p>
           <p className="text-marcador text-primary text-m0">{Titulo}</p>
       </div>
       </div>
     </a>
    )
}

export default NavNotificaciones
