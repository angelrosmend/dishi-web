import React, { useContext } from 'react'
import { Suspense } from 'react'
import { ContextProducts } from '../../context/ProductContext'
import Banners from './Banners/Banners'
import Tarjetas from './Tarjetas/Tarjetas'
import Destacados from './Destacados/Destacados'
import Tiendas from './Tiendas/Tiendas'
import Oportunidades from './Oportunidades/Oportunidades'
import Promociones from './Promociones/Promociones'
import CategoriasGrilla from './Categorias/CategoriasGrilla'
import GrillaProductos from './Grilla/GrillaProductos'
import CustomSpinner from '../../components/spinner/Spinner'
import { useFetchHome } from '../../hooks/useFetchHome'
import { urlHome } from '../../settings/requestSettings'
import { ContextUser } from '../../context/UserContext'
import ModalPWDSuccess from '../../components/modals/password/ModalPWDSuccess'



function Home() {
  const {user} = useContext(ContextUser)
  const {data, loading} = useFetchHome(urlHome, user)
  const {banners, destacados, promociones, categorias} = data
  const {monomarca} = useContext(ContextProducts)
    if(loading) return <CustomSpinner/>
    return (
        <div className='home-wrapper'>
          <Suspense fallback={<CustomSpinner/>}>
              <div id="home-start">
                 <Banners banners={banners} />
              </div>
              <Tarjetas/>
            <div className="espaciado-wrapper">
              <Destacados destacados={destacados} />
            </div>
            <div className="espaciado-wrapper">
             <Promociones promociones={promociones} />
            </div>
            <div className="espaciado-wrapper" id='categoriasPage'>
            <CategoriasGrilla categorias={categorias}/>
           </div>
           {monomarca ? null : <div className="espaciado-wrapper"><Tiendas/></div>}
           {monomarca ? null : <div className="espaciado-wrapper"><Oportunidades/></div>}
           <div className="espaciado-wrapper d-flex">
             <GrillaProductos/>
            </div>
          </Suspense>
          <ModalPWDSuccess/>
        </div>
    )
}



export default Home
