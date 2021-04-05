import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextUser } from '../../../context/UserContext'
import { fechaCompra } from '../../../helpers/fechas'

function TarjetaCompra({pedido, user}) {
    const Pedido = pedido && pedido
    const id = Pedido.Id
    const {setIdCompra} = useContext(ContextUser)
    const fecha = Pedido.FechaAlta
    const name = user && user.Nombre
    const estado = Pedido.EstadoText
    const total = Pedido.Total
    const getIdCompra = id => setIdCompra(id)
    return (
        <div className='tarjeta-compras px-5 py-3'>
            <div className="fecha-estado">
                <p>
                <span className='text-primary'> 
                <b> 
                   #{id}
                 </b>
                 </span> - <i className='text-secondary'>{fechaCompra(fecha)}</i>
                </p>
                <p className='text-dark'>{estado}</p>
            </div>
            <div className="det-total">
                 <Link to={`/perfil/${name}/compras/${id}`}> 
                     <p onClick={() => getIdCompra(id)}
                        className='text-primary'>Ver detalle</p>
                 </Link>
                  <p><b className='text-dark'>$ {total}</b></p>
            </div>
        </div>
    )
}

export default TarjetaCompra
