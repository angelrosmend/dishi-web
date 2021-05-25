import React, { useState } from 'react'
import { useFavItems } from '../hooks/favoritos/useFavItems';
import { useMontoMinimo } from '../hooks/pago/useMontoMinimo';
import { useLog } from '../hooks/usuario/useLog';
import { useNotificaciones } from '../hooks/usuario/useNotificaciones';


export const ContextUser = React.createContext(null); 

export const ContextUserProvider = (props) => {
   /////////////////////ESTADO USUARIO/////////////////////////



   const [{user, logged, casa, comercio, idSucursalCompra}, setStateLog, logout] = useLog()

   const userId = user && user.Id
   const userEmail = user && user.Email
   const userRolId = user && user.RolId
   const MobileUser = {
       Id: userId,
       Email: userEmail,
       RoldId: userRolId
   }

   const USER_VALUES = { user, logged, MobileUser, logout}
  
   const [modalLogin, setModalLogin] = useState(false)
   
  /////////////////////MODAL REGISTRO////////////////////////
   const defaultErrorMessage = 'Algo ha salido mal'
    const [modalRegistroSuccess, setModalRegistroSuccess] = useState(false)

    const [modalRegistroFail, setModalRegistroFail] = useState(false)
    const [registroErrorMessage, setRegistroErrorMessage] = useState(defaultErrorMessage)

  /////////////////////MODAL ACTUALIZAR////////////////////////

    const [modalUpdateSuccess, setModalUpdateSuccess] = useState(false)
    const [modalUpdateFail, setModalUpdateFail] = useState(false)
    const [updateErrorMessage, setUpdateErrorMessage] = useState(defaultErrorMessage)
    useMontoMinimo()

   const [{notificaciones, cantidad}, countNotificaciones]  = useNotificaciones(user, logged)
   const [idCompra, setIdCompra] = useState('')


   const [modalPWDSuccess, setModalPWDSuccess]  = useState({show: false, message: ''})
   const showModalPWDSuccess = message => setModalPWDSuccess({show: true, message: message})


   /////////////////////ESTADO FAVORITOS/////////////////////////


   const [favItems, setFavItems,  addToFav, removeFromFav] = useFavItems()

   const FAVORITOS_VALUES = {
    favItems, setFavItems,  
    addToFav, removeFromFav
   }




  return (
    <ContextUser.Provider value={{
      setStateLog, 
      logout, 
      casa, 
      comercio, 
      user,
      logged, 
      idSucursalCompra, 
      modalRegistroSuccess, 
      setModalRegistroSuccess,
      modalRegistroFail,
      setModalRegistroFail,
      registroErrorMessage, 
      setRegistroErrorMessage,
      modalLogin,
       setModalLogin,
       modalUpdateSuccess, 
       setModalUpdateSuccess,
       modalUpdateFail, setModalUpdateFail,
       updateErrorMessage, setUpdateErrorMessage,
       notificaciones, cantidad, countNotificaciones,
       idCompra, setIdCompra,
       modalPWDSuccess, setModalPWDSuccess,
       showModalPWDSuccess, MobileUser,
       FAVORITOS_VALUES,
       USER_VALUES
       }}>
      {props.children}
    </ContextUser.Provider>
  );
};