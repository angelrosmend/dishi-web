import React from 'react'
import { jabon } from '../../../../../assets/img'
import {Link} from 'react-router-dom'

function ProductImg(props) {
    const {imagen, linkId, showBTNS, hideBTNS} = props
    
    return (
        <div className="img-card-g-container img-fuild"
             onMouseEnter={showBTNS}
             onMouseLeave={hideBTNS}>
            <Link to={`/detalle/${linkId}`}>
                 <img src={imagen} alt=""/>
            </Link>
            {props.children}
        </div>
    )
}

export default ProductImg
