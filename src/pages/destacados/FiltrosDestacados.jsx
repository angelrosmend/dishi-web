import React from 'react'

function FiltrosDestacados() {
    return (
        <div className="container filtros px-4 py-3 mb-5">
        <form action="#">
            <div className="form-row">
                <div className="col-auto my-auto">
                    <label htmlFor="orderBy" className="mb-0">Ordenar por:</label>
                </div>
              <div className="col my-auto mr-5">
                <select name="orderBy" id="orderBy" className="form-control">
                    <option value="">Más relevantes</option>
                    <option value="">Más buscados</option>
                    <option value="">Mayor precio</option>
                    <option value="">Menor Precio</option>
                </select>
              </div>
              <div className="col-auto my-auto ml-4">
                <label htmlFor="filterByAddress" className="mb-0">Dirección:</label>
            </div>
              <div className="col my-auto">
                <select name="filterByAddress" id="filterByAddress" className="form-control">
                    <option value="">Direccion 1</option>
                    <option value="">Direccion 2</option>
                    <option value="">Direccion 3</option>
                    <option value="">Direccion 4</option>
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

export default FiltrosDestacados
