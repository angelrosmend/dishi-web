import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ContextProducts } from '../../../context/ProductContext'

function Search() {
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
            <div className="search-lg-container">
                    <form id="custom-search-input" onSubmit={handlesubmit}>
                        <div className="input-group col-md-12">
                            <input className="form-control search htmlFor-search" 
                                   required 
                                   type="text"
                                   value={keyWord}
                                   onChange={handleChange}
                                   placeholder="Qué estás buscando?"/>
                            <span className="input-group-btn">
                                <button className="btn btn-info btn-lg search-button"
                                        type="submit"
                                        >
                                    <i className="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                    </form>
             </div>
    )
}

export default Search
