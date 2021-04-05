import React, { useState, useRef, useCallback, useEffect } from 'react'
import { useFetchCostoEnvio } from '../hooks/UseFetchCarrito'
import { urlEnvio, urlUpdateCarrito } from '../settings/requestSettings'
import {toast} from 'react-toastify'
import { useUpdateCarrito } from '../hooks/carrito/useUpdateCarrito'
import { formatter } from '../helpers/NumberFormatter'
import { useCartItems } from '../hooks/carrito/useCartItems'
import { useUserCarrito } from '../hooks/carrito/useUserCarrito'
import { useSubtotal } from '../hooks/carrito/useSubtotal'
import { useSubtotalMasEnvio } from '../hooks/carrito/useSubtotalMasEnvio'
import { useTotalFinal } from '../hooks/carrito/useTotalFinal'
import { useDescuentoPorcentaje } from '../hooks/carrito/useDescuentoPorcentaje'
import { useMontoValido } from '../hooks/carrito/useMontoValido'
import { useCompraGratis } from '../hooks/carrito/useCompraGratis'
import { useItemsConfig } from '../hooks/carrito/useItemsConfig'


toast.configure()


export const CartContext = React.createContext()
export const CartContextProvider = (props) => {

 /************************************************EDIT CART ITEMS STARTS *************************************************/


/*USER CARRITO*/

const [userCarrito, setUserCarrito, logoutCarrito] = useUserCarrito()
const {user, logged} = userCarrito



/*EDIT CART ITEMS STARTS */


/* ESTADO ITEMS EN CARRITO */
const [cartItems, setCartItems] = useCartItems()
useUpdateCarrito(urlUpdateCarrito, user, cartItems, logged, setCartItems)



 

/*ADD TO CART*/

const notifyAdd = (product) => toast.info(`Agregaste ${product.nombre} a tu carrito`, {autoClose: '2000', position: toast.POSITION.BOTTOM_LEFT} )
const addToCart = (product) => {setCartItems([...cartItems, {...product, quantity: product.quantity = 1}])
                                notifyAdd(product)};
  
 /*INCREASE */

const increase = product => {
  setCartItems((currentCart) => {
   const existing = cartItems.find(item => item.id === product.id)
   return existing
     ? [
         ...cartItems.map((item) =>
           item.id === product.id
             ? { ...item, quantity: item.quantity + 1 }
             : item,
         ),
       ]
     : [...currentCart, { ...product, quantity: 1 }];
  });
  } 

 /*REMOVE*/

 const notifyRemove = (product) => toast.info(`Sacaste ${product.nombre} de tu carrito`, {autoClose: '2000', position: toast.POSITION.BOTTOM_LEFT} )

const removeFromCart = (item) => {
setCartItems((currentCart) => {
 const indexOfItemToRemove = currentCart.findIndex((cartItem) => cartItem.id === item.id);

 if (indexOfItemToRemove === -1) {
   return currentCart;
 }

 return [
   ...currentCart.slice(0, indexOfItemToRemove),
   ...currentCart.slice(indexOfItemToRemove + 1),
 ];
},
notifyRemove(item)
);
}


/*Modal remover */
const [modalRemover, setModalRemover] = useState(false)
const [itemToRemove, setItemRemove] = useState({})


const showModalremover = () => setModalRemover(true)

const removeFromCartEnCarrito = (item) => {
     
    setCartItems((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex((cartItem) => cartItem.id === item.id);
     
      if (indexOfItemToRemove === -1) {
        return currentCart;
      }
     
      return [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1),
      ];
     }, notifyRemove(item));
     
  }
  

 /*DECREASE */

 function decrease(product, quantity) {
  if (quantity < 2 ) return removeFromCart(product);

  setCartItems((prev) => [
    ...prev.map((item) =>
      item.id === product.id ? { ...item, quantity: quantity - 1} : item,
    ),
  ]);
}
function decreaseEnCarrito(product, quantity) {
  if (quantity < 2 ) return ( setItemRemove(product), showModalremover())

  setCartItems((prev) => [
    ...prev.map((item) =>
      item.id === product.id ? { ...item, quantity: quantity - 1} : item,
    ),
  ]);
}
 /*QUANTITY NAN*/

function changeQuantity(product, quantity) {
  if (quantity === 0 || isNaN(quantity)) return removeFromCart(product);

  setCartItems((prev) => [
    ...prev.map((item) =>
      item.id === product.id ? { ...item, quantity } : item,
    ),
  ]);
}


/* FUNCIONES CALCULAR COSTOS  */



/* SUBTOTAL CARRITO ITEMS*/

/*ITEMS*/

const [subtotal, numeroDeItems] = useSubtotal(cartItems)



 /* ESTADO COSTO ENVIO  */
 const {envio} = useFetchCostoEnvio(urlEnvio,cartItems, subtotal)
const {costo} = envio


/*ITEMS + COSTO DE ENVIO*/

const [subtotalMasCostoEnvio, setSubtotalMasCostoEnvio] =  useSubtotalMasEnvio(subtotal, costo)




const [descuentoPesos, setDescuentoPesos] = useState(0)


const [porcentaje, setPorcentaje] = useDescuentoPorcentaje(subtotalMasCostoEnvio, descuentoPesos,setDescuentoPesos)



