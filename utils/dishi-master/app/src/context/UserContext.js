import React,{useState} from 'react';

export const ContextUser = React.createContext(null); 

export const ContextUserProvider = (props) => {

    const [logged, setLogged] = useState(false)
    const login = () => {
        setLogged(true)
    }
    const logout = () => {
        setLogged(false)
    }
    const loggedIn = logged ? 'show' : 'not-show';
    const loggedOut = logged ? 'not-show' : 'show';

  
  return (
    <ContextUser.Provider value={{logged, login, logout, loggedIn, loggedOut}}>
      {props.children}
    </ContextUser.Provider>
  );
};
