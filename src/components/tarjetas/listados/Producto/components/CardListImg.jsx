import React from 'react'

function CardListImg({imagen, children}) {
    return (
        <div className="img-prod-list-wrapper">
            <img src={imagen} alt="" className=" img-responsive img-fluid"/>
            {children}
        </div>
    )
}

export default CardListImg
