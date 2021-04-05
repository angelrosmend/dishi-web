import React, { useState } from 'react'
import './filtros.css'

function FiltrosAlt({setOrderby}) {

  const [optionsValue, setOptionsValue] = useState('')
 

  const handleChange = (e) => {

    switch (e.target.value) {
        case '':
         setOptionsValue('PREDETERMINADO')
          break;
         case '>':
         setOptionsValue('MAYOR')
         break;
         case '<':
          setOptionsValue('MENOR')
          break;
          case 'A':
            setOptionsValue('ALFABETO')
            break;
        default:
          setOptionsValue('PREDETERMINADO')
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
                    <option value=''>Predeterminado</option>
                    <option value='>'>Mayor precio</option>
                    <option  value='<'>Menor Precio</option>
                    <option  value='A'>Orden Alfabético</option>
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

export default FiltrosAlt
