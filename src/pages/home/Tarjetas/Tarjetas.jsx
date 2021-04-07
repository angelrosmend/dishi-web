import React from 'react'
import { perro } from '../../../assets/img'



function Tarjetas() {
    return (
    <div className="espaciado cards" style={{paddingTop:"80px"}}>
    <div className="row" data-aos="fade-up" data-aos-delay="100">
        <div className="col-sm-12 col-md-3 py-2" >
            <div className="card carta tarjeta">
                <div className="card-horizontal">
                    <div className="bg-card bordes">
                        <i className="fas fa-wallet py-3 px-3 mt-3 mr-3 ml-4" style={{color: "white", fontSize: "30px"}}></i>
                    </div>
                    <div className="">
                        <p className="pl-2 pt-3 mb-0 text">Billetera<br/></p><p className="text-secondary pl-2">Paga online todas tus compras</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-sm-12 col-md-3 py-2">
            <div className="card carta tarjeta">
                <div className="card-horizontal">
                    <div className="bg-card bordes">
                        <i className="fas fa-laptop py-3 px-3 mt-3 mr-3 ml-3" style={{color: "white", fontSize: "30px"}}></i>
                    </div>
                    <div className="">
                        <p className="pl-2 pt-3 mb-0 text">Enviá y recibí dinero</p><p className="text-secondary pl-2">100% online y sin comisiones</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-sm-12 col-md-3 py-2">
            <div className="card carta tarjeta">
                <div className="card-horizontal">
                    <div className="bg-card-3 bordes">
                        <i className="fas fa-newspaper py-3 px-3 mt-3 mr-3 ml-3" style={{color: "white", fontSize: "30px"}}></i>
                    </div>
                    <div className="">
                        <p className="pl-2 pt-3 mb-0 text">Noticias</p><p className="text-secondary pl-2">Paga online todas tus compras</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-sm-12 col-md-3 py-2">
            <div className="card carta tarjeta">
                <div className="card-horizontal card-fondo" 
                      style={{ 
                             backgroundSize: "cover", 
                             backgroundPosition: "50% 50%"}}>
                <div style={{paddingLeft:"8rem"}}>
                    <p className="pl-2 pt-3 mb-0 text text-left text-white">Pet Shops</p><p className="pl-2 text-white" style={{fontSize: "32px"}}><b>20% OFF</b><br/></p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    )
}

export default Tarjetas