/*TOTAL FINAL*/

const totalFinal = useTotalFinal(subtotalMasCostoEnvio, descuentoPesos)

function total(subtotalMasEnvio, descuento) {
  let ammount = subtotalMasEnvio  - descuento
  return  formatter.format(ammount)
 }


 /*******ESTADO VALIDAR MONTO MINIMO**********/
 const [cupon, setCupon] = useState('')
 const [checked, setChecked] = useState(false)
const [cuponValido, setCuponValido] = useState(false)
 const [tipoCupon, setTipoCupon] = useState(null)

const cuponRequest = {Codigo: cupon, tipo:  tipoCupon, Valor: descuentoPesos, Ok: cuponValido }

const [[validMontoEstado, setValidMontoEstado],[validMontoTipo, setValidMontoTipo]] = useMontoValido( totalFinal, descuentoPesos, subtotalMasCostoEnvio)

/** ESTADO COMPRA GRATIS**/

const [compraGratis, setCompraGratis] = useCompraGratis(cartItems, totalFinal, validMontoEstado)

/*ITEMS CONFIG REQUEST*/

const itemsConfig = useItemsConfig(cartItems)


 /************************************************EDIT CART ITEMS ENDS *************************************************/



/* ESTADO MAPA DIRECCION  */


const [direccionEnvio, setDireccionEnvio] = useState('')
const [pisoCasa, setPisoCasa] = useState('')
const [entreCalles, setEntreCalles] = useState('')
const [zipcode, setZipcode] = useState('')
const [localidad, setLocalidad] = useState('')
const [areaCobertura, setAreaCobertura] = useState({estado: false, mensaje: ""})
const [direccionCorta, setDireccionCorta] = useState('')
const [country, setCountry] = useState('')


useEffect(() => {
  function updateCallesDpto() {
    setPisoCasa('')
    setEntreCalles('')
  }
  updateCallesDpto()
}, [direccionEnvio])



const mapRef = useRef()
const onMapLoad = useCallback((map) => {
    mapRef.current = map;
},[])

const zoomDireccion = useCallback(({lat, lng}) => {
  mapRef.current.panTo({lat,lng});
  mapRef.current.setZoom(15)
}, [])

const[marker, setMarker] = useState(null)

const [center, setCenter] = useState({
  lat: -34.603683,
  lng:-58.381557
})


const clearCart = () => {
  setMarker(null)
  setDireccionEnvio('')
  setZipcode('')
  setCartItems([])
  setCupon('')
  setChecked(false)
  setPorcentaje('')
  setDescuentoPesos(0)
}

/* OBTENER ID Y PRECIO FINAL */





const [dataPostPedido, setDataPostPedido] = useState({})




const [modalSuccess, setModalSuccess] = useState(false);
const [modalFail, setModalFail] = useState(false)

const showModalSuccess = () => setModalSuccess(true)
const showModalFail = () => setModalFail(true)


const[ modalFailStock, setModalFailStock] = useState({show: false, message: ""})

const showModalFailStock = message => setModalFailStock({show: true, message: message})

const [tipoDescuento, setTipoDescuento] = useState(null)


    return <CartContext.Provider value={{cartItems,
                                         addToCart, 
                                         removeFromCart,
                                         subtotalMasCostoEnvio, 
                                         setSubtotalMasCostoEnvio,
                                         subtotal, 
                                         numeroDeItems,
                                          changeQuantity,
                                          decrease, 
                                          increase, 
                                          clearCart, 
                                          envio, 
                                          checked, 
                                          setChecked, 
                                          cupon, 
                                          setCupon, 
                                          porcentaje, 
                                          setPorcentaje,
                                          direccionEnvio,
                                          setDireccionEnvio,
                                          country, setCountry,
                                          direccionCorta, setDireccionCorta,
                                          total,
                                          onMapLoad,
                                          zoomDireccion,
                                          marker,
                                          setMarker,
                                          zipcode,
                                          setZipcode,
                                          center,
                                          setCenter,
                                          totalFinal,
                                          itemsConfig,
                                          modalSuccess,
                                          setModalSuccess,
                                          showModalSuccess,
                                          modalFail,
                                          setModalFail,
                                          showModalFail,
                                          pisoCasa, 
                                          setPisoCasa,
                                          entreCalles, 
                                          setEntreCalles,
                                          localidad, 
                                          setLocalidad,
                                          descuentoPesos, 
                                          setDescuentoPesos,
                                          tipoDescuento, 
                                          setTipoDescuento,
                                          areaCobertura, 
                                          setAreaCobertura,
                                          dataPostPedido, 
                                          setDataPostPedido,
                                          userCarrito, 
                                          setUserCarrito,
                                          showModalFailStock,
                                          modalFailStock,
                                           setModalFailStock,
                                           validMontoEstado, 
                                           setValidMontoEstado,
                                           validMontoTipo, setValidMontoTipo, cuponValido, setCuponValido,
                                           decreaseEnCarrito,
                                           compraGratis, setCompraGratis,
                                           cuponRequest, setTipoCupon,
                                           logoutCarrito,
                                           modalRemover, setModalRemover,
                                           notifyRemove,  removeFromCartEnCarrito,
                                           itemToRemove, setItemRemove
                                          }}>
             {props.children}
          </CartContext.Provider>
}
