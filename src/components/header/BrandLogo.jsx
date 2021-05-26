import React from 'react'
import Toggle from './Toggle'
import { Navbar } from 'react-bootstrap';
import { logobimbo, logoHeader } from '../../assets/img'
import { useHistory } from 'react-router-dom';


function BrandLogo() {
  
  const history = useHistory()
  const handleClick = () => history.push('/')
    return (
                <Navbar.Brand>
                    <a href="#home-start"
                       onClick={handleClick}>
                      <img className="logo to" src={logoHeader} alt="logo"/>
                    </a>
                </Navbar.Brand>  
    )
}

export default BrandLogo
 /*    <Toggle/> */