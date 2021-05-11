import React from 'react'

function BtnLike() {
    return (
        <i className="far fa-heart btn-like-prod" 
           data-toggle="popover" 
           data-trigger="hover" 
           data-placement="left" 
           data-content="Agregar a Favoritos">
        </i>
    )
}

export default BtnLike
