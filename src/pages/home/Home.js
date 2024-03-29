import React, { useContext } from 'react'
import { Suspense } from 'react'
import { ContextProducts } from '../../context/ProductContext'
import Banners from './Banners/Banners'
import Tarjetas from './Tarjetas/Tarjetas'
import Destacados from './Destacados/Destacados'
import GrillaProductos from './Grilla/GrillaProductos'
import CustomSpinner from '../../components/spinner/Spinner'
import { useFetchHome } from '../../hooks/useFetchHome'
import { urlHome, urlProductos } from '../../settings/requestSettings'
import { ContextUser } from '../../context/UserContext'
import ModalPWDSuccess from '../../components/modals/password/ModalPWDSuccess'
import Categorias from './Categorias/Categorias'
import { useGrillaHome } from '../../hooks/listados/useGrillaHome'
import PromosHot from './promos-hot/PromosHot'
import TiendasSliderComponent from './Tiendas/TiendasSliderComponent'



function Home() {
  const {user, MobileUser} = useContext(ContextUser)
  const {data, loading} = useFetchHome(urlHome, MobileUser, user)
  
  const [state, setOrderBy] = useGrillaHome(urlProductos, user, MobileUser)
  const {productos} = state

  const {banners, destacados,descuentos , promociones, categorias, tiendas, oportunidades} = data
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
              <Destacados destacados={productos} />
            </div>
            <div className="espaciado-wrapper" id='categoriasPage'>
            <Categorias categorias={categorias}/>
           </div>
            <div className="espaciado-wrapper">
            <TiendasSliderComponent tiendas={tiendas}/>
            </div>
            <div className="espaciado-wrapper">
               <PromosHot promos={productos}/>
            </div>
           <div className="espaciado-wrapper d-flex">
             <GrillaProductos/>
            </div>

          </Suspense>
          <ModalPWDSuccess/>
        </div>
    )
}



export default Home
