import React from 'react'

function CardsInfoTienda() {
    return (
        <div className="row justify-content-center mt-5">
    <div className="col-10">
        <div className="row justify-content-center">

            <div className="card mb-3 h-100 mr-3 ml-3 bg-transparent border-0" style={{maxWidth: "250px"}}>
                <div className="row no-gutters align-items-center tienda-radius tienda-card">
                  <div className="col-md-4 col-3 text-center">
                    <h2><i className="fas fa-wallet text-white"></i></h2>
                  </div>
                  <div className="col-md-8 col-9 bg-white tienda-radius-r">
                    <div className="card-body">
                      <p className="card-text tienda-texto-cards"><strong>Acepta Billetera</strong> Pagá tus productos 100% online.</p>       
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3 mr-3 ml-3 h-100 bg-transparent border-0" style={{maxWidth: "250px"}}>
                <div className="row no-gutters tienda-card align-items-center tienda-radius">
                  <div className="col-md-4  col-3 text-center ">
                    <h2><i className="fas fa-motorcycle text-white"></i></h2>
                  </div>
                  <div className="col-md-8 col-9 bg-white tienda-radius-r">
                    <div className="card-body">
                      <p className="card-text tienda-texto-cards"><strong>Envío Gratis</strong><br/>en pedidos mayores a $2500.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3 mr-3 ml-3 h-100 bg-transparent border-0" style={{maxWidth: "250px"}}>
                <div className="row no-gutters tienda-card align-items-center tienda-radius">
                  <div className="col-md-4 col-3 text-center">
                    <h2><i className="fas fa-percent text-white"></i></h2>
                  </div>
                  <div className="col-md-8 col-9 bg-white tienda-radius-r">
                    <div className="card-body">
                      
                      <p className="card-text tienda-texto-cards"><strong>Promociones</strong><br/>Aprovecha los productos off!</p>
                      
                    </div>
                  </div>
                </div>
              </div>
            
        </div>
    </div>
</div>
    )
}

export default CardsInfoTienda
