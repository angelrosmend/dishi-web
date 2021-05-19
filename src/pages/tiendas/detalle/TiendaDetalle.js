import React from 'react'
import { Fragment } from 'react'

function TiendaDetalle() {
    return (
       <Fragment>
           <div class="container-fluid ">
             <div class="row tienda-header justify-content-md-center">
                    <div class="col-md-auto">
                    <div class="badge badge-pill badge-primary tienda-open-badge">
                        <span class="align-middle m-3">Abierto Ahora</span>
                    </div>
                    <div class="tienda-brand mx-auto">
                    <div class="tienda-brand-like">
                        <i class="far fa-heart like"   data-toggle="popover" data-trigger="hover" data-placement="left" data-content="Agregar a Favoritos"></i>
                    </div>
                        <img class="imagenes img-fluid" src="img/logo-fresco.png" alt=""/></div>
                    </div>
                </div>
                <div class="row tienda-header-bottom "></div>
            </div>

{/* <!-- FIN BANNER TIENDA --> */}

{/* <!-- DETALLE TIENDA --> */}
<div class="container">
    <div class="row ">

       {/*  <!-- FICHA TIENDA--> */}
       {/*  <!-- TITULO DIRECCION DATOS --> */}
        <div class="col-12" data-aos="fade-up" data-aos-delay="170">
            <h1 class="text-center tienda-brand-h1">FRES.CO</h1>
            <h4 class="text-center tienda-brand-h4">Tienda de productos orgánicos gourmet</h4>
            <div class="row justify-content-md-center px-4 mt-5">
                <div class="col-md-auto col-sm-auto"><p class="tienda-texto-general text-center"><i class="fas fa-phone-alt tienda-icon-detail"></i>+54 0220 - 465-1570</p></div>
                <div class="col-md-auto col-sm-auto"><p class="tienda-texto-general text-center"><i class="fab fa-whatsapp tienda-icon-detail"></i>+54 9220 65-1570</p></div>
                <div class="col-md-3 col-sm-auto"><p class="tienda-texto-general text-center"><i class="fas fa-clock tienda-icon-detail"></i>Lunes a viernes 11 a 21hs.</p></div>
                <div class="col-md-auto col-sm-auto"><p class="tienda-texto-general text-center"><i class="fas fa-link tienda-icon-detail"></i>www.fresco.com.ar</p></div>
                <div class="col-md-auto col-sm-auto"><p class="tienda-texto-general text-center"><i class="fas fa-envelope tienda-icon-detail"></i>hola@fresco.com.ar</p></div>
            </div>
            <div class="row justify-content-center mt-3 mb-3">
                <div class="col-auto"><p class="tienda-texto-general text-center"><i class="fas fa-map-marker tienda-icon-detail"></i>Av. de la Independencia 2133, Pehuajó</p></div>
            </div>
        </div>
      {/*   <!-- FIN TITULO DIRECCION DATOS -->   */}
</div>
{/* <!-- MAPA --> */}
<div class="row">
    <div class="col-12">
        <div class="tienda-mapa">
        <img src="./img/tienda-mapa.jpg"/>
        </div>
    </div>
</div>
{/* <!-- FIN MAPA --> */}
{/* <!-- CARDS ENVIO METODO DE PAGO PROMOS --> */}
<div class="row justify-content-center mt-5">
    <div class="col-10">
        <div class="row justify-content-center">

            <div class="card mb-3 h-100 mr-3 ml-3 bg-transparent border-0" style={{maxWidth: "250px"}}>
                <div class="row no-gutters align-items-center tienda-radius tienda-card">
                  <div class="col-md-4 col-3 text-center">
                    <h2><i class="fas fa-wallet text-white"></i></h2>
                  </div>
                  <div class="col-md-8 col-9 bg-white tienda-radius-r">
                    <div class="card-body">
                      <p class="card-text tienda-texto-cards"><strong>Acepta Billetera</strong> Pagá tus productos 100% online.</p>       
                    </div>
                  </div>
                </div>
              </div>

              <div class="card mb-3 mr-3 ml-3 h-100 bg-transparent border-0" style={{maxWidth: "250px"}}>
                <div class="row no-gutters tienda-card align-items-center tienda-radius">
                  <div class="col-md-4  col-3 text-center ">
                    <h2><i class="fas fa-motorcycle text-white"></i></h2>
                  </div>
                  <div class="col-md-8 col-9 bg-white tienda-radius-r">
                    <div class="card-body">
                      <p class="card-text tienda-texto-cards"><strong>Envío Gratis</strong><br/>en pedidos mayores a $2500.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card mb-3 mr-3 ml-3 h-100 bg-transparent border-0" style={{maxWidth: "250px"}}>
                <div class="row no-gutters tienda-card align-items-center tienda-radius">
                  <div class="col-md-4 col-3 text-center">
                    <h2><i class="fas fa-percent text-white"></i></h2>
                  </div>
                  <div class="col-md-8 col-9 bg-white tienda-radius-r">
                    <div class="card-body">
                      
                      <p class="card-text tienda-texto-cards"><strong>Promociones</strong><br/>Aprovecha los productos off!</p>
                      
                    </div>
                  </div>
                </div>
              </div>
            
        </div>
    </div>
</div>
{/* <!-- FIN CARDS ENVIO METODO DE PAGO PROMOS --> */}
</div>


{/* <!-- FIN DETALLE TIENDA --> */}
{/* 
<!-- SLIDERS --> */}

{/* <!-- PRODUCTOS DE LA TIENDA --> */}
<div class="container mt-5">
    <div class="row text-center">
        <div class="col-12 pb-3">
            <h3>Productos <span class="tienda-brand-blue">FRES.CO</span></h3>
        </div>
    </div>
</div>

<div class="container mb-lg-0 mb-5 sliders">
    <div class="container-fluid pt-3" >
        <div class="row d-flex justify-content-center pt-4 multiple-items2" >
            <div class="col-sm-12 col-md-12 pb-4 ">

                
                <i class="far fa-heart like"   data-toggle="popover" data-trigger="hover" data-placement="left" data-content="Agregar a Favoritos"></i>
            
                <img class="imagenes" src="img/reloj.jpg" alt=""/>
                <div class="text-img d-flex py-2" >
                    <div>
                        <p class="text-white">$ 875 </p>
                    </div>
                    <ul class="navbar-nav ml-auto">
                        <li>
                            <i class="fas fa-wallet" style={{color: "#ffffffb8"}}></i>
                        </li>
                    </ul>
                </div>
                <div class="text2-img">
                    <p class="titulo"><b>GUGA</b></p>
                    <p class="titulo2">Reloj de escritorio analógico con soporte</p>
                </div>

            </div>

            <div class="col-sm-12 col-md-12 pb-4">

                <i class="far fa-heart like" data-toggle="popover" data-trigger="hover" data-placement="left" data-content="Agregar a Favoritos"></i>
                <img class="imagenes" src="img/bebes.jpg" alt=""/>
                <div class="text-img d-flex py-2">
                    <div>
                        <p class="text-white">$ 2159 </p>
                    </div>
                    <ul class="navbar-nav ml-auto">
                        <li>
                            <i class="far fa-credit-card" ></i>
                        </li>
                    </ul>
                </div>
                <div class="text2-img">
                    <p class="titulo"><b>AMIWI</b></p>
                    <p class="titulo2">Laberinto de tela para niñes y bebés</p>
                </div>

            </div>
            
            <div class="col-sm-12 col-md-12 pb-4">

                <i class="far fa-heart like" data-toggle="popover" data-trigger="hover" data-placement="left" data-content="Agregar a Favoritos"></i>
                <img class="imagenes" src="img/jamon.jpg" alt=""/>
                <div class="text-img d-flex py-2">
                    <div>
                        <p class="text-white">$ 650 </p>
                    </div>
                    <ul class="navbar-nav ml-auto">
                        <li>
                            <i class="far fa-credit-card" style={{color: "#ffffffb8"}}></i>
                            <i class="fas fa-wallet" style={{color: "#ffffffb8"}}></i>
                        </li>
                    </ul>
                </div>
                <div class="text2-img">
                    <p class="titulo"><b>CONVID</b></p>
                    <p class="titulo2">Jabón natural de coco y cardamomo</p>
                </div>

            </div>
            
             <div class="col-sm-12 col-md-12 pb-4">

                <i class="far fa-heart like"  data-toggle="popover" data-trigger="hover" data-placement="left" data-content="Agregar a Favoritos"></i>
                <img class="imagenes" src="img/veggie.jpg" alt=""/>
                <div class="text-img d-flex py-2">
                    <div>
                        <p class="text-white">$ 450 </p>
                    </div>
                    <ul class="navbar-nav ml-auto">
                        <li>
                            <i class="fas fa-wallet" style={{color: "#ffffffb8"}}></i>
                        </li>
                    </ul>
                </div>
                <div class="text2-img">
                    <p class="titulo"><b>SIEMPRE VERDE ALMAC...</b></p>
                    <p class="titulo2">Pack veggie x 12 hamburguesas</p>
                </div>

            </div>
            
            <div class="col-sm-12 col-md-12 pb-4">

                <i class="far fa-heart like" style="" data-toggle="popover" data-trigger="hover" data-placement="left" data-content="Agregar a Favoritos"></i>
                <img class="imagenes" src="img/almohadas.jpg" alt=""/>
                <div class="text-img d-flex py-2">
                    <div>
                        <p class="text-white">$ 1220 </p>
                    </div>
                    <ul class="navbar-nav ml-auto">
                        <li>
                            <i class="fas fa-wallet" style={{color: "#ffffffb8"}}></i>
                        </li>
                    </ul>
                </div>
                <div class="text2-img">
                    <p class="titulo"><b>VALERIANA</b></p>
                    <p class="titulo2">Almohada viscoelástica</p>
                </div>

            </div>

            <div class="col-sm-12 col-md-12 pb-4">

                <i class="far fa-heart like"  data-toggle="popover" data-trigger="hover" data-placement="left" data-content="Agregar a Favoritos"></i>
                <img class="imagenes" src="img/reloj.jpg" alt=""/>
                <div class="text-img d-flex py-2">
                    <div>
                        <p class="text-white">$ 875 </p>
                    </div>
                    <ul class="navbar-nav ml-auto">
                        <li>
                            <i class="fas fa-wallet" style={{color: "#ffffffb8"}}></i>
                        </li>
                    </ul>
                </div>
                <div class="text2-img">
                    <p class="titulo"><b>GUGA</b></p>
                    <p class="titulo2">Reloj de escritorio analógico con soporte</p>
                </div>

            </div>

            <div class="col-sm-12 col-md-12 pb-4">

                <i class="far fa-heart like" data-toggle="popover" data-trigger="hover" data-placement="left" data-content="Agregar a Favoritos"></i>
                <img class="imagenes" src="img/bebes.jpg" alt=""/>
                <div class="text-img d-flex py-2">
                    <div>
                        <p class="text-white">$ 2159 </p>
                    </div>
                    <ul class="navbar-nav ml-auto">
                        <li>
                            <i class="far fa-credit-card" style={{color: "#ffffffb8"}}></i>
                        </li>
                    </ul>
                </div>
                <div class="text2-img">
                    <p class="titulo"><b>AMIWI</b></p>
                    <p class="titulo2">Laberinto de tela para niñes y bebés</p>
                </div>

            </div>
            
            <div class="col-sm-12 col-md-12 pb-4">

                <i class="far fa-heart like" data-toggle="popover" data-trigger="hover" data-placement="left" data-content="Agregar a Favoritos"></i>
                <img class="imagenes" src="img/jamon.jpg" alt=""/>
                <div class="text-img d-flex py-2">
                    <div>
                        <p class="text-white">$ 650 </p>
                    </div>
                    <ul class="navbar-nav ml-auto">
                        <li>
                            <i class="far fa-credit-card" style={{color: "#ffffffb8"}}></i>
                            <i class="fas fa-wallet" style={{color: "#ffffffb8"}}></i>
                        </li>
                    </ul>
                </div>
                <div class="text2-img">
                    <p class="titulo"><b>CONVID</b></p>
                    <p class="titulo2">Jabón natural de coco y cardamomo</p>
                </div>

            </div>
            
            <div class="col-sm-12 col-md-12 pb-4">

                <i class="far fa-heart like"  data-toggle="popover" data-trigger="hover" data-placement="left" data-content="Agregar a Favoritos"></i>
                <img class="imagenes" src="img/veggie.jpg" alt=""/>
                <div class="text-img d-flex py-2">
                    <div>
                        <p class="text-white">$ 450 </p>
                    </div>
                    <ul class="navbar-nav ml-auto">
                        <li>
                            <i class="fas fa-wallet" style={{color: "#ffffffb8"}}></i>
                        </li>
                    </ul>
                </div>
                <div class="text2-img">
                    <p class="titulo"><b>SIEMPRE VERDE ALMAC...</b></p>
                    <p class="titulo2">Pack veggie x 12 hamburguesas</p>
                </div>

            </div>
            
            <div class="col-sm-12 col-md-12 pb-4">

                <i class="far fa-heart like" data-toggle="popover" data-trigger="hover" data-placement="left" data-content="Agregar a Favoritos"></i>
                <img class="imagenes" src="img/almohadas.jpg" alt=""/>
                <div class="text-img d-flex py-2">
                    <div>
                        <p class="text-white">$ 1220 </p>
                    </div>
                    <ul class="navbar-nav ml-auto">
                        <li>
                            <i class="fas fa-wallet" style={{color: "#ffffffb8"}}></i>
                        </li>
                    </ul>
                </div>
                <div class="text2-img">
                    <p class="titulo"><b>VALERIANA</b></p>
                    <p class="titulo2">Almohada viscoelástica</p>
                </div>

            </div>

        </div>

    </div>
                <div class="arrow_prev2">
                    <span><i class="fas fa-angle-left a-prev2"></i></span>
                </div>
                <div class="arrow_next2 text-right">
                    <span><i class="fas fa-angle-right a-next2"></i></span>          
                         </div>
</div>
       </Fragment>
    )
}

export default TiendaDetalle
