import React, { useState, useRef, useContext, Fragment } from 'react';
import { Overlay, Popover } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { perro } from '../../assets/img';
import { ContextUser } from '../../context/UserContext';



function NavUser() {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleShow = (event) => {setShow(false); setTarget(event.target); }
    const handleFade = () => {setShow(false); }


    const {user, logged} = useContext(ContextUser)
    const Nombre = user && user.Nombre
    const FullName = user && user.Usuario.NombreCompleto
 
    return (
        <div ref={ref} className='nav-user-container'>
        {logged ?
        <Fragment>
            <Link to={`/perfil/${Nombre}/datos`}>
                <a href="#mis-datos">
                 <i onMouseEnter={handleShow} className="fa fa-user nav-icon-1 pr"></i>
                 </a>
            </Link>
        <p className="text-nav my-auto pl-1 pt-1"> Hola, <span className='cap-user'>{Nombre}</span></p>
        </Fragment>
        :null}
      <Overlay
          show={show}
          target={target}
          placement="bottom"
          container={ref.current}
          containerPadding={0}
        >

         <Popover id="popover-contained" onMouseLeave={handleFade}>
            <Popover.Content >
             {  
                 user && 
                 <div className="conteiner-fluid p-0">
                 <div className="row text-center py-2">
                     <div className="col-12">
                         <img className="avatar-img" src={perro} alt=""/>
                     </div>
                     <div className="col-12">
                         <p className="text-primary">{FullName}</p>
                     </div>
                     <div className="col-12">
                         <p className=""> <i className="fas fa-map-marker"></i> Garibaldi 2096, Pehuajó - Piso 2 Departamento 24</p>
                     </div>
                 </div>
                 <hr className="linea2"/>
                 <div className="row text-center">
                     <div className="col">
                         <a href="" role='button'>
                             <i className="fas fa-pencil-alt avatar-icon-2"/>
                         </a>
                     </div>
                 </div>    
                 <div className="col-12 py-2">
                     <div className="d-flex"> 
                         <div className="row m-auto w-100 text-center justify-content-around">   
                             <div className="">
                                 <a role="button">
                                     <i className="fas fa-shopping-bag avatar-icon"></i>
                                 </a>
                                 <p>Compras</p>
                             </div>
                             <div className="">
                                 <a role="button">
                                     <i className="fa fa-shopping-cart avatar-icon"></i>
                                 </a>
                                 <p>Carrito</p>
                             </div>
                             <div className="">
                                 <a role="button">
                                     <i className="fas fa-heart avatar-icon"></i>
                                 </a>
                                 <p>Favoritos</p>
                             </div>
                         </div>                      
                     </div>          
                 </div>
             </div>
             }
            </Popover.Content>
        </Popover>
     </Overlay>
  </div>
    )
}

export default NavUser
