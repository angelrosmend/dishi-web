import React, { Fragment, useState } from 'react'
import { logoHeader } from '../../../../assets/img'


function Burger({toggle}) {

    const [clicked, setClicked] = useState(false)
    const stylesBurger = {transform: `rotate(${clicked ? "180deg": "0deg"}) translateX(0px)`}

    const handleToggle = () => {
        setClicked(!clicked)
        toggle()

    }
    return (
        <div className={`${clicked ? "toggler-wrapper active" : "toggler-wrapper"}`}>
            <div className="custom-burger d-none-lg"
             onClick={handleToggle}
             style={stylesBurger}>
              
            <div className="burger-wrapper">
              <div className="toggler"/>
              <div className="toggler"/>
              <div className="toggler"/> 
            </div>        
            </div>
            <img className={` d-none-lg pt-2 ${clicked ? "logo-toggler active" : "logo-toggler"}`} src={logoHeader} alt=""/>
        </div>
    )
}

export default Burger