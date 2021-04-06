import React, { useContext } from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { ContextUser } from '../../../context/UserContext'
import { fechaCompraDetalle, getHora } from '../../../helpers/fechas'
import { useDetalleCompra } from '../../../hooks/usuario/useDetalleCompra'
import Subtitulo from '../../home/Subtitulo/Subtitulo'

function DetalleCompra({match}) {

    const id = match.params.id
    const {user} = useContext(ContextUser)
    const {pedido, productos} = useDetalleCompra(user, id)
    const {Id, FechaAlta, Descuento, SubTotal, Total, SucursalNombreFantasia, TelefonoContacto, TrackingNumber} = pedido
   
    return (

        <Fragment>
        <Subtitulo text='Detalle de compra'/>
        <div className='container-info-inner'>
                    <div className="container-compra ">
                        <div className="det-compra-info p-2 ">
                            <div className="det-box-info">
                                <h5><b className='text-primary'>#{Id}</b> <b className='text-dark'> - {fechaCompraDetalle(FechaAlta)} - {getHora(FechaAlta)}</b></h5>
                                <p className='text-dark'> <b>Comprador</b>: <span>{SucursalNombreFantasia}</span></p>
                               {TelefonoContacto && <p className='text-dark'> <b>Telf: </b> <span className="text-dark">{TelefonoContacto}</span></p>}
                                <p> <b className='text-secondary'>Solicitado</b></p>
                               {TrackingNumber && <p className="text-danger">Numero de tracking: {TrackingNumber} </p>}
                            </div>
                            <div className="det-box-monto">
                                <div className="">
                                <p className="text-dark"> <b className="text-dark">Subtotal: </b> <b className='text-secondary'>$ {SubTotal}</b></p>
                                {Descuento > 0 ? <p className="text-dark"> <b className="text-dark">Descuento: </b> <b className='text-secondary'>$ {Descuento}</b></p>: null}
                                <p className="text-dark"> <b className='text-dark'>Total</b> <b className='text-primary'>$ {Total}</b></p>
                                </div>
                            </div>
                        </div>
                        <div className="det-compra-list ">
                            <h5 className="text-secondary"> <b>Lista de productos</b></h5>
                            <ul className='list-scroll' id='mis-compras-det'>
                            {productos && productos.map(item => {
                                const {Id, NombreProducto, CantidadPedida, Tipo} = item
                                return <li key={Id} className='py-3'> 
                                         <Link to={Tipo === 1  ? `/promociones/${Id}` : `/detalle/${Id}`}>
                                               <p> <span className="text-dark">{CantidadPedida}</span> - {Tipo === 1 ? '(Promo)': null} {NombreProducto}</p> 
                                         </Link>
                                       </li>
                            })}
                            </ul>
                            

                        </div>
                    </div>
        </div>
        </Fragment>
    )
}

export default DetalleCompra
