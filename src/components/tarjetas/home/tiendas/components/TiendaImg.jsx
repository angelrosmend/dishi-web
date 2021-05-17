import React from 'react'
import {Link} from 'react-router-dom'

function TiendaImg(props) {
    const {imagen, linkId} = props
    
    return (
        <div className="img-card-g-container img-fuild p-0 "
            >
            <Link className="p-0" to={`/tienda/${linkId}`}>
                 <img className="img-tienda-card" src={imagen} alt=""/>
            </Link>
            {props.children}
        </div>
    )
}

export default TiendaImg
