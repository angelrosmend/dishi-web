import React,{useState, useRef, useContext} from 'react'
import { Fragment } from 'react';
import { Overlay, Popover } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { ContextUser } from '../../../context/UserContext';
import { fechaCompraDetalle } from '../../../helpers/fechas';
import { useGetMisCompras } from '../../../hooks/usuario/useGetMisCompras';


function NavMisCompras() {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleShow = (event) => {setShow(true); setTarget(event.target); }
    const handleFade = () => {setShow(false)}
    const handleShow2 = () => {setShow(true)}
    
    const history = useHistory()
   
    const {logged,user} = useContext(ContextUser)
    const nombre = user && user.Nombre
    
    const {data} = useGetMisCompras(user, -2)

    const handleVerMas = () => history.push(`/perfil/${nombre}/compras`)
  
    return (
        <div ref={ref}>
       {logged ? 
       <Link to={`/perfil/${nombre}/compras`}>
       <i onMouseEnter={handleShow}
          onMouseLeave={handleFade}
          className="fas fa-shopping-bag nav-icon-notificaciones mr-4 "></i>
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
            <div className="p-0">
             <div className=" row text-center m-0" style={{width:'100%'}}>
                    {data.length < 1 ?
                     <h6 className='mx-auto text-center text-primary p-3' >No tienes compras</h6>
                     :
                    <Fragment>
                    <div className="col-12 text-primary pt-1">
                        <h5>Mis Compras</h5>
                    </div>
                    {data && data.map(item => {
                   const {Pedido} = item;
                   const {Id} = Pedido
                   return <NavCompra key={Id} pedido={Pedido} user={user} />
                   })}
                     <div className="col-12 pt-3">
                        <a href='#mis-compras' onClick={handleVerMas}> 
                           <h6 className="text-primary">Ver todas</h6>
                        </a>
                </div>
                  </Fragment>} 
              </div>
              </div>
            </Popover.Content>
          </Popover>
        </Overlay>
      </div>
    )
}
const NavCompra = ({pedido, user}) => {
    const Pedido = pedido && pedido
    const id = Pedido.Id
    const fecha = Pedido.FechaAlta
    const name = user && user.Nombre
    const estado = Pedido.EstadoText
    const total = Pedido.Total
    const history = useHistory()
    const handleClick = () => {
      history.push(`/perfil/${name}/compras/${id}`)  
    }

    return (
      <a href='#mis-compras-det' className='col-12 tarjeta-compras' style={{borderTop: 'none'}}  onClick={handleClick}>
        <div className=' px-3 py-1 flex-column '>
            <div className="fecha-estado row">
                <p className='text-center text-marcador'>
                <span className='text-primary'> 
                <b> 
                   #{id}
                 </b>
                 </span> - <i className='text-secondary'>{`${fechaCompraDetalle(fecha)} - `}</i> 
                  Total: <b className='text-dark'> $ {total} </b>
                 </p>
               
            </div>
            <div className="det-total flex-row text-center text-marcador">
               <div className="mx-auto flex-row">
               <p className='text-dark text-marcador'>{estado}</p>
        
               </div>
            </div>
        </div>
        </a>
    )
}
export default NavMisCompras
