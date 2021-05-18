import React from 'react'
import { Redirect, Route, useLocation } from 'react-router'

function PrivateRoute({ children, ...rest }) {
  let location = useLocation();
  return (
    <Route {...rest}>
      {(localStorage.getItem('token')) ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location }
          }}
        />
      )}
    </Route>
  );
}

export default PrivateRoute
