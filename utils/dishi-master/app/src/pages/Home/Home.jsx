import { Suspense, lazy } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import './Home.css'

const Banners = lazy(()=> import('../../components/Slider/Banners'))
const Tarjetas = lazy(()=> import('../../components/Tarjetas/Tarjetas'))
const Destacados = lazy (()=> import('../../components/Destacados/Destacados'))
const Tiendas = lazy (() => import ('../../components/Tiendas/Tiendas'))
const Categorias = lazy(()=> import('../../components/Categorias/Categorias'))
const Oportunidades = lazy(() => import('../../components/Oportunidades/Oportunidades'))

function Home() {
    return (
        <div className="home-wrapper">
            <Suspense fallback={
                <Spinner size="lg" 
                         animation="border" 
                        variant="primary"
                        className="loading"/>}>
                <Banners/>
                <Tarjetas/>
                <Destacados/>
                <Tiendas/>
                <Categorias/>
                <Oportunidades/>
            </Suspense>
        </div>
    )
}

export default Home
