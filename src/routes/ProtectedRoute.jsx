import React from 'react'
import { Redirect, Route } from 'react-router-dom'


function ProtectedRoute({logged, component: Component, items,...rest}) {
    return (
        <Route {...rest} 
              render={(props) => {
                  if(logged && items){
                  return  <Component/>
                  } else{
                   return <Redirect to={{pathname: '/', state: {from: props.location}}}/>
                  }
              }}/>
    )
}

export default ProtectedRoute
