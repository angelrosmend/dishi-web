import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CarritoContext';
import Subtitulo from '../home/Subtitulo/Subtitulo';
import CardGrilla from './CardGrilla';

function Grilla({productos, titulo}) {
    const {cartItems} = useContext(CartContext)
    const [visible, setVisible] = useState(4)
    const loadMore = () => {
        setVisible((prevState) => prevState + 4)
    }
    if(productos.length < 1) return null
    
    return (
        <div className='espaciado espaciado-wrapper d-flex flex-column p-4 '>

        <Subtitulo text={titulo}/>

        <div className="p-5 bg-white grilla-wrapper-search mt-5 mx-auto ">

            {productos && productos.slice(0, visible).map(item => {
                const { Id, Imagen, NombreProducto,NombreSucursal, Precio, ValorParaCajaDelivery, Stock} = item;
                return <CardGrilla key={Id}
                                           id={Id}
                                           imagen={Imagen}
                                           nombre={NombreProducto}
                                           sucursal={NombreSucursal}
                                           precio={Precio}
                                           ValorParaCajaDelivery={ValorParaCajaDelivery}
                                           Tipo={0}
                                           Stock={Stock}
                                           />
            })}

        </div>
       { visible < productos.length ?  <button className='mx-auto mt-4 btn btn-light rounded-pill px-4 py-2 text-primary' onClick={loadMore}>VER MÁS</button> : null}
    </div>
    )
}

export default Grilla
