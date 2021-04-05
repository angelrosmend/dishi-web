import React, { useContext, useState } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CarritoContext'
import { Overlay, Popover } from 'react-bootstrap';


function NavCart() {
    const [show, setShow] = useState(false)
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
    const handleShow = (event) => {setShow(true); setTarget(event.target); }
    const handleFade = () => {setShow(false);  }
    const handleShow2 = () => {setShow(true);  }
     const {numeroDeItems, totalFinal} = useContext(CartContext) 

    return (
        <div ref={ref}>
        <Link to='/checkout-1-carrito' className='mr-3 row'>
        <i onMouseEnter={handleShow}
           onMouseLeave={handleFade}
           className="fa fa-shopping-cart nav-icon-2 rounded-circle p-relative ">
           {numeroDeItems ? 
                             <span className='cart-notificaciones'>
                               <h6>{numeroDeItems}</h6>
                              </span>
                            : null}
        </i>
        <Overlay
          show={show}
          target={target}
          placement="bottom"
          container={ref.current}
          containerPadding={0}
        >
          <Popover id="popover-contained">
            <Popover.Content onMouseEnter={handleShow2}  onMouseLeave={handleFade}>
              <div className="d-flex flex-column p-3">
               <h5 className="text-primary" style={{fontSize: '0.9rem'}}><b>Carrito de compras</b></h5>
               <p>{numeroDeItems} productos</p>
               <p>{`$ ${ totalFinal ? totalFinal : 0.00} pesos argentinos`}</p>
              </div>
            </Popover.Content>
          </Popover>
        </Overlay>
          
        </Link>
        </div>
    )
}

export default NavCart
