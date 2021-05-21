import React from 'react'

function ItemDescripcion(props) {
    const {icon} = props
    return (
        <div className="col-md-auto col-sm-auto">
            <p className="tienda-texto-general text-center">
                <i className={`${icon} tienda-icon-detail`}/>
                {props.children}
            </p>
        </div>
    )
}

export default ItemDescripcion
