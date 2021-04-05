import React from 'react'

function FichaProducto(props) {
    return (
        <div className="col-12  ficha-producto">
            <div className="row mt-4 mb-5">
            {props.children}
            </div>
        </div>
    )
}

export default FichaProducto