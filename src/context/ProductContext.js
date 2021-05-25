import React, { useEffect, useState } from 'react'
import { useFetchRecetas } from '../hooks/useFetchRecetas';

export const ContextProducts = React.createContext(null); 

export const ContextProductsProvider = (props) => {

  const[idSucursalCompra, setIdSucursalCompra] = useState(835)
 
   useEffect(() => {
   const data = localStorage.getItem('idSucursalCompra-home')
   if(data){
     setIdSucursalCompra(Number(data))
   }/* else{
    localStorage.setItem('idSucursalCompra-home', JSON.stringify(idSucursalCompra))
   } */
  }, [])

  useEffect(() => {
    localStorage.setItem('idSucursalCompra-home', JSON.stringify(idSucursalCompra))
  });

 


  
  /* const configHome = JSON.parse(JSON.stringify(config))
  const {Monomarca: monomarca} = configHome */
  

/*   const {recetas} = useFetchRecetas(urlRecetas, configRecetas) */

  const [montoMinimoCompra, setMontoMinimoCompra] = useState(null)

  const [keyWordBusqueda, setKeyWordBusqueda] = useState('')


  return (
    <ContextProducts.Provider value={{
                                      /* configHome, 
                                      monomarca, 
                                      recetas,  */
                                       idSucursalCompra,
                                       setIdSucursalCompra,
                                       montoMinimoCompra,
                                       setMontoMinimoCompra,
                                       keyWordBusqueda, 
                                       setKeyWordBusqueda}}>
      {props.children}
    </ContextProducts.Provider>
  );
};