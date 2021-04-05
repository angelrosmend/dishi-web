import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const useUpdateCarrito = (url, user, cartItems, logged, setCartItems) => {
    const IdSucursalConfig = user ? user.IdSucursalCompra : 835
    const [isUpdated, setIsUpdated] = useState(false)
    const userId = user && user.Id
    const userEmail = user && user.Email
    const userRolId = user && user.RolId
    const [itemsConfig, setItemsConfig] = useState([])

    function itemProducto(id, imagen, nombre, precio, Tipo, ValorParaCajaDelivery){
        this.id = id;
        this.imagen = imagen 
        this.nombre = nombre
        this.precio = precio
        this.Tipo = Tipo
        this.ValorParaCajaDelivery = ValorParaCajaDelivery
    }
   
    const clearItems = useCallback(() => {
            setItemsConfig([]);
            setIsUpdated(false)
        },[user])

        useEffect(() => {
        const itemsCosto = cartItems.map(item =>  {
            return {itemType: item.Tipo,
                    itemId: item.id
                    }
            });
        setItemsConfig(itemsCosto)
        }, [cartItems])
    

    useEffect(() => {
        
        if(cartItems.length > 0 && user !== undefined){

            debugger;

            console.log('hook update',cartItems.length, logged)
        axios.post(url, {
            Items: itemsConfig,
            IncludeSucursales: false,
            PaginationSettings: [],
            MobileUser: {
                Id: userId,
                Email: userEmail,
                RolId: userRolId
            },
            APP_ConfigurationID: "20033",
            AppVersion: "1.3.2,907",
            AppDebug: false,
            Fecha: new Date().toISOString(),
            IdSucursal: 1,
            IdSucursalCompra: IdSucursalConfig,
            SucursalCompra: null,
            ModeEmpresas: false,
            MobileMonomarca: false
        })
             .then(response => {
                 const Promociones = response.data.Promociones.map(item => {
                     const {Promocion} = item
                     const {Id, Imagen, Nombre,  Precio, ValorParaCajaDelivery} = Promocion
                     const itemPromo = new itemProducto(Id, Imagen, Nombre,  Precio,  1, ValorParaCajaDelivery)
                     return {...itemPromo}
                    })
                 const Productos = response.data.Productos.map(item => {
                     const {Id, Imagen, NombreProducto, Precio, ValorParaCajaDelivery} = item
                     const itemProd = new itemProducto(Id, Imagen, NombreProducto, Precio, 0, ValorParaCajaDelivery)
                     return {...itemProd}
                 })

                 const result = [...Productos, ...Promociones]
                 

                 const mergeUpdatedInfo =  (result, cartItems) => {
                     let indexResult = 0
                     let updatedArr = new Array()
                     while(indexResult < result.length){
                         for(let indexCart = 0; indexCart < cartItems.length; indexCart++){
                             if(cartItems[indexCart].id === result[indexResult].id){
                                 let item = Object.assign(cartItems[indexCart], result[indexResult])
                                 updatedArr.push(item)
                             }
                         }
                        indexResult++
                     }
                     return updatedArr
                 }

                let updatedCart = mergeUpdatedInfo(result, cartItems)
                setCartItems(updatedCart)
                 setIsUpdated(true)
                
                 toast.info(`Los precios y productos de tu carrito se actualizaron de acuerdo a tu perfil de usuario`, {autoClose: '2000', position: toast.POSITION.BOTTOM_LEFT})
             }).catch(error => {
                 console.log(error)
                 setIsUpdated(false)
             });
        }else{
            clearItems()
        }     
    }, [user]);
    return [isUpdated, setIsUpdated]
}