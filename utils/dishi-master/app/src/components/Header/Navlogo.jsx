import React from 'react'
import { logoDishi} from '../../assets/img'
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../../css/addons.css';
import { Navbar } from 'react-bootstrap';
import HeaderToggle from './HeaderToggle';


function Navlogo() {
    return (
    <div className="container">
        <div className="row">
            <div className="col-12 py-2" style={{position: 'relative'}}>
                 <Navbar.Brand href="#">
                    <img className="logo" src={logoDishi} alt="logo"/>
                </Navbar.Brand>
                <HeaderToggle/>
            </div>
        </div>
    </div>
    )
}

export default Navlogo
