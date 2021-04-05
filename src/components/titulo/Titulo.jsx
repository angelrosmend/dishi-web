import React from 'react'

function Titulo({text}) {
    return (
     <div className="container pt-5">
        <div className="row text-center aos-init aos-animate" 
             data-aos="zoom-in" 
             data-aos-delay="150">
            <div className="col-12 pb-3">
                <h3>{text}</h3>
            </div>
     </div>
    </div>
    )
}

export default Titulo
