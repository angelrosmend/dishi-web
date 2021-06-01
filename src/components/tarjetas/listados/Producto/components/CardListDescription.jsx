import React from 'react'
import { Link } from 'react-router-dom'
import { textColor } from '../../../../../helpers/productTypes'

function CardListDescription({prodInfo}) {
    const {id, sucursal,nombre, descripcion, precio, type} = prodInfo


    return (
    <div class=" description-wrapper px-3 py-3">
      <div class="row ">
          <div class="col">
          <p class="titulo font-weight-bold">{sucursal}</p>
          </div>    
      </div>
      <div class="row">
          <div class="col">
          <h3 class="titulo-productos">{nombre}</h3>
          </div>
      </div>
      <div class="row">
          <div class="col">
          <p class="texto-descripcion">{descripcion} <br/>
          <Link to={`/detalle/${id}`}>
             Leer más
          </Link>
          </p>   
      </div>
      </div>
      <div class="row envio m-auto no-gutters " id="precio">
          <div class="col-lg-5 col-sm-12  m-auto"><p class={`${textColor(type)} mb-lg-0`}>${precio}</p></div>
          <div class="col  m-auto"><p class="texto-envio mb-lg-0 text-lg-right">
              <i class="fas fa-wallet mr-2"></i>Acepta Billetera</p></div>
          <div class="col  m-auto "><p class="texto-envio mb-lg-0 text-lg-right"><i class="fas fa-motorcycle mr-2"></i>Envío a domicilio</p></div>
      </div>
  </div>
    )
}

export default CardListDescription
