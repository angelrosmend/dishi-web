import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { ContextProducts } from '../../context/ProductContext'

function SearchToggle() {
    const {setKeyWordBusqueda} = useContext(ContextProducts)
    const history = useHistory()
    const [keyWord, setKeyWord] = useState('')
    const handlesubmit = (e) => {
        e.preventDefault()
        history.push('/busqueda')
        setKeyWordBusqueda(keyWord)
    }
    const handleChange = (e) => setKeyWord(e.target.value)
    return (
        <form className="form-inline my-2 my-lg-0 pt-3 flex-row"
              onSubmit={handlesubmit}>      
                               
        <div className="col-8  pl-0"> 
             <input className="form-control"
                     required  
                    type="text" 
                    value={keyWord}
                    onChange={handleChange}
                    placeholder="Buscar..."/> 
        </div>
        <div className="col-2 px-0 ">
             <button className="btn btn-outline-primary my-2 my-sm-0 mx-0" type="submit" /* style={{position: "relative", top: "-8px"}} */>Buscar</button> 
        </div>

</form>
    )
}

export default SearchToggle
