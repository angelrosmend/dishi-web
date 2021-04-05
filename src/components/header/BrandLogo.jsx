import React from 'react'
import Toggle from './Toggle'
import { Navbar } from 'react-bootstrap';
import { logobimbo } from '../../assets/img'
import { useHistory } from 'react-router-dom';


function BrandLogo() {


  const history = useHistory()
  const handleClick = () => history.push('/')
    return (
     <div className="container col-md-3">
        <div className="row ">
                <Navbar.Brand>
                    <a href="#home-start"
                       onClick={handleClick}>
                      <img className="logo" src={logobimbo} alt="logo"/>
                    </a>
                </Navbar.Brand>
        </div>
        <Toggle/>
      </div>
    )
}

export default BrandLogo
