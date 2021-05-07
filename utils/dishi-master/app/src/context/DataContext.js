import React from 'react'
import { useFetch } from '../hooks/useFetch';
import { url, config} from '../settings/requestSettings'

export const ContextData = React.createContext(null); 

export const ContextDataProvider = (props) => {

  const {data, loading, error} = useFetch(url, config)
  
  return (
    <ContextData.Provider value={{data, loading, error}}>
      {props.children}
    </ContextData.Provider>
  );
};
