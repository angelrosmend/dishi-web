import React from 'react'

function CardInfo({icon, titulo, subtitulo}) {
    return (
        <div className="card mb-3 h-100 mr-3 ml-3 bg-transparent border-0" style={{maxWidth: "250px"}}>
        <div className="row no-gutters align-items-center tienda-radius tienda-card">
          <div className="col-md-4 col-3 text-center bg-celeste">
            <h2><i className={`${icon} text-white`}></i></h2>
          </div>
          <div className="col-md-8 col-9 bg-white tienda-radius-r">
            <div className="card-body">
              <p className="card-text tienda-texto-cards"><strong>{titulo} </strong> <br />{subtitulo}</p>       
            </div>
          </div>
        </div>
      </div>
    )
}

export default CardInfo
