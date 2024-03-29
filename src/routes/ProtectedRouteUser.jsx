import React from 'react'
import { Redirect, Route} from 'react-router-dom'



function ProtectedRouteUser({logged, component: Component,...rest}) {
    return (
        <Route {...rest} 
              render={(props) => {
                  if(logged){
                  return  <Component/>
                  } else{
                   return <Redirect to={{pathname: '/', state: {from: props.location}}}/>
                  }
              }}/>
    )
}

export default ProtectedRouteUser
