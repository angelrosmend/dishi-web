import { Fragment, useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import { CartContext} from './context/CarritoContext';
import { ContextUser} from './context/UserContext';
import Busqueda from './pages/busqueda/Busqueda';
import Carrito from './pages/carrito/Carrito';
import CheckoutDireccion from './pages/carrito/checkout-direccion/CheckoutDireccion';
import CheckoutPago from './pages/carrito/checkout-pago/CheckoutPago';
import CategoriasPage from './pages/categorias/CategoriasPage';
import DestacadosPage from './pages/destacados/DestacadosPage';
import Home from './pages/home/Home';
import PromosHot from './pages/home/promos-hot/PromosHot';
import PerfilUsuario from './pages/perfil-usuario/PerfilUsuario';
import ProductoDetalle from './pages/producto-detalle/ProductoDetalle';
import PromocionesDetalle from './pages/promociones/PromocionesDetalle';
import PromosHotPage from './pages/promos-hot/PromosHotPage';
import RecetasDetalle from './pages/recetas/RecetasDetalle';
import RecetasLista from './pages/recetas/RecetasLista';
import RegistroCasa from './pages/registro/RegistroCasa';
import RegistroComercio from './pages/registro/RegistroComercio';
import ProtectedRoute from './routes/ProtectedRoute';
import ProtectedRouteUser from './routes/ProtectedRouteUser';


function App() {
   const {logged} = useContext(ContextUser)
   const {cartItems} = useContext(CartContext)
  return (
    <Fragment>
      <BrowserRouter>
         <Header/>
          <Switch>
          <Route path='/' exact component={Home}/>
          <Route path="/detalle/:id" component={ProductoDetalle}/>
          <Route path='/promociones' exact component={PromosHotPage}/>
          <Route path='/promociones/:id' component={PromocionesDetalle}/>
          <Route path="/destacados" component={DestacadosPage}/>
          <Route path="/categorias/:id"  component={CategoriasPage}/>
          <Route path="/recetas" exact component={RecetasLista}/>
          <Route path="/recetas/:id" component={RecetasDetalle}/>
          <Route path="/busqueda" component={Busqueda}/>
          <Route path="/registro" component={RegistroComercio}/>
          <Route path="/checkout-1-carrito" component={Carrito}/>
          <ProtectedRoute path='/checkout-2-direccion' component={CheckoutDireccion} logged={logged} items={cartItems}/> 
          <ProtectedRoute path="/checkout-3-medio-pago" component={CheckoutPago} logged={logged} items={cartItems}/>
          <ProtectedRouteUser path='/perfil/:name' component={PerfilUsuario} logged={logged}/> 
          <Route component={Home}/>
          </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;