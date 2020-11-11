import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
  const abc = () => {
    console.log('asd');
  }
  return (
    
    <Route>
      {
        () => props.loggedIn ? <Component {...props} /> : <Redirect to='./' /> 
      }
    </Route>
  )
}

export default React.memo(ProtectedRoute);