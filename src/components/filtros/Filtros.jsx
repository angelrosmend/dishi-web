import React, { useState } from 'react'
import './filtros.css'

function Filtros({setOrderby}) {

  const [optionsValue, setOptionsValue] = useState({direction: '', field: ''})


  const handleChange = (e) => {

      switch (e.target.value) {
          case 'PREDETERMINADO':
           setOptionsValue({direction: '', field: ''})
            break;
           case 'MAYOR':
           setOptionsValue({direction: 'desc', field: 'Precio'})
           break;
           case 'MENOR':
            setOptionsValue({direction: 'asc', field: 'Precio'})
            break;
            case 'ALFABETO':
              setOptionsValue({direction: 'asc', field: 'NombreProducto'})
              break;
          default:
            setOptionsValue({direction: '', field: ''})
            break;
      }
    }

    const handleAplicarOrder = (e) => {e.preventDefault(); setOrderby(optionsValue)}
  
    return (
        <div className="container filtros px-4 py-3 mb-5">
        <form onSubmit={handleAplicarOrder}>
            <div className="form-row">
                <div className="col-auto my-auto">
                    <label htmlFor="orderBy" className="mb-0">Ordenar por:</label>
                </div>
              <div className="col my-auto mr-5">
                <select name="orderBy" id="orderBy" onChange={handleChange} className="form-control">
                    <option value='PREDETERMINADO'>Predeterminado</option>
                    <option value='MAYOR'>Mayor precio</option>
                    <option  value='MENOR'>Menor Precio</option>
                    <option  value='ALFABETO'>Orden Alfabético</option>
                </select>
              </div>
              <div className="col text-right my-auto">
                  <button className="btn rounded-pill ">APLICAR</button>
              </div>
            </div>
          </form>   
    </div>  
    )
}

export default Filtros
