import { useEffect, useState } from "react"


export function useUserCarrito(){
const [userCarrito, setUserCarrito] = useState({user: '', logged: false, casa:  null, comercio: null})


useEffect(() => {
const data = localStorage.getItem('usuario-carrito')
if(data){
  setUserCarrito(JSON.parse(data))
}
}, [])

useEffect(() => {
localStorage.setItem('usuario-carrito', JSON.stringify(userCarrito))
});

const logoutCarrito = () => setUserCarrito({user: null, logged: false, casa:  null, comercio: null})

return [userCarrito, setUserCarrito, logoutCarrito]
}
