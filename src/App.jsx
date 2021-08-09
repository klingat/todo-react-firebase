import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { LogIn } from './components/LogIn'
import { Register } from './components/Register'
import { Homepage } from './components/Homepage'
import { Dashboard } from './components/Dashboard'
import { AuthProvider } from './Authentication'
import { PrivateRoute } from './PrivateRoute'

import { MuiThemeProvider } from '@material-ui/core/styles'
import { createTheme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { LOGIN, HOMEPAGE, REGISTER, DASHBOARD } from './constants/urls'

const theme = createTheme()

export const App = () => {
  return(
    <AuthProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <Router>
          <Switch>
            <PrivateRoute exact path={HOMEPAGE} component={Homepage} />
            <Route exact path={REGISTER} component={Register} />
            <Route exact path={LOGIN} component={LogIn} />
            <Route exact path={DASHBOARD} component={Dashboard} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </AuthProvider>
  )
}

