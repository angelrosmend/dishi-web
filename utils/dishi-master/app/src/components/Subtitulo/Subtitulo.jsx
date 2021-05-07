import React from 'react'

function Subtitulo(props) {
    return (
        <div className="container margen-dishi" data-aos="fade-up" data-aos-delay="100" >
            <div className="row text-center">
                <div className="col-12 text-right text-vermas" style={{position: "relative" ,top: "3rem", color: "#056ae0"}}>
                    <a href="">
                        <p style={{color:"#056ae0"}}>+ Ver más</p>
                    </a>
                </div>
             <div className="col-12"> <h3><b>{props.text}</b></h3></div>
            </div>
        </div>
    )
}

export default Subtitulo
