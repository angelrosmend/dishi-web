import React, { useRef, useState } from 'react'
import { Fragment } from 'react'
import {Tooltip} from "reactstrap"
import Tippy from '@tippyjs/react';
import RegularTooltip from '../../../../tooltip/RegularTooltip';

function CardProductDescription(props) {
    const {nombre, precio, sucursal} = props
    return (
       <Fragment>
           <div className="description-precio">
               <div className="precio-container">
                    <p>${precio}</p>
                </div>
                <div className="payment-icons">

                        <Tippy content="Acepta billetera" placement="bottom">
                          <i id="icon-wallet" className="fas fa-wallet"/>
                        </Tippy>
                        
                        <Tippy content="Acepta credito" placement="bottom">
                        <i id="icon-credit" className="fas fa-credit-card"></i>
                        </Tippy>
                </div>
         
            </div>
            <div className="description-info">
                 <h5><b>{sucursal}</b></h5>
                  <p>{nombre}</p>
            </div>
       </Fragment>
    )
}

export default CardProductDescription
