import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { Fragment } from 'react'
import {  Modal} from 'reactstrap';


function ModalTerminos(props) {

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal);
    
    function handleClick () {
      toggle()
    }

    const urlTerminos = 'https://bimboatucasa.clickaut.com/content/public/templates/TerminosCondiciones.html'

    const [terminos, setTerminos] = useState('')

    useEffect(()=>{
      axios.get(urlTerminos)
                          .then(response =>{
                          setTerminos(response.data)
                          })
    }, [])
   
    return (
    <Fragment> 
            <a   
                  role="button"
                  onClick={toggle}>
                  {props.children}
            </a>
    <Modal isOpen={modal} toggle={toggle} className=" col-sm px-0" onClick={handleClick}>
          <div className="terminos-bimbo" dangerouslySetInnerHTML={{
    __html: terminos
  }}>
           
          </div>
            <span onClick={toggle} className="text-center w-50 m-auto"><button onClick={handleClick} type="button" className="btn btn-lg btn-primary rounded-pill text-white my-3"><b>OK</b></button></span>
   </Modal>
</Fragment>
    )
}

export default ModalTerminos
