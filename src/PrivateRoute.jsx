import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from './Authentication'

import { LOGIN } from './constants/urls'

export const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const {currentUser} = useContext(AuthContext)
  return (
    <Route
      {...rest}
      render={routeProps =>
        currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={LOGIN} />
        )
      }
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired
}
