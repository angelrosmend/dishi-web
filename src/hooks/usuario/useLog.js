import { useEffect, useState } from "react";


export function useLog(){

    const [stateLog, setStateLog] = useState({
        user: null,
        logged: false,
        casa: null,
        comercio: null,
        idSucursalCompra: null
 
    })
 
    useEffect(() => {
      const data = localStorage.getItem('usuario-bimbo')
      if(data){
        setStateLog(JSON.parse(data))
      }
    }, [])
 
    useEffect(() => {
      localStorage.setItem('usuario-bimbo', JSON.stringify(stateLog))
    });
    const logout = () => setStateLog({user: null, logged: false, casa:  null, comercio: null})
    return [stateLog, setStateLog, logout]
}