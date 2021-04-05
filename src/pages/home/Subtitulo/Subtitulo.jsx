import React from 'react'
import { Link } from 'react-router-dom'

function Subtitulo(props) {
    const {vermas} = props
 
    return (
        <div className="container margen-dishi" data-aos="fade-up" data-aos-delay="100" >
            <div className="row text-center ver-mas-cont">
             <div className="col-12"> <h3><b>{props.text}</b></h3>
             {vermas ? <p className='text-right mb-3'><Link className='ver-mas' to={vermas}>+ Ver más</Link></p>: null}
             </div>
            </div>
        </div>
    )
}

export default Subtitulo