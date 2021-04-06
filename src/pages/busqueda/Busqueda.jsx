import React, { useContext } from 'react'
import { Fragment } from 'react'
import { Spinner } from 'reactstrap'
import { ContextProducts } from '../../context/ProductContext'
import { ContextUser } from '../../context/UserContext'
import { useBusqueda } from '../../hooks/useBusqueda'
import CategoriasGrilla from './CategoriasGrilla'
import Grilla from './Grilla'

function Busqueda() {

    const {keyWordBusqueda} = useContext(ContextProducts)
    const {user} = useContext(ContextUser)
    const {data, loading, error} = useBusqueda(keyWordBusqueda, user)

    const {Categorias, Destacados, Productos} = data
    const destacados = Destacados && Destacados.Items
    const categorias = Categorias && Categorias.Items
    const productos =  Productos && Productos.Items
    const resArr = Object.keys(data).map(i => data[i])
    const numeroDeResultados =  resArr.reduce((acc, item) => acc + item.Items.length, 0) 

    if(loading) return <Spinner style={{ position: 'absolute', width: '3rem', height: '3rem', top: '50%', left: '50%' }} color='primary'/>
    return (
        <div className='' >

           { numeroDeResultados ? 
           <Fragment>
             <Grilla productos={destacados} titulo='Destacados'/>
             <CategoriasGrilla categorias={categorias} titulo='Categorias'/>
             <Grilla productos={productos} titulo=''/>
            </Fragment>
            : 
            <div className="d-flex" style={{minHeight: '100vh'}}>
                <h3 className='m-auto p-5'>No se ha encontrado ningun producto</h3>
            </div>
            }
            {error &&  <h1> Algo ha salido mal</h1>}
        </div>
    )
}

export default Busqueda
