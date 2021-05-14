import React, { useContext, useState } from 'react'
import FiltrosAlt from '../../../components/filtros/FiltroPromo';
import CustomSpinner from '../../../components/spinner/Spinner';
import CardProduct from '../../../components/tarjetas/home/producto/CardProduct';
import { CartContext } from '../../../context/CarritoContext';
import { ContextUser } from '../../../context/UserContext';
import { useGrillaHome } from '../../../hooks/listados/useGrillaHome';
import { urlProductos } from '../../../settings/requestSettings';
import Subtitulo from '../Subtitulo/Subtitulo';

function GrillaProductos() {

    const {cartItems} = useContext(CartContext)
    const {user, MobileUser} = useContext(ContextUser)


  
    const [state, setOrderBy] = useGrillaHome(urlProductos, user, MobileUser)
    const [visible, setVisible] = useState(5)
    const {productos, loading} = state
    const loadMore = () => {
        setVisible((prevState) => prevState + 5)
    }
    return (
        <div className='espaciado espaciado-wrapper d-flex flex-column p-4 mx-auto '>

            <Subtitulo text="Nuestros productos"/>
            <FiltrosAlt setOrderby={setOrderBy}/>

            <div className="p-5 bg-white grilla-wrapper mt-5 ">

                {productos && productos.slice(0, visible).map(item => {
                    const { Id, Imagen, NombreProducto,NombreSucursal, Precio, ValorParaCajaDelivery, Stock} = item;
                    if(loading) return <CustomSpinner/>
                    return <CardProduct key={Id}
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

           {visible <= productos.length ?
             <button className='mx-auto mt-4 btn btn-light rounded-pill px-4 py-2 text-primary' onClick={loadMore}>VER MÁS</button>
              :
            null}
        </div>
    )
}

export default GrillaProductos
