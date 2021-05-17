import React from 'react'

function CardListLayout(props) {
    return (
        <div className="card-list-prod-container my-5" {...props} data-aos="fade-up" data-aos-delay="170">
            {props.children}
        </div>
    )
}

export default CardListLayout
