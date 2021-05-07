import React, { useContext } from 'react'
import { ContextUser } from '../../context/UserContext'
import '../../css/addons.css'

function Navnotificaciones() {
  return (
    <div className="col-2 dropdown-hover">
        <a className=" dropdown-toggle" id="menu3" type="button" data-toggle="dropdown" href="#">
            <i className="fa fa-bell nav-icon-3 rounded-circle"></i>
        </a>
        <div className="dropdown-menu desplegable2" role="menu" aria-labelledby="menu3">
            <div className="triangle"></div>
             <div className="container-fluid desplegable2-2">
                <div className="row text-center">
                    <div className="col-12 text-primary pt-1">
                        <h5>Notificaciones</h5>
                    </div>

                    <a href="">
                        <div className="col-12 d-flex flex-row b-bottom-1 py-3">
                         <div className="">
                            <i className="fas fa-bell notificacion-bell"></i>
                        </div>
                        <div className="" style={{padding: "0px", textAlign: "left", width: "14rem"}}>

                            <p className="text-marcador text-m0 ts-1">26/08/20 - 4:12 PM</p>
                            <p className="text-marcador text-m0">Flor, tu pedido ya fué enviado.</p>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div className="col-12 d-flex flex-row b-bottom-1 py-3">
                     <div className="">
                        <i className="fas fa-bell notificacion-bell"></i>
                    </div>
                    <div className="" style={{padding: "0px", textAlign: "left", width: "14rem"}} >
                        <p className="text-marcador text-m0 ts-1">26/08/20 - 4:12 PM</p>
                        <p className="text-marcador text-m0">Flor, tu pedido fué confirmado por la tienda. Pronto recibirás un aviso para poder retirar tu compra.</p>
                    </div>
                </div>
            </a>

            <a href="">
                <div className="col-12 d-flex flex-row b-bottom-1 py-3">
                 <div className="">
                    <i className="fas fa-bell notificacion-bell-inactiva"></i>
                </div>
                <div  style={{padding: "0px", textAlign: "left", width: "14rem"}}>
                    <p className="text-marcador text-m0 ts-1">26/08/20 - 4:12 PM</p>
                    <p className="text-marcador text-m0">Flor, tu pedido fué confirmado por la tienda. Pronto recibirás un aviso para poder retirar tu compra.</p>
                </div>
            </div>
        </a>

        <div className="col-12 pt-3">
            <a href="">
                <h6 className="text-primary">Ver todas</h6>
            </a>
        </div>

    </div>
</div> 
</div>
</div>
    )
}

export default Navnotificaciones